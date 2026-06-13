import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://rpwfmircyatptlvytiim.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_QrTXWun2ndEgL0Lc_52byA_02F4Urm4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
