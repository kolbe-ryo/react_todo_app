import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

const supabaseUrl: string = process.env.REACT_APP_SUPABASE_URL ?? "";
const supabaseAnonKey: string = process.env.REACT_APP_SUPABASE_ANON_KEY ?? "";

// Supabase Clientの生成
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);