import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, company, message, recaptchaToken } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      console.warn("Validation failed: missing required fields");
      return jsonResponse({ error: "Name, email, and message are required." }, 400);
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.warn("Validation failed: invalid email format", email);
      return jsonResponse({ error: "Please provide a valid email address." }, 400);
    }

    // Verify reCAPTCHA v3 token (non-blocking — log but don't reject on failure)
    const recaptchaSecret = Deno.env.get("RECAPTCHA_SECRET_KEY");
    if (recaptchaToken && recaptchaSecret) {
      try {
        const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
        });
        const recaptchaData = await recaptchaRes.json();
        console.log("reCAPTCHA result:", JSON.stringify(recaptchaData));

        if (!recaptchaData.success || (recaptchaData.score !== undefined && recaptchaData.score < 0.3)) {
          console.warn("reCAPTCHA score low or failed:", recaptchaData.score, recaptchaData["error-codes"]);
          // Only block very suspicious submissions (score < 0.3)
          if (recaptchaData.success === false) {
            console.warn("reCAPTCHA token invalid — proceeding anyway to avoid blocking legitimate users");
          }
        }
      } catch (recaptchaErr) {
        console.error("reCAPTCHA verification error (non-blocking):", recaptchaErr);
      }
    } else {
      console.log("reCAPTCHA skipped: token or secret missing");
    }

    // Store in database
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseKey) {
      console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
      return jsonResponse({ error: "Server configuration error. Please try again later." }, 500);
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase.from("contact_submissions").insert({
      name,
      email,
      phone: phone || null,
      company: company || null,
      message,
    });

    if (dbError) {
      console.error("Database insert error:", JSON.stringify(dbError));
      // Continue — still try to send email even if DB fails
    } else {
      console.log("Contact submission saved to database");
    }

    // Send email via Resend
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY secret");
      return jsonResponse({ error: "Server configuration error. Please try again later." }, 500);
    }

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
    console.log("Sending notification email to team...");
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Cornerstone Media <noreply@cornerstone-media.co.uk>",
        to: ["info@cornerstone-media.co.uk", "cis.shafiq@gmail.com"],
        subject: `New Contact: ${name}`,
        html: emailHtml,
        reply_to: email,
      }),
    });

    const resendBody = await resendRes.text();
    if (!resendRes.ok) {
      console.error("Resend notification error:", resendRes.status, resendBody);
    } else {
      console.log("Notification email sent:", resendBody);
    }

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
            <a href="https://cornerstone-media.co.uk" style="color: #e63946;">cornerstone-media.co.uk</a>
          </p>
        </div>
      </div>
    `;

    console.log("Sending auto-reply to:", email);
    const autoReplyRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Cornerstone Media <noreply@cornerstone-media.co.uk>",
        to: [email],
        subject: "We've received your message — Cornerstone Media",
        html: confirmationHtml,
      }),
    });

    const autoReplyBody = await autoReplyRes.text();
    if (!autoReplyRes.ok) {
      console.error("Auto-reply error:", autoReplyRes.status, autoReplyBody);
    } else {
      console.log("Auto-reply sent:", autoReplyBody);
    }

    return jsonResponse({ success: true, emailSent: resendRes.ok });
  } catch (error) {
    console.error("Unhandled error in send-contact-email:", error);
    return jsonResponse({ error: "Something went wrong. Please try again or call us on 07846 798 534." }, 500);
  }
});
