import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../assets/css/SocialButton.css";
/* import Facebook from "../assets/img/facebook.png"
import Github from "../assets/img/github.png"
import Linkedin from "../assets/img/linkedin.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'; */


function SocialButton({icon}) {
    return (
        <>

       
        
         <FontAwesomeIcon icon={icon} />        
        {/* <i className={icon}></i> */}
      

    </>

    );
}

export default SocialButton;