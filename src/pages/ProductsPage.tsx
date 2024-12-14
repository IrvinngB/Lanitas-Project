import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard'; 
import { supabase } from '../supabaseClient';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase.from('productos').select('*');
        if (error) {
          console.error('Error al obtener productos:', error);
          setError('Error al cargar los productos.');
        } else {
          setProducts(data || []);
        }
      } catch (err) {
        console.error(err);
        setError('Error al cargar los productos.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <div className="text-center">Cargando productos...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-8 max-w-7xl mx-auto"
    >
      <section>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold" style={{ color: 'var(--color-detail)' }}>
            Todos los Productos
          </h1>
          <p className="text-lg" style={{ color: 'var(--color-text)' }}>
            Explora nuestra amplia gama de productos disponibles.
          </p>
        </motion.div>
        <div className="products-grid">
                {products.map((product) => (
                <div key={product.id} className="product-card">
                    <ProductCard product={product} />
                </div>
                ))}
        </div>
      </section>
    </motion.main>
  );
};

export default ProductsPage;
