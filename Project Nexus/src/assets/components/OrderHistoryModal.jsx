import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const OrderHistoryModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Historial de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Aquí puedes agregar el contenido del historial de compras */}
        <p>Historial de compras va aquí.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderHistoryModal;
