<<<<<<< HEAD
import React from 'react'

const SepararPaquete = () => {
  return (
    <div>
      
    </div>
  )
}

export default SepararPaquete
=======
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function SepararPaquete() {
  // Estados para manejar los campos del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos
    if (name && email && phone && selectedPackage) {
      setShowSuccessToast(true);
      setShowErrorToast(false);
    } else {
      setShowSuccessToast(false);
      setShowErrorToast(true);
    }
  };

  return (
    <div className="container mt-5">
      <h2>¡Separa tu Paquete!</h2>
      
      {/* Formulario */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Número de teléfono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu número de teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPackage">
          <Form.Label>Selecciona un paquete</Form.Label>
          <Form.Control
            as="select"
            value={selectedPackage}
            onChange={(e) => setSelectedPackage(e.target.value)}
          >
            <option value="">Selecciona...</option>
            <option value="Paquete A">Paquete A(1 persona)</option>
            <option value="Paquete B">Paquete B(2personas)</option>
            <option value="Paquete C">Paquete C(3 personas)</option>
            <option value="Paquete C">Paquete D(4 personas)</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Separar Paquete
        </Button>
      </Form>

      {/* Contenedor de Toasts */}
      <ToastContainer className="position-static mt-3">
        {/* Toast de éxito */}
        {showSuccessToast && (
          <Toast onClose={() => setShowSuccessToast(false)} delay={3000} autohide>
            <Toast.Header>
              <strong className="me-auto">¡Éxito!</strong>
              <small className="text-muted">justo ahora</small>
            </Toast.Header>
            <Toast.Body>¡Paquete separado con éxito! Te contactaremos pronto.</Toast.Body>
          </Toast>
        )}

        {/* Toast de error */}
        {showErrorToast && (
          <Toast onClose={() => setShowErrorToast(false)} delay={3000} autohide>
            <Toast.Header>
              <strong className="me-auto">¡Error!</strong>
              <small className="text-muted">justo ahora</small>
            </Toast.Header>
            <Toast.Body>Por favor, completa todos los campos del formulario.</Toast.Body>
          </Toast>
        )}
      </ToastContainer>
    </div>
  );
}

export default SepararPaquete;
>>>>>>> 7d074753e60c5d67686af8a9941df828fb5b3ac2
