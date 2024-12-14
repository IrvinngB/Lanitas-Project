import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const AdminForm = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [isNew, setIsNew] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.from('productos').insert([
      {
        name: productName,
        description: productDescription,
        image: productImage,
        price: parseFloat(productPrice),
        isnew: isNew,
      },
    ]);

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage('Producto creado exitosamente');
      setProductName('');
      setProductDescription('');
      setProductImage('');
      setProductPrice('');
      setIsNew(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '600px', margin: '0 auto' }}
    >
      <input
        type="text"
        placeholder="Nombre del producto"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        required
        style={{ padding: '10px', border: '1px solid var(--color-accent)', borderRadius: '5px' }}
      />
      <textarea
        placeholder="Descripción del producto"
        value={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
        required
        style={{ padding: '10px', border: '1px solid var(--color-accent)', borderRadius: '5px', height: '100px' }}
      />
      <input
        type="text"
        placeholder="URL de la imagen del producto"
        value={productImage}
        onChange={(e) => setProductImage(e.target.value)}
        required
        style={{ padding: '10px', border: '1px solid var(--color-accent)', borderRadius: '5px' }}
      />
      <input
        type="number"
        placeholder="Precio del producto (USD)"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        required
        style={{ padding: '10px', border: '1px solid var(--color-accent)', borderRadius: '5px' }}
      />
      <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '16px' }}>
        <input
          type="checkbox"
          checked={isNew}
          onChange={(e) => setIsNew(e.target.checked)}
        />
        ¿Es un producto nuevo?
      </label>
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          backgroundColor: 'var(--color-accent)',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Crear Producto
      </button>
      {message && <p style={{ color: message.startsWith('Error') ? 'red' : 'green' }}>{message}</p>}
    </form>
  );
};

export default AdminForm;
