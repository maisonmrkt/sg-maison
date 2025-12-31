import { createClient } from '@supabase/supabase-js'

// Supabase client configuration
// These values come from your Supabase project settings

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Client-side Supabase client (uses anon key)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-side Supabase client (uses service role key for admin operations)
// Only use this in API routes or server components, never expose to client
export function createServerSupabaseClient() {
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
  return createClient(supabaseUrl, supabaseServiceKey)
}

// Type definitions for your database tables will go here
// Generate these using: npx supabase gen types typescript --project-id <your-project-id>

export type Database = {
  public: {
    Tables: {
      // organizations: {
      //   Row: { ... }
      //   Insert: { ... }
      //   Update: { ... }
      // }
    }
  }
}
