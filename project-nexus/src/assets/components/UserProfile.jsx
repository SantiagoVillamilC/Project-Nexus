import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const UserProfile = ({ user, onLogin, onLogout, onUpdate }) => {
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState(user?.name || '');
  const [newPhoto, setNewPhoto] = useState(user?.photo || '');

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleNameChange = (e) => setNewName(e.target.value);
  const handlePhotoChange = (e) => setNewPhoto(e.target.value);

  const handleSaveChanges = () => {
    onUpdate(newName, newPhoto);
    handleClose();
  };

  return (
    <div className="user-profile">
      {user ? (
        <>
          <img src={user.photo} alt={user.name} className="user-photo" onClick={handleShow} />
          <span>{user.name}</span>
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Tu perfil</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Edita tu nombre"
                    value={newName}
                    onChange={handleNameChange}
                  />
                </Form.Group>
                <Form.Group controlId="formPhoto">
                  <Form.Label>Foto URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa la URL para tu nueva foto"
                    value={newPhoto}
                    onChange={handlePhotoChange}
                  />
                </Form.Group>
                <Button variant="primary" onClick={handleSaveChanges}>Guardar</Button>
                <Button variant="danger" onClick={onLogout} className="ml-2">Cerrar sesion</Button>
              </Form>
            </Modal.Body>
          </Modal>
        </>
      ) : (
        <Button variant="link" onClick={onLogin}>Inicia sesión</Button>
      )}
    </div>
  );
};

export default UserProfile;

