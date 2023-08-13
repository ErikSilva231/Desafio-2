import React from "react";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";



function Registro({error, setError, color, setColor}) {
    return(
    <>
      
        <div className="card">
          <h2>Crea una cuenta</h2>

          <div className="row">
            <div className="col-md-4 col-xs-12 iconSocial">
            <SocialButton icon="fa-brands fa-facebook fa-3x" />
            </div>
            <div className="col-md-4 col-xs-12 iconSocial">
            <SocialButton icon="fa-brands fa-linkedin fa-3x" />
            </div>
            <div className="col-md-4 col-xs-12 iconSocial">
            <SocialButton icon="fa-brands fa-github fa-3x" />
            </div>
          </div>
          <p>O usa tu Email para registrarte</p>
     <Formulario color={color} setColor={setColor} error={error} setError={setError}/>
     
     </div>
     </>
    )
    
}


export default Registro;