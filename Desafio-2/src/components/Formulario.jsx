import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/Formulario.css";
import SocialButton from "./SocialButton";
import Form from 'react-bootstrap/Form';

function Formulario(props) {
    
    return(
<div className="card">
  <h3>Crea una cuenta</h3>
  <SocialButton></SocialButton>

<h6  className="my-3">O usa tu email para registrarte</h6>
  <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="tuemail@ejemplo.cl" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="password" placeholder="Confirma tu contraseña" />
      </Form.Group>

     
  </Form>

      
</div>

    );
}

export default Formulario;