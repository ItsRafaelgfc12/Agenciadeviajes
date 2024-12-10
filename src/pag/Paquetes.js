<<<<<<< HEAD
import React from 'react'

const Paquetes = () => {
  return (
    <div>
      
    </div>
  )
}

export default Paquetes
=======
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function Paquetes() {
  const [formData, setFormData] = useState({
    precio: '',
    cantidadPersonas: '',
    departamento: ''
  });
  const [showSuccess, setShowSuccess] = useState(false); // Estado para mostrar el mensaje de éxito

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías procesar los datos (enviar al servidor, etc.)
    
    // Mostrar el mensaje de éxito
    setShowSuccess(true);

    // Opcional: reiniciar el formulario
    setFormData({
      precio: '',
      cantidadPersonas: '',
      departamento: ''
    });
  };

  // Función para manejar los cambios en los select
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <>
      <h1 style={{ color: 'black' }}>¡Vamos por tu destino!!!</h1>
      
      {/* Mensaje de éxito */}
      {showSuccess && (
        <Alert variant="success">
          ¡Datos enviados con éxito! Tu paquete ha sido registrado.
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        
        <Form.Select 
          size="lg" 
          name="precio"
          aria-label="Selecciona el precio del viaje" 
          value={formData.precio}
          onChange={handleChange}
        >
          <option>Selecciona el precio</option>
          <option value="1">S/ 500 - Viaje Económico</option>
          <option value="2">S/ 1000 - Viaje Estándar</option>
          <option value="3">S/ 1500 - Viaje Premium</option>
          <option value="4">S/ 2000 - Viaje Lujo</option>
        </Form.Select>
        <br />

      
        <Form.Select 
          name="cantidadPersonas"
          aria-label="Selecciona la cantidad de personas" 
          value={formData.cantidadPersonas}
          onChange={handleChange}
        >
          <option>Selecciona la cantidad de personas</option>
          <option value="1">1 Persona</option>
          <option value="2">2 Personas</option>
          <option value="3">3 Personas</option>
          <option value="4">4 Personas</option>
          <option value="5">5 Personas</option>
          <option value="6">6 Personas</option>
          <option value="7">7 Personas</option>
          <option value="8">8 Personas</option>
          <option value="9">9 Personas</option>
          <option value="10">10 Personas</option>
        </Form.Select>
        <br />

        
        <Form.Select 
          size="sm" 
          name="departamento"
          aria-label="Selecciona un departamento de Perú"
          value={formData.departamento}
          onChange={handleChange}
        >
          <option>Selecciona un departamento</option>
          <option value="01">Amazonas</option>
          <option value="02">Áncash</option>
          <option value="03">Apurímac</option>
          <option value="04">Arequipa</option>
          <option value="05">Ayacucho</option>
          <option value="06">Cajamarca</option>
          <option value="07">Callao</option>
          <option value="08">Cusco</option>
          <option value="09">Huancavelica</option>
          <option value="10">Huánuco</option>
          <option value="11">Ica</option>
          <option value="12">Junín</option>
          <option value="13">La Libertad</option>
          <option value="14">Lambayeque</option>
          <option value="15">Lima</option>
          <option value="16">Loreto</option>
          <option value="17">Madre de Dios</option>
          <option value="18">Moquegua</option>
          <option value="19">Pasco</option>
          <option value="20">Piura</option>
          <option value="21">Puno</option>
          <option value="22">San Martín</option>
          <option value="23">Tacna</option>
          <option value="24">Tumbes</option>
          <option value="25">Ucayali</option>
        </Form.Select>
        <br />

        {/* Botón de enviar */}
        <Button variant="primary" type="submit">
          Enviar Datos
        </Button>
      </Form>
    </>
  );
}

export default Paquetes;
>>>>>>> 7d074753e60c5d67686af8a9941df828fb5b3ac2
