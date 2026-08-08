import { createBrowserClient } from '@supabase/ssr';
import { Database } from '@/types/database';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  '';

export function createClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    // Return typed fallback client if env variables are missing
    return createBrowserClient<Database>(
      'https://placeholder-project.supabase.co',
      'placeholder-key'
    );
  }
  return createBrowserClient<Database>(supabaseUrl, supabaseAnonKey);
}

export const supabase = createClient();
