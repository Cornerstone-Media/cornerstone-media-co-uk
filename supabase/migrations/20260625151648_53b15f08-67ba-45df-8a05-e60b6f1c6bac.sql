
-- Move has_role into a private (non-API-exposed) schema and rewrite policies
CREATE SCHEMA IF NOT EXISTS private;
REVOKE ALL ON SCHEMA private FROM public, anon, authenticated;
GRANT USAGE ON SCHEMA private TO postgres, service_role;

CREATE OR REPLACE FUNCTION private.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Allow the policy evaluator (which runs as the calling role) to invoke it,
-- but keep the function out of the exposed `public` API schema.
REVOKE ALL ON FUNCTION private.has_role(uuid, public.app_role) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION private.has_role(uuid, public.app_role) TO authenticated, service_role;

-- ---- Recreate every policy that referenced public.has_role ----

-- blog_categories
DROP POLICY IF EXISTS "Admins and editors can insert categories" ON public.blog_categories;
DROP POLICY IF EXISTS "Admins and editors can update categories" ON public.blog_categories;
DROP POLICY IF EXISTS "Admins and editors can delete categories" ON public.blog_categories;
CREATE POLICY "Admins and editors can insert categories" ON public.blog_categories
  FOR INSERT TO authenticated
  WITH CHECK (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));
CREATE POLICY "Admins and editors can update categories" ON public.blog_categories
  FOR UPDATE TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role))
  WITH CHECK (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));
CREATE POLICY "Admins and editors can delete categories" ON public.blog_categories
  FOR DELETE TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));

-- blog_post_tags
DROP POLICY IF EXISTS "Admins and editors can insert post tags" ON public.blog_post_tags;
DROP POLICY IF EXISTS "Admins and editors can delete post tags" ON public.blog_post_tags;
CREATE POLICY "Admins and editors can insert post tags" ON public.blog_post_tags
  FOR INSERT TO authenticated
  WITH CHECK (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));
CREATE POLICY "Admins and editors can delete post tags" ON public.blog_post_tags
  FOR DELETE TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));

-- blog_posts
DROP POLICY IF EXISTS "Admins and editors can read all posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Admins and editors can insert posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Admins and editors can update posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Admins and editors can delete posts" ON public.blog_posts;
CREATE POLICY "Admins and editors can read all posts" ON public.blog_posts
  FOR SELECT TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));
CREATE POLICY "Admins and editors can insert posts" ON public.blog_posts
  FOR INSERT TO authenticated
  WITH CHECK (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));
CREATE POLICY "Admins and editors can update posts" ON public.blog_posts
  FOR UPDATE TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role))
  WITH CHECK (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));
CREATE POLICY "Admins and editors can delete posts" ON public.blog_posts
  FOR DELETE TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));

-- blog_tags
DROP POLICY IF EXISTS "Admins and editors can insert tags" ON public.blog_tags;
DROP POLICY IF EXISTS "Admins and editors can update tags" ON public.blog_tags;
DROP POLICY IF EXISTS "Admins and editors can delete tags" ON public.blog_tags;
CREATE POLICY "Admins and editors can insert tags" ON public.blog_tags
  FOR INSERT TO authenticated
  WITH CHECK (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));
CREATE POLICY "Admins and editors can update tags" ON public.blog_tags
  FOR UPDATE TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role))
  WITH CHECK (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));
CREATE POLICY "Admins and editors can delete tags" ON public.blog_tags
  FOR DELETE TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));

-- citations
DROP POLICY IF EXISTS "Admins and editors can view citations" ON public.citations;
DROP POLICY IF EXISTS "Admins and editors can insert citations" ON public.citations;
DROP POLICY IF EXISTS "Admins and editors can update citations" ON public.citations;
DROP POLICY IF EXISTS "Admins and editors can delete citations" ON public.citations;
CREATE POLICY "Admins and editors can view citations" ON public.citations
  FOR SELECT TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));
CREATE POLICY "Admins and editors can insert citations" ON public.citations
  FOR INSERT TO authenticated
  WITH CHECK (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));
CREATE POLICY "Admins and editors can update citations" ON public.citations
  FOR UPDATE TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));
CREATE POLICY "Admins and editors can delete citations" ON public.citations
  FOR DELETE TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));

-- keyword_rankings
DROP POLICY IF EXISTS "Admins and editors can view rankings" ON public.keyword_rankings;
CREATE POLICY "Admins and editors can view rankings" ON public.keyword_rankings
  FOR SELECT TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));

-- nap_profile
DROP POLICY IF EXISTS "Admins and editors can view nap" ON public.nap_profile;
DROP POLICY IF EXISTS "Admins and editors can insert nap" ON public.nap_profile;
DROP POLICY IF EXISTS "Admins and editors can update nap" ON public.nap_profile;
DROP POLICY IF EXISTS "Admins and editors can delete nap" ON public.nap_profile;
CREATE POLICY "Admins and editors can view nap" ON public.nap_profile
  FOR SELECT TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));
CREATE POLICY "Admins and editors can insert nap" ON public.nap_profile
  FOR INSERT TO authenticated
  WITH CHECK (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));
CREATE POLICY "Admins and editors can update nap" ON public.nap_profile
  FOR UPDATE TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));
CREATE POLICY "Admins and editors can delete nap" ON public.nap_profile
  FOR DELETE TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));

-- tracked_keywords
DROP POLICY IF EXISTS "Admins and editors can view tracked keywords" ON public.tracked_keywords;
DROP POLICY IF EXISTS "Admins and editors can insert tracked keywords" ON public.tracked_keywords;
DROP POLICY IF EXISTS "Admins and editors can update tracked keywords" ON public.tracked_keywords;
DROP POLICY IF EXISTS "Admins and editors can delete tracked keywords" ON public.tracked_keywords;
CREATE POLICY "Admins and editors can view tracked keywords" ON public.tracked_keywords
  FOR SELECT TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));
CREATE POLICY "Admins and editors can insert tracked keywords" ON public.tracked_keywords
  FOR INSERT TO authenticated
  WITH CHECK (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));
CREATE POLICY "Admins and editors can update tracked keywords" ON public.tracked_keywords
  FOR UPDATE TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));
CREATE POLICY "Admins and editors can delete tracked keywords" ON public.tracked_keywords
  FOR DELETE TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));

-- user_roles
DROP POLICY IF EXISTS "Admins can view all roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can insert roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can delete roles" ON public.user_roles;
CREATE POLICY "Admins can view all roles" ON public.user_roles
  FOR SELECT TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can insert roles" ON public.user_roles
  FOR INSERT TO authenticated
  WITH CHECK (private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete roles" ON public.user_roles
  FOR DELETE TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role));

-- Now safe to drop the publicly exposed copy
DROP FUNCTION IF EXISTS public.has_role(uuid, public.app_role);

-- ---- Tighten the contact form INSERT policy ----
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;
CREATE POLICY "Anyone can submit contact form" ON public.contact_submissions
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    char_length(btrim(name)) BETWEEN 1 AND 200
    AND char_length(btrim(email)) BETWEEN 3 AND 320
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND char_length(btrim(message)) BETWEEN 1 AND 5000
    AND (phone IS NULL OR char_length(phone) <= 40)
    AND (company IS NULL OR char_length(company) <= 200)
  );
