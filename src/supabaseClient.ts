import { createClient } from '@supabase/supabase-js';

// Obtén las variables de entorno del cliente
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Faltan las variables de entorno VITE_SUPABASE_URL o VITE_SUPABASE_KEY");
}

// Crea el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);

// Define los tipos para las filas de la tabla "productos"
export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  isNew: boolean;
  price: number;
  created_at?: string;
};
