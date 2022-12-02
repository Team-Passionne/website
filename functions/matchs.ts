import { createClient } from 'https://deno.land/x/supabase/mod.ts'

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') as string,
  Deno.env.get('SUPABASE_KEY') as string
)

export default async () => {
  const { data: matchs } = await supabase.from('matchs').select()

  return matchs
}
