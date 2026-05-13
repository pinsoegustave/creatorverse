import { createClient } from '@supabase/supabase-js';

const URL = 'https://posjrkchssdpcrsmsfcm.supabase.co'
const API_KEY = 'sb_publishable_ikAI5j_b9vvOu-Lw8__9oQ_TCk6dH84'


export const supabase = createClient(URL, API_KEY);