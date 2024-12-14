import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getAllProducts, deleteProduct } from '../api/api';
import ProductCard from './ProductCard';
import { Product } from '../supabaseClient'; // Asegúrate de que el tipo Product sea correcto

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Función para obtener los productos
  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const fetchedProducts = await getAllProducts();
      if (!fetchedProducts) throw new Error('No se encontraron productos');
      setProducts(fetchedProducts);
    } catch (err) {
      setError('Error al cargar los productos');
    } finally {
      setIsLoading(false);
    }
  };

  // Efecto para cargar los productos al montar el componente
  useEffect(() => {
    fetchProducts();
  }, []);

  // Función para manejar la eliminación de un producto
  const handleDelete = async (id: number) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      try {
        await deleteProduct(id);
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
      } catch (err) {
        setError('Error al eliminar el producto');
      }
    }
  };

  // Renderizado condicional mientras se cargan los productos
  if (isLoading) return <div className="text-center">Cargando productos...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  // Renderizado principal del componente
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-detail">Lista de Productos</h2>
      {products.length === 0 ? (
        <div className="text-center text-gray-500">No hay productos disponibles</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-4 bg-white shadow-md rounded-lg"
            >
              {/* Componente de tarjeta para mostrar los detalles del producto */}
              <ProductCard product={product} />
              <button
                onClick={() => handleDelete(product.id)}
                className="mt-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                Eliminar
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
