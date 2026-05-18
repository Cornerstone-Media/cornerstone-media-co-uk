-- NAP profile (singleton row pattern)
CREATE TABLE public.nap_profile (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name TEXT NOT NULL,
  address_line1 TEXT NOT NULL,
  address_line2 TEXT,
  city TEXT NOT NULL,
  region TEXT,
  postcode TEXT NOT NULL,
  country TEXT NOT NULL DEFAULT 'United Kingdom',
  phone TEXT NOT NULL,
  website TEXT NOT NULL,
  email TEXT,
  hours TEXT,
  description TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.nap_profile ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins and editors can view nap"
  ON public.nap_profile FOR SELECT TO authenticated
  USING (has_role(auth.uid(), 'admin') OR has_role(auth.uid(), 'editor'));

CREATE POLICY "Admins and editors can insert nap"
  ON public.nap_profile FOR INSERT TO authenticated
  WITH CHECK (has_role(auth.uid(), 'admin') OR has_role(auth.uid(), 'editor'));

CREATE POLICY "Admins and editors can update nap"
  ON public.nap_profile FOR UPDATE TO authenticated
  USING (has_role(auth.uid(), 'admin') OR has_role(auth.uid(), 'editor'));

CREATE POLICY "Admins and editors can delete nap"
  ON public.nap_profile FOR DELETE TO authenticated
  USING (has_role(auth.uid(), 'admin') OR has_role(auth.uid(), 'editor'));

CREATE TRIGGER trg_nap_profile_updated_at
  BEFORE UPDATE ON public.nap_profile
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- Citations
CREATE TABLE public.citations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  platform_name TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'general',
  domain_authority INTEGER,
  priority TEXT NOT NULL DEFAULT 'medium',
  status TEXT NOT NULL DEFAULT 'pending',
  listing_url TEXT,
  submission_url TEXT,
  username TEXT,
  submitted_at DATE,
  live_at DATE,
  nap_name TEXT,
  nap_address TEXT,
  nap_phone TEXT,
  nap_website TEXT,
  notes TEXT,
  is_free BOOLEAN NOT NULL DEFAULT true,
  created_by UUID,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.citations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins and editors can view citations"
  ON public.citations FOR SELECT TO authenticated
  USING (has_role(auth.uid(), 'admin') OR has_role(auth.uid(), 'editor'));

CREATE POLICY "Admins and editors can insert citations"
  ON public.citations FOR INSERT TO authenticated
  WITH CHECK (has_role(auth.uid(), 'admin') OR has_role(auth.uid(), 'editor'));

CREATE POLICY "Admins and editors can update citations"
  ON public.citations FOR UPDATE TO authenticated
  USING (has_role(auth.uid(), 'admin') OR has_role(auth.uid(), 'editor'));

CREATE POLICY "Admins and editors can delete citations"
  ON public.citations FOR DELETE TO authenticated
  USING (has_role(auth.uid(), 'admin') OR has_role(auth.uid(), 'editor'));

CREATE TRIGGER trg_citations_updated_at
  BEFORE UPDATE ON public.citations
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

CREATE INDEX idx_citations_status ON public.citations(status);
CREATE INDEX idx_citations_priority ON public.citations(priority);