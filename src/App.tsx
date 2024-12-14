import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AdminPage from './pages/Admi';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';
const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/ProductsPage" element={<ProductsPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

