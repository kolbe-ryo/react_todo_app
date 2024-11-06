import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

const supabaseUrl: string = process.env.REACT_APP_SUPABASE_URL ?? "";
const supabaseAnonKey: string = process.env.REACT_APP_SUPABASE_ANON_KEY ?? "";

console.log("Supabase URL:", supabaseUrl); // 確認用
console.log("Supabase Anon Key:", supabaseAnonKey); // 確認用

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);