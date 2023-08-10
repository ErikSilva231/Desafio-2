import { useState } from "react";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/Formulario.css";
import SocialButton from "./SocialButton";
import Form from 'react-bootstrap/Form';

const Formulario = () => {
  
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [errorNombre, setErrorNombre] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)

  const validarInput = (e) => {
    e.preventDefault()
    if(nombre== '' && email ==''){
      setErrorNombre(true)
      setErrorEmail(true)
    }else if(email == ''){
      setErrorEmail(true)
      setErrorNombre(false)
    }else if (nombre== '') {
      setErrorEmail(false)
      setErrorNombre(true)
    } else {
      setErrorEmail(false)
      setErrorNombre(false)
    }
    
  
  }

  

 

  return (
    
<div className="card">
  <h3>Crea una cuenta</h3>
  <SocialButton></SocialButton>

<h6  className="my-3">O usa tu email para registrarte</h6>
  <Form onSubmit={validarInput}>
  
  
        <div className="form-group">
          <input className="form-control mb-3" placeholder="Nombre" name="Nombre" onChange={(e) => setNombre(e.target.value)}/>
        </div>
        {errorNombre ? <p className="error text-danger">Debes ingresar tu nombre</p> : null}


        <div className="form-group">
          <input className="form-control mb-3" placeholder="Email" name="Email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        {errorEmail ? <p className="error text-danger">Debes ingresar tu mail</p> : null}
        
      <button className="btn btn-dark mt-3" type="submit">
            Enviar
          </button>

     
  </Form>

      
</div>

    );
}

export default Formulario;