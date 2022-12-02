import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
)

export default async () => {
  const { data: matchs } = await supabase.from('matchs').select()

  return matchs
}
