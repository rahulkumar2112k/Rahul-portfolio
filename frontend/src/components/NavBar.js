import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/images/logo.svg';
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';
import navIcon4 from '../assets/images/nav-icon4.svg';
import navIcon5 from '../assets/images/nav-icon5.svg';
import navIcon6 from '../assets/images/nav-icon6.svg';

import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rahul-kumar-17a277259" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/rahulkumar2112k" target="_blank" rel="noopener noreferrer"><img src={navIcon4} alt="Github" /></a>
              <a href="https://leetcode.com/u/Rahul_kumar_2112k/" target="_blank" rel="noopener noreferrer"><img src={navIcon6} alt="LeetCode" /></a>
              <a href="https://www.instagram.com/only__rahul_/?hl=en" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram" /></a>
              <a href="https://x.com/Rahul2112k" target="_blank" rel="noopener noreferrer"><img src={navIcon5} alt="Twitter" /></a>
              <a href="https://www.facebook.com/profile.php?id=100025319719297" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Facebook" /></a>
            </div>
            <HashLink to="#connect">
              <button className="vvd" onClick={() => console.log('connect')}>
                <span>Let's Connect</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
