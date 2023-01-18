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

            <Nav.Link href="https://github.com/mohayax" target="blank">
              <FaGithub className='icon'/>
            </Nav.Link>
           
            <Nav.Link href="#action2">
              <FaLinkedin className='icon'/>
            </Nav.Link>
          
            <Nav.Link href="#action2">
              <FaTwitter className='icon' />
            </Nav.Link>
          </Nav>
        <div className="d-flex">
          <Nav.Link href="#projects" style={{color:"white"}} className="me-4">Projects</Nav.Link>
          
          <Nav.Link href="#contact" style={{ color: "white" }} className="me-4">Contact Me</Nav.Link>
        </div>
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavigationBar