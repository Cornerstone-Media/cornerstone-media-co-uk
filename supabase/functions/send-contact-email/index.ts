import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, company, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Store in database
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    await supabase.from("contact_submissions").insert({
      name,
      email,
      phone: phone || null,
      company: company || null,
      message,
    });

    // Send email via Resend
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Company:</strong> ${company || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    // Notify the team
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Cornerstone Media <noreply@cornerstonemedialtd.com>",
        to: ["info@cornerstonemedialtd.com", "cis.shafiq@gmail.com"],
        subject: `New Contact: ${name}`,
        html: emailHtml,
        reply_to: email,
      }),
    });

    // Auto-reply confirmation to the submitter
    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #1a1a2e, #16213e); padding: 32px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Cornerstone Media</h1>
        </div>
        <div style="padding: 32px;">
          <h2 style="color: #1a1a2e; margin-top: 0;">Thanks for reaching out, ${name}!</h2>
          <p style="color: #444; line-height: 1.6;">
            We've received your message and one of our team will be in touch within <strong>24 hours</strong>.
          </p>
          <p style="color: #444; line-height: 1.6;">
            In the meantime, if you need something urgently, feel free to call us on
            <a href="tel:07846798534" style="color: #e63946; text-decoration: none; font-weight: bold;">07846 798 534</a>.
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <p style="color: #888; font-size: 13px; margin-bottom: 0;">
            Cornerstone Media Ltd &bull; Digital Marketing Agency<br />
            <a href="https://cornerstonemedialtd.com" style="color: #e63946;">cornerstonemedialtd.com</a>
          </p>
        </div>
      </div>
    `;

    const autoReplyRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Cornerstone Media <noreply@cornerstonemedialtd.com>",
        to: [email],
        subject: "We've received your message — Cornerstone Media",
        html: confirmationHtml,
      }),
    });

    if (!autoReplyRes.ok) {
      console.error("Auto-reply error:", await autoReplyRes.text());
    }

    if (!resendRes.ok) {
      const err = await resendRes.text();
      console.error("Resend error:", err);
      // Still return success since we saved to DB
      return new Response(
        JSON.stringify({ success: true, emailSent: false }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, emailSent: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
