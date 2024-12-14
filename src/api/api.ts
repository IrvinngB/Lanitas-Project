import { supabase, Product } from '../supabaseClient';
import bcrypt from 'bcryptjs';



// Función para crear un producto en la tabla "productos"
export const createProduct = async (product: Omit<Product, 'id' | 'created_at'>) => {
  const { data, error } = await supabase
    .from('productos')
    .insert([product]);

  if (error) {
    console.error('Error al crear producto:', error);
    throw error;
  }

  return data;
};


// Función para obtener todos los productos
export const getAllProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase
    .from('productos')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }

  return data || [];
};

// Función para eliminar un producto
export const deleteProduct = async (id: number) => {
  const { error } = await supabase
    .from('productos')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error al eliminar producto:', error);
    throw error;
  }
};


// Función para verificar la contraseña ingresada por el usuario
export const verifyAdminPassword = async (enteredPassword: string): Promise<boolean> => {
  // Obtén al administrador (solo esperamos un administrador en este caso)
  const { data, error } = await supabase
    .from('administradores')
    .select('password')
    .single(); // Solo obtenemos un registro

  if (error) {
    console.error('Error al obtener administrador:', error);
    throw error;
  }

  // Verifica la contraseña ingresada con la almacenada
  const isMatch = bcrypt.compareSync(enteredPassword, data?.password || '');
  return isMatch;
};