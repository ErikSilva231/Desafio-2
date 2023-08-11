import React from "react";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";



function Registro({error, setError, color, setColor}) {
    return(
    <>
      
        <div className="card">
          <h3>Crea una cuenta</h3>

          <div className="row">
            <div className="col-md-4 col-xs-12">
            <SocialButton icon="fa-brands fa-facebook"></SocialButton>
            </div>
            <div className="col-md-4 col-xs-12">
            <SocialButton icon="fa-brands fa-github"></SocialButton>
            </div>
            <div className="col-md-4 col-xs-12">
            <SocialButton icon="fa-brands fa-linkedin"></SocialButton>
            </div>
          </div>
     
     <Formulario color={color} setColor={setColor} error={error} setError={setError}/>
     
     </div>
     </>
    )
    
}


export default Registro;