import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

const supabaseUrl: string = process.env.REACT_APP_SUPABASE_URL ?? "";
const supabaseAnonKey: string = process.env.REACT_APP_SUPABASE_ANON_KEY ?? "";

console.log("env string length = ", supabaseUrl.length)

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);