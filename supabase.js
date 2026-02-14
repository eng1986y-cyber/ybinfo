const SUPABASE_URL = "https://puevyaupeytllaquecoc.supabase.co";
const SUPABASE_KEY = "sb_publishable_q-MSMYNCHfGI9NpChBD8nw_se9BSVRB";

window.supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
