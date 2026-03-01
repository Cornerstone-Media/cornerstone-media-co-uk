

## Update Email "From" Address

Update the `send-contact-email` edge function to send emails from `noreply@cornerstonemedialtd.com` instead of the default Resend address.

### Change

In `supabase/functions/send-contact-email/index.ts`, update the `from` field:

- **Before:** `"Cornerstone Media <onboarding@resend.dev>"`
- **After:** `"Cornerstone Media <noreply@cornerstonemedialtd.com>"`

The function will then be redeployed automatically.

