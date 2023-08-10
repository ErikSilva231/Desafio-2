import React from "react";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";


function Registro(props) {
    return(
        <>
        <div className="card">
          <h3>Crea una cuenta</h3>
          <SocialButton></SocialButton>
          <h6  className="my-3">O usa tu email para registrarte</h6>
          <Formulario></Formulario>
           
        </div>
        </>
    )
    
}

export default Registro;