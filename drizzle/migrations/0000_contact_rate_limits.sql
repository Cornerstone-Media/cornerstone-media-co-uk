CREATE TABLE public.contact_rate_limits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_hash text NOT NULL,
  email text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.contact_rate_limits TO service_role;
ALTER TABLE public.contact_rate_limits ENABLE ROW LEVEL SECURITY;
CREATE INDEX contact_rate_limits_ip_idx ON public.contact_rate_limits (ip_hash, created_at);
CREATE INDEX contact_rate_limits_email_idx ON public.contact_rate_limits (email, created_at);