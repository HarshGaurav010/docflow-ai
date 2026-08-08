/**
 * src/lib/supabase/index.ts
 *
 * Barrel export for all Supabase utilities.
 * Import from this file in application code rather than from the individual
 * files directly so that swap-outs (e.g. server vs browser client) are easy.
 */

// Browser-side client (safe to use in 'use client' components)
export { supabase, createClient } from './client';

// Server-side client (use only in Server Components, Route Handlers, Actions)
export { createServerSupabaseClient } from './server';

// Auth helpers (usable in both client and server contexts via respective clients)
export {
  signInWithEmail,
  signUpWithEmail,
  signOutUser,
  getCurrentUser,
  getSession,
} from './auth';
