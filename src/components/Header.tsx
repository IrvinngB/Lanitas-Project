import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const menuItems = [
        { name: 'Inicio', path: '/' },
        { name: 'Productos', path: '/ProductsPage' },
        { name: 'Nosotros', path: '/About' },
        { name: 'Contacto', path: '/contact' },
    ];

    return (
        <header className="header">
            <div className="header-main">
                {/* Logo */}
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h2 className="header-logo">Lanitas.pa</h2>
                </Link>

                {/* Desktop Navigation */}
                <nav className="header-nav">
                    {menuItems.map(({ name, path }) => (
                        <Link key={name} to={path} className="header-nav-link">
                            {name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-menu-toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? 'Cerrar' : 'Menú'}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}
                    >
                        {menuItems.map(({ name, path }) => (
                            <Link
                                key={name}
                                to={path}
                                className="mobile-menu-link"
                                onClick={() => setIsMenuOpen(false)} // Cierra el menú al seleccionar
                            >
                                {name}
                            </Link>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
