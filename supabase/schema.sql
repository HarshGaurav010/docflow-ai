-- ====================================================================
-- DocFlow AI — Database Schema, RLS Policies, and Storage Setup (Phase 2A)
-- ====================================================================

-- 1. PROFILES TABLE
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  business_name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. DOCUMENTS TABLE
CREATE TABLE IF NOT EXISTS public.documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  file_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_type TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'Processing',
  uploaded_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. INVOICE DATA TABLE
CREATE TABLE IF NOT EXISTS public.invoice_data (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id UUID NOT NULL REFERENCES public.documents(id) ON DELETE CASCADE,
  vendor_name TEXT,
  invoice_number TEXT,
  invoice_date DATE,
  subtotal NUMERIC(12, 2),
  tax NUMERIC(12, 2),
  total NUMERIC(12, 2),
  currency TEXT DEFAULT 'INR',
  confidence NUMERIC(5, 2),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. WORKFLOW LOGS TABLE
CREATE TABLE IF NOT EXISTS public.workflow_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id UUID NOT NULL REFERENCES public.documents(id) ON DELETE CASCADE,
  action TEXT NOT NULL,
  status TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. SETTINGS TABLE
CREATE TABLE IF NOT EXISTS public.settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  auto_approval_threshold NUMERIC(12, 2) DEFAULT 25000,
  confidence_threshold NUMERIC(5, 2) DEFAULT 80,
  duplicate_detection_enabled BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ====================================================================
-- AUTOMATIC NEW USER TRIGGER
-- Automatically creates a public.profiles and public.settings row on signup
-- ====================================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, business_name)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'business_name', '')
  )
  ON CONFLICT (id) DO NOTHING;

  INSERT INTO public.settings (user_id)
  VALUES (NEW.id)
  ON CONFLICT (user_id) DO NOTHING;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ====================================================================

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.invoice_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workflow_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;

-- 1. Profiles Policies
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- 2. Documents Policies
CREATE POLICY "Users can view own documents"
  ON public.documents FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own documents"
  ON public.documents FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own documents"
  ON public.documents FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own documents"
  ON public.documents FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- 3. Invoice Data Policies
CREATE POLICY "Users can view invoice data for own documents"
  ON public.invoice_data FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.documents
      WHERE public.documents.id = public.invoice_data.document_id
        AND public.documents.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert invoice data for own documents"
  ON public.invoice_data FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.documents
      WHERE public.documents.id = public.invoice_data.document_id
        AND public.documents.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update invoice data for own documents"
  ON public.invoice_data FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.documents
      WHERE public.documents.id = public.invoice_data.document_id
        AND public.documents.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete invoice data for own documents"
  ON public.invoice_data FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.documents
      WHERE public.documents.id = public.invoice_data.document_id
        AND public.documents.user_id = auth.uid()
    )
  );

-- 4. Workflow Logs Policies
CREATE POLICY "Users can view workflow logs for own documents"
  ON public.workflow_logs FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.documents
      WHERE public.documents.id = public.workflow_logs.document_id
        AND public.documents.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert workflow logs for own documents"
  ON public.workflow_logs FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.documents
      WHERE public.documents.id = public.workflow_logs.document_id
        AND public.documents.user_id = auth.uid()
    )
  );

-- 5. Settings Policies
CREATE POLICY "Users can view own settings"
  ON public.settings FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own settings"
  ON public.settings FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own settings"
  ON public.settings FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- ====================================================================
-- SUPABASE STORAGE SETUP (Invoices Bucket)
-- ====================================================================

-- Create private bucket 'invoices' if not existing
INSERT INTO storage.buckets (id, name, public)
VALUES ('invoices', 'invoices', false)
ON CONFLICT (id) DO NOTHING;

-- Storage RLS Policies
CREATE POLICY "Allow authenticated users to upload invoices to own folder"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'invoices' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "Allow users to read own uploaded invoices"
  ON storage.objects FOR SELECT
  TO authenticated
  USING (
    bucket_id = 'invoices' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "Allow users to delete own uploaded invoices"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'invoices' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );
