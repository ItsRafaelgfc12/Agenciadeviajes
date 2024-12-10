<<<<<<< HEAD
import React from 'react'

const PersonalizarPaquete = () => {
  return (
    <div>
      
    </div>
  )
}

export default PersonalizarPaquete
=======
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function PersonalizarPaquete() {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [preferences, setPreferences] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    
    setSuccessMessage('¡Tu solicitud ha sido enviada exitosamente!');

    
    setDestination('');
    setDates('');
    setNumPeople('');
    setPreferences('');
  };

  return (
    <>
      <h2>¡Escoge tu destino..!</h2>

      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">✈️</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Destino de viaje"
            aria-label="Destino"
            aria-describedby="basic-addon1"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Fechas de viaje (ej. 2024-12-20)"
            aria-label="Fechas"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            required
          />
          <InputGroup.Text id="basic-addon2">📅</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Control
            type="number"
            placeholder="Número de personas"
            aria-label="Número de personas"
            value={numPeople}
            onChange={(e) => setNumPeople(e.target.value)}
            required
          />
          <InputGroup.Text id="basic-addon3">👥</InputGroup.Text>
        </InputGroup>

        <Form.Label htmlFor="preferences">Preferencias de viaje</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            as="textarea"
            id="preferences"
            placeholder="Indica tus preferencias (ej. habitación con vista al mar, hotel 5 estrellas, etc.)"
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
          />
        </InputGroup>

        <Button variant="primary" type="submit">
          Enviar solicitud
        </Button>
      </Form>

      {successMessage && (
        <Alert variant="success" className="mt-3">
          {successMessage}
        </Alert>
      )}
    </>
  );
}

export default PersonalizarPaquete;
>>>>>>> 7d074753e60c5d67686af8a9941df828fb5b3ac2
