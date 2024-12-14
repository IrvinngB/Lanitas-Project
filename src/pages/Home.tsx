import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaHeart, FaShoppingBag } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import { supabase } from '../supabaseClient';

interface Product {
    id: number;
    name: string;
    description: string; // Agrega description
    price: number;
    image: string; // Cambia image_url por image si es necesario
    isNew: boolean; // Agrega isNew
  }
  

const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data, error } = await supabase.from('productos').select('*').limit(3);
            if (error) console.error('Error al obtener productos:', error);
            setProducts(data || []);
        };
        fetchProducts();
    }, []);

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-8 max-w-7xl mx-auto"
        >
            {/* Hero Section */}
            <section className="mb-16">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center bg-white shadow-md p-8 rounded-lg"
                >
                    <h1 className="text-5xl font-bold mb-4" style={{ color: 'var(--color-detail)' }}>
                        Bienvenidos a Lanita.pa
                    </h1>
                    <p className="text-lg" style={{ color: 'var(--color-text)' }}>
                        Explora la suavidad y el encanto de nuestros productos artesanales hechos con dedicación y estilo.
                    </p>
                </motion.div>
                <div className="flex justify-center space-x-12 mt-12">
                    {[
                        { icon: FaLeaf, text: 'Comprometidos con el medio ambiente' },
                        { icon: FaHeart, text: 'Cada producto cuenta una historia de amor' },
                        { icon: FaShoppingBag, text: 'Solo lo mejor en materiales premium' },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 + index * 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <item.icon className="text-5xl mb-2" style={{ color: 'var(--color-accent)' }} />
                            <p className="text-lg font-medium" style={{ color: 'var(--color-text)' }}>
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Products Section */}
            <section className="mb-16">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-semibold mb-4" style={{ color: 'var(--color-detail)' }}>
                        Productos Más Recientes
                    </h2>
                    <p className="text-lg mb-8" style={{ color: 'var(--color-text)' }}>
                        Descubre lo último en nuestra colección única de productos elaborados con pasión.
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

            {/* About Section */}
            <section>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 rounded-lg shadow-md text-center"
                >
                    <h2 className="text-4xl font-semibold mb-4" style={{ color: 'var(--color-detail)' }}>
                        Acerca de Lanita.pa
                    </h2>
                    <p className="text-lg mb-4" style={{ color: 'var(--color-text)' }}>
                        En Lanita.pa, transformamos la lana en obras de arte hechas a mano. Cada pieza refleja nuestra pasión por la tradición y el compromiso con la sostenibilidad.
                    </p>
                    <p className="text-lg" style={{ color: 'var(--color-text)' }}>
                        Esta aventura comenzó como un simple pasatiempo, pero ha crecido hasta convertirse en un sueño hecho realidad. Nos dedicamos a crear crochet artesanal con amor y atención al detalle, trayendo calidez y elegancia a cada rincón de tu hogar.
                    </p>
                </motion.div>
            </section>
        </motion.main>
    );
};

export default Home;
