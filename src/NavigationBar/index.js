import React from 'react'
import {Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const index = () => {
    return (
        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#About">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/About">About</Nav.Link>
      <Nav.Link href="/Resume">Resume</Nav.Link>
      <Nav.Link href="/Projects">Projects</Nav.Link>
      <Nav.Link href="/Contact">Contact</Nav.Link>
    </Nav>
  </Navbar>
</>
    )
}

export default index
