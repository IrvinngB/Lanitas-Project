'use client';

import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import bcrypt from 'bcryptjs';

const AdminLogin: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Obtener la contraseña hasheada de la base de datos
      const { data, error } = await supabase
        .from('administradores')
        .select('password')
        .single();

      if (error || !data) {
        setError('Error al verificar la contraseña.');
        return;
      }

      // Comparar la contraseña ingresada con la hasheada
      const isPasswordValid = await bcrypt.compare(password, data.password);

      if (isPasswordValid) {
        onLogin(); // Acceso permitido
      } else {
        setError('Contraseña incorrecta.');
      }
    } catch (err) {
      console.error(err);
      setError('Error al iniciar sesión.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: 'var(--color-detail)' }}>Iniciar Sesión</h1>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: '10px', border: '1px solid var(--color-accent)', borderRadius: '5px' }}
        />
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
          Iniciar Sesión
        </button>
      </form>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
    </div>
  );
};

export default AdminLogin;
