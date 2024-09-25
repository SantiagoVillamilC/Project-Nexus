import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import UserProfile from './UserProfile';
import '../styles/Header.css';

const Header = ({ user, onLogin, onLogout, onUpdate }) => {
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Navbar.Brand href="#home" className="site-name">Project Nexus | E-commerce</Navbar.Brand>
      <Nav className="ml-auto">
        <UserProfile user={user} onLogin={onLogin} onLogout={onLogout} onUpdate={onUpdate} />
      </Nav>
    </Navbar>
  );
};

export default Header;

