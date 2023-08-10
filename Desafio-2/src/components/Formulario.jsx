import { useState } from "react";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/Formulario.css";
import Form from 'react-bootstrap/Form';
import Alert from "./Alert";





const Formulario = () => {
  
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  /* const [errorNombre, setErrorNombre] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);*/
  // const [errorFormato, setErrorFormato] = useState(false); 
  const [color, setColor] = useState("");
  const [error, setError] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [contraseña2, setContraseña2] = useState("");
  

  function validarEmail(email) {
    const expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return expresionRegular.test(email);
  }
  
  const validarInput = (e) => {
    e.preventDefault();
    if (!nombre == '' && !email == '' && !contraseña == '' && !contraseña2 == '') {
      if (validarEmail(email)) {
        if (contraseña == contraseña2) {
          setError("El registro ha sido exitoso");

          setColor('green');
        }else {
          setError("Las contraseñas no coinciden");
          setColor('red');
        }
      }else {
        setError("El formato del Email es incorrecto");
        setColor('red');
      }
    }else {
      setError("Debe llenar todos los campos");
      setColor('red');
    }

    
  }

  /* const validarInput = (e) => {
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
      validarEmail(email)
    }
  } */

  return (
    

  <Form onSubmit={validarInput}>
  
  
        <div className="form-group">
          <input className="form-control mb-3" placeholder="Nombre" name="Nombre" onChange={(e) => setNombre(e.target.value)}/>
        </div>
        {/* {errorNombre ? <p className="error text-danger">Debes ingresar tu nombre</p> : null} */}

        <div className="form-group">
          <input className="form-control mb-3" placeholder="Email" name="Email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        {/* {errorEmail ? <p className="error text-danger">Debes ingresar mail</p> : null}
        {errorFormato ? <p className="error text-danger">Debes ingresar formato valido</p> : null} */}
   
        <div className="form-group">
          <input className="form-control mb-3" type="password" placeholder="Ingrese contraseña" name="contraseña" onChange={(e) => setContraseña(e.target.value)}/>
        </div>
    
        <div className="form-group">
          <input className="form-control mb-3" type="password" placeholder="Confirme contraseña" name="contraseña2" onChange={(e) => setContraseña2(e.target.value)}/>
        </div>
      
        
      <button className="btn btn-dark mt-3" type="submit">
            Iniciar Sesión
      </button>
      <Alert mensaje={error} color={color}/>
  </Form>


    );
}

export default Formulario;