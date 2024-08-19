import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Header from './assets/components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductList from './assets/components/ProductList';
import ProductModal from './assets/components/ProductModal';
import Footer from './assets/components/Footer';




const App = () => {
  // Estado para el usuario
  const [user, setUser] = useState(null); // Esto para sin usuario
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: 'Smartphone Pro', price: 299, image: 'https://via.placeholder.com/300x200?text=Smartphone+Pro', description: 'Último modelo de smartphone con todas las funciones que necesitas.', type: 'Smartphone' },
    { id: 2, name: 'Smartphone Mini', price: 199, image: 'https://via.placeholder.com/300x200?text=Smartphone+Mini', description: 'Smartphone compacto con funciones esenciales.', type: 'Smartphone' },
    { id: 3, name: 'Laptop Ultra', price: 899, image: 'https://via.placeholder.com/300x200?text=Laptop+Ultra', description: 'Laptop de alto rendimiento adecuada para todas tus necesidades profesionales.', type: 'Laptop' },
    { id: 4, name: 'Laptop Pro', price: 1199, image: 'https://via.placeholder.com/300x200?text=Laptop+Pro', description: 'Laptop premium con funciones avanzadas.', type: 'Laptop' },
    { id: 5, name: 'Smartwatch Classic', price: 199, image: 'https://via.placeholder.com/300x200?text=Smartwatch+Classic', description: 'Sigue tu estado físico y mantente conectado con este elegante reloj inteligente.', type: 'Smartwatch' },
    { id: 6, name: 'Smartwatch Sport', price: 149, image: 'https://via.placeholder.com/300x200?text=Smartwatch+Sport', description: 'Reloj inteligente resistente ideal para deportes y actividades al aire libre.', type: 'Smartwatch' },
    { id: 7, name: 'Tablet Air', price: 349, image: 'https://via.placeholder.com/300x200?text=Tablet+Air', description: 'Tablet portátil perfecta para el trabajo y entretenimiento.', type: 'Tablet' },
    { id: 8, name: 'Tablet Pro', price: 449, image: 'https://via.placeholder.com/300x200?text=Tablet+Pro', description: 'Tablet de alto rendimiento con funciones avanzadas.', type: 'Tablet' },
    { id: 9, name: 'Auriculares Premium', price: 129, image: 'https://via.placeholder.com/300x200?text=Headphones+Premium', description: 'Auriculares con cancelación de ruido para una experiencia de audio inmersiva.', type: 'Headphones' },
    { id: 10, name: 'Auriculares Sport', price: 99, image: 'https://via.placeholder.com/300x200?text=Headphones+Sport', description: 'Auriculares resistentes al sudor ideales para entrenamientos.', type: 'Headphones' },
    { id: 11, name: 'Camera Basic', price: 499, image: 'https://via.placeholder.com/300x200?text=Camera+Basic', description: 'Captura fotos de alta calidad con esta cámara básica.', type: 'Camera' },
    { id: 12, name: 'Camera Pro', price: 799, image: 'https://via.placeholder.com/300x200?text=Camera+Pro', description: 'Cámara avanzada para fotografía y videografía profesional.', type: 'Camera' },
  ];

  // Maneja la visualización del modal de detalles del producto
  const handleShowDetails = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  // Maneja el inicio de sesión del usuario
  const handleLogin = () => {
    setUser({ name: 'Anonimo', photo: 'https://via.placeholder.com/50' });
  };

  // Maneja el cierre de sesión del usuario
  const handleLogout = () => {
    setUser(null);
  };

  // Maneja la actualización del perfil del usuario
  const handleUpdateProfile = (name, photo) => {
    setUser({ ...user, name, photo });
  };

  return (
    <div>
      <Header 
        user={user} 
        onLogin={handleLogin} 
        onLogout={handleLogout} 
        onUpdate={handleUpdateProfile} 
      />
      <main className="container my-4">
        <ProductList products={products} onShowDetails={handleShowDetails} />
      </main>
      <Footer />
      {selectedProduct && (
        <ProductModal
          show={showModal}
          handleClose={handleClose}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default App;