import React from "react";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Registro({error, setError, color, setColor}) {
    return(
    <>
      
        <div className="card">
          <h2>Crea una cuenta</h2>

          <div className="row">
            <div className="col-md-4 col-xs-12 iconSocial">
            <SocialButton icon={faFacebook} />
            </div>
            <div className="col-md-4 col-xs-12 iconSocial">
            <SocialButton icon={faLinkedin} />
            </div>
            <div className="col-md-4 col-xs-12 iconSocial">
            <SocialButton icon={faGithub} />
            </div>
          </div>
          <p>O usa tu Email para registrarte</p>
     <Formulario color={color} setColor={setColor} error={error} setError={setError}/>
     
     </div>
     </>
    )
    
}


export default Registro;