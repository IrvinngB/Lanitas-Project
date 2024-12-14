import React from 'react';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const whatsappMessage = `Hola, vi tus productos en tu página web, y me gustó el producto "${product.name}". Me gustaría saber su precio ($${product.price}) y también organizar el envío.`;
  const whatsappLink = `https://wa.me/50763615832?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      style={{
        border: `1px solid var(--color-accent)`,
        borderRadius: '10px',
        padding: '15px',
        margin: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '300px',
        backgroundColor: '#fff',
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '5px',
          marginBottom: '10px',
        }}
      />
      <h3
        style={{
          color: 'var(--color-text)',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          marginBottom: '5px',
        }}
      >
        {product.name}
      </h3>
      <p style={{ color: '#555', marginBottom: '10px' }}>{product.description}</p>
      <p
        style={{
          color: 'var(--color-accent)',
          fontWeight: 'bold',
          marginBottom: '10px',
        }}
      >
        ${product.price.toFixed(2)} USD
      </p>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-bg)',
          border: 'none',
          padding: '10px 15px',
          borderRadius: '5px',
          textDecoration: 'none',
          cursor: 'pointer',
          display: 'block',
          textAlign: 'center',
        }}
      >
        Consultar Producto
      </a>
    </div>
  );
};

export default ProductCard;
