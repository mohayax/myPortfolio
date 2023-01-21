import React from 'react'
import './NavigationBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaGithub} from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


function NavigationBar  () {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className='container-fluid nav_margin'>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <Nav.Link href="mailto:mohayax02@gmail.com">
              <FaEnvelope className='icon' />
            </Nav.Link>

            <Nav.Link href="https://github.com/mohayax" target="_blank">
              <FaGithub className='icon'/>
            </Nav.Link>
           
            <Nav.Link href="https://www.linkedin.com/in/muhammad-yakubu-19671623a/" target="_blank">
              <FaLinkedin className='icon'/>
            </Nav.Link>
          
            <Nav.Link href="https://twitter.com/mohayax88" target="_blank">
              <FaTwitter className='icon' />
            </Nav.Link>
          </Nav>
        <div className="d-flex">
            <Nav.Link href="#projects"  className="me-4" id='nav-link'>Projects</Nav.Link>
          
            <Nav.Link href="#contact" className="me-4 nav-link" id='nav-link'>Contact Me</Nav.Link>
        </div>
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavigationBar