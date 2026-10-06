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
    const body = await req.json().catch(() => ({}));
    const str = (v: unknown) => (v === undefined || v === null ? "" : String(v)).trim();
    const name = str(body.name);
    const email = str(body.email).toLowerCase();
    const phone = str(body.phone);
    const company = str(body.company);
    const message = str(body.message);
    const recaptchaToken = str(body.recaptchaToken);
    const website = str(body.website);

    // Honeypot — silently pretend success
    if (website) {
      console.warn("Rejected: honeypot field filled");
      return jsonResponse({ success: true, emailSent: true });
    }

    // Content validation
    if (name.length < 2 || name.length > 100) {
      console.warn("Rejected: invalid name length", name.length);
      return jsonResponse({ error: "Please enter your name (2–100 characters)." }, 400);
    }
    if (!email || email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.warn("Rejected: invalid email");
      return jsonResponse({ error: "Please provide a valid email address." }, 400);
    }
    if (phone.length > 20) {
      console.warn("Rejected: phone too long");
      return jsonResponse({ error: "Phone number must be 20 characters or fewer." }, 400);
    }
    if (company.length > 100) {
      console.warn("Rejected: company too long");
      return jsonResponse({ error: "Company name must be 100 characters or fewer." }, 400);
    }
    if (message.length < 10 || message.length > 1000) {
      console.warn("Rejected: invalid message length", message.length);
      return jsonResponse({ error: "Please write a message between 10 and 1,000 characters." }, 400);
    }
    if ((message.match(/\p{L}/gu) || []).length < 3) {
      console.warn("Rejected: message lacks letters");
      return jsonResponse({ error: "Please tell us a little about your project in words." }, 400);
    }

    // reCAPTCHA v3 — enforced when secret configured
    const recaptchaSecret = Deno.env.get("RECAPTCHA_SECRET_KEY");
    let recaptchaPassed = false;
    if (recaptchaSecret) {
      if (!recaptchaToken) {
        console.warn("Rejected: missing reCAPTCHA token");
        return jsonResponse({ error: "Spam check failed. Please refresh the page and try again, or call us on 07846 798 534." }, 400);
      }
      let data: any;
      try {
        const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${encodeURIComponent(recaptchaSecret)}&response=${encodeURIComponent(recaptchaToken)}`,
        });
        data = await res.json();
      } catch (e) {
        console.warn("Rejected: reCAPTCHA verification request failed", e);
        return jsonResponse({ error: "Spam check failed. Please try again shortly, or call us on 07846 798 534." }, 400);
      }
      if (!data?.success) {
        console.warn("Rejected: reCAPTCHA success=false", data?.["error-codes"]);
        return jsonResponse({ error: "Spam check failed. Please refresh the page and try again, or call us on 07846 798 534." }, 400);
      }
      if (typeof data.score !== "number" || data.score < 0.5) {
        console.warn("Rejected: reCAPTCHA score too low", data.score);
        return jsonResponse({ error: "Spam check failed. Please try again, or call us on 07846 798 534." }, 400);
      }
      if (data.action !== "contact_submit") {
        console.warn("Rejected: reCAPTCHA action mismatch", data.action);
        return jsonResponse({ error: "Spam check failed. Please refresh the page and try again." }, 400);
      }
      recaptchaPassed = true;
    } else {
      console.warn("RECAPTCHA_SECRET_KEY not configured — not blocking, auto-reply will be skipped");
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !supabaseKey) {
      console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
      return jsonResponse({ error: "Server configuration error. Please try again later." }, 500);
    }
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Rate limiting
    const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
    const hashBuf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${ip}|${supabaseKey.slice(0, 16)}`));
    const ipHash = Array.from(new Uint8Array(hashBuf)).map((b) => b.toString(16).padStart(2, "0")).join("");
    const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const [ipRes, emailRes] = await Promise.all([
      supabase.from("contact_rate_limits").select("id", { count: "exact", head: true }).eq("ip_hash", ipHash).gte("created_at", since),
      supabase.from("contact_rate_limits").select("id", { count: "exact", head: true }).eq("email", email).gte("created_at", since),
    ]);
    if ((ipRes.count ?? 0) >= 3) {
      console.warn("Rejected: IP rate limit exceeded");
      return jsonResponse({ error: "Too many submissions. Please try again in an hour, or call us on 07846 798 534." }, 429);
    }
    if ((emailRes.count ?? 0) >= 2) {
      console.warn("Rejected: email rate limit exceeded");
      return jsonResponse({ error: "We've already received messages from this email address recently. Please try again in an hour, or call us on 07846 798 534." }, 429);
    }
    const { error: rlError } = await supabase.from("contact_rate_limits").insert({ ip_hash: ipHash, email });
    if (rlError) console.error("Rate limit insert error:", JSON.stringify(rlError));

    const { error: dbError } = await supabase.from("contact_submissions").insert({
      name,
      email,
      phone: phone || null,
      company: company || null,
      message,
    });

    if (dbError) {
      console.error("Database insert error:", JSON.stringify(dbError));
    } else {
      console.log("Contact submission saved to database");
    }

    // Send email via Resend
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY secret");
      return jsonResponse({ error: "Server configuration error. Please try again later." }, 500);
    }

    // HTML-escape every user-supplied value before embedding it in HTML.
    const escHtml = (s: string) =>
      s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

    const safeName = escHtml(String(name));
    const safeEmail = escHtml(String(email));
    const safePhone = phone ? escHtml(String(phone)) : "Not provided";
    const safeCompany = company ? escHtml(String(company)) : "Not provided";
    // Preserve line breaks but escape HTML first.
    const safeMessage = escHtml(String(message)).replace(/\n/g, "<br />");

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Phone:</strong> ${safePhone}</p>
      <p><strong>Company:</strong> ${safeCompany}</p>
      <p><strong>Message:</strong></p>
      <p>${safeMessage}</p>
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
        subject: `New Contact: ${String(name).replace(/[\r\n]+/g, " ").slice(0, 200)}`,
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
          <h2 style="color: #1a1a2e; margin-top: 0;">Thanks for reaching out, ${safeName}!</h2>
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
