import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getAllProducts, deleteProduct } from '../api/api';
import ProductCard from './ProductCard';
import { Product } from '../supabaseClient';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      const fetchedProducts = await getAllProducts();
      setProducts(fetchedProducts);
    } catch (err) {
      setError('Error al cargar los productos');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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

  if (isLoading) return <div className="text-center">Cargando productos...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

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
            >
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
