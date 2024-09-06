import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CartModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Mi Carrito</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Aquí puedes agregar el contenido del carrito */}
        <p>Contenido del carrito va aquí.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
