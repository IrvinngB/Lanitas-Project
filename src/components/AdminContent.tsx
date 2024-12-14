'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlus, FaList, FaCog } from 'react-icons/fa'
import AdminForm from './AdmiForm'
import ProductList from './ProductList' 

const AdminContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'add' | 'list'>('add')

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-8 max-w-7xl mx-auto"
    >
      {/* Header Section */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center bg-white shadow-md p-8 rounded-lg"
        >
          <h1 className="text-5xl font-bold mb-4" style={{ color: 'var(--color-detail)' }}>
            Panel de Administración
          </h1>
          <p className="text-lg" style={{ color: 'var(--color-text)' }}>
            Gestiona los productos y configuraciones de Lanita.pa
          </p>
        </motion.div>
        <div className="flex justify-center space-x-12 mt-12">
          {[
            { icon: FaPlus, text: 'Agregar Productos' },
            { icon: FaList, text: 'Listar Productos' },
            { icon: FaCog, text: 'Configuraciones' },
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

      {/* Admin Content Section */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-semibold mb-4" style={{ color: 'var(--color-detail)' }}>
            {activeTab === 'add' ? 'Agregar Nuevo Producto' : 'Lista de Productos'}
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--color-text)' }}>
            {activeTab === 'add'
              ? 'Añade nuevos productos a tu catálogo de Lanita.pa'
              : 'Gestiona los productos existentes en tu catálogo'}
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab('add')}
            className={`px-6 py-3 text-sm font-medium transition-colors rounded-l-lg ${
              activeTab === 'add' ? 'bg-accent text-white' : 'bg-white'
            }`}
            style={{
              backgroundColor: activeTab === 'add' ? 'var(--color-accent)' : 'white',
              color: activeTab === 'add' ? 'white' : 'var(--color-text)',
            }}
          >
            Agregar Producto
          </button>
          <button
            onClick={() => setActiveTab('list')}
            className={`px-6 py-3 text-sm font-medium transition-colors rounded-r-lg ${
              activeTab === 'list' ? 'bg-accent text-white' : 'bg-white'
            }`}
            style={{
              backgroundColor: activeTab === 'list' ? 'var(--color-accent)' : 'white',
              color: activeTab === 'list' ? 'white' : 'var(--color-text)',
            }}
          >
            Lista de Productos
          </button>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          {activeTab === 'add' ? <AdminForm /> : <ProductList />}
        </motion.div>
      </section>
    </motion.main>
  )
}

export default AdminContent
