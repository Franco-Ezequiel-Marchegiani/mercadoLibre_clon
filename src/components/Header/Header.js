import React from 'react';
import './Header.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../../Images/logo.png'
function Header() {
  return (
      <header className="header">
      <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand> <img src={Logo} alt="" /></Navbar.Brand>
            <input type="text" />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#link">Ofertas</Nav.Link>
                <Nav.Link href="#link">Categorias</Nav.Link>
                <Nav.Link href="#link">Login</Nav.Link>
                <Nav.Link href="#link">Register</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
      </header>
  );
}

export default Header;
