import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Modal, Button } from 'react-bootstrap';
import UserProfile from './UserProfile';
import '../styles/Header.css';

// Componentes de modales
import CartModal from './CartModal';
import OrderHistoryModal from './OrderHistoryModal';

const Header = ({ user, onLogin, onLogout, onUpdate }) => {
  const [showCart, setShowCart] = useState(false);
  const [showOrderHistory, setShowOrderHistory] = useState(false);

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  const handleCloseOrderHistory = () => setShowOrderHistory(false);
  const handleShowOrderHistory = () => setShowOrderHistory(true);

  return (
    <>
      <Navbar bg="light" expand="lg" className="custom-navbar">
        <Navbar.Brand href="#home" className="site-name">Project Nexus | E-commerce</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link onClick={handleShowCart}>Mi Carrito</Nav.Link>
          <Nav.Link onClick={handleShowOrderHistory}>Historial de Compras</Nav.Link>
          <UserProfile user={user} onLogin={onLogin} onLogout={onLogout} onUpdate={onUpdate} />
        </Nav>
      </Navbar>

      {/* Modales */}
      <CartModal show={showCart} handleClose={handleCloseCart} />
      <OrderHistoryModal show={showOrderHistory} handleClose={handleCloseOrderHistory} />
    </>
  );
};

export default Header;


