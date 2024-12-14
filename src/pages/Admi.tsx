import React, { useState } from 'react';
import AdminLogin from '../components/AdmiLogin';
import AdminContent from '../components/AdminContent'; // El contenido de administración

const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return isAuthenticated ? (
    <AdminContent />
  ) : (
    <AdminLogin onLogin={() => setIsAuthenticated(true)} />
  );
};

export default AdminPage;
