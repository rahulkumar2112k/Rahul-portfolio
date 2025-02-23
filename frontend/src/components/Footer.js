import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/images/logo.svg";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon4 from "../assets/images/nav-icon4.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";
// import heartIcon from "../assets/images/heart.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rahul-kumar-17a277259/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Linkedin" /></a>
              <a href="https://github.com/rahulkumar2112k" target="_blank" rel="noopener noreferrer"><img src={navIcon4} alt="Github" /></a>
              <a href="https://www.instagram.com/only__rahul_/?hl=en" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p >Copyright 2026. All Rights Reserved</p>
          </Col>
        </Row>
            <div className="copy-right">
              Made With ❤️ By Rahul 
            </div>
      </Container>
    </footer>
  )
}
