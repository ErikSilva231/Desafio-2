import React from "react"
//import "../assets/css/SocialButton.css";
import Facebook from "../assets/img/facebook.png"
import Github from "../assets/img/github.png"
import Linkedin from "../assets/img/linkedin.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function SocialButton(props) {
    return (
        <>
        <Container>
      <Row>
        <Col xs={6} md={4}>
        <Image src={Facebook} alt="Facebook" className="iconSocial" fluid />
        </Col>
        <Col xs={6} md={4}>
        <Image src={Github} alt="Github" className="iconSocial" fluid />
        </Col>
        <Col xs={6} md={4}>
        <Image src={Linkedin} alt="Linkedin" className="iconSocial" fluid />
        </Col>
      </Row>
    </Container>

    </>

    );
}

export default SocialButton;