import React from "react";
import "../assets/css/Formulario.css";
import SocialButton from "./SocialButton";

function Formulario(props) {
    
    return(
<div className="card">
  <h3>Crea una cuenta</h3>
  <SocialButton></SocialButton>

  <h5>o usa tu email para registrarte</h5>
  <input type="text" placeholder="nombre" />
  <input type="email" placeholder="tuemail@ejemplo.cl" />
  <input type="text" placeholder="contraseña" />
  <input type="text" placeholder="Confirma tu contraseña" />
  <button type="button">Registrarse</button>

      
</div>

    );
}

export default Formulario;