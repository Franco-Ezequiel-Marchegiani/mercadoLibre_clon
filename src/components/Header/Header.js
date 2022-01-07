import React from 'react';
import './Header.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../../Images/logo.png';
import DisneyPlus from '../../Images/headerDisneyPlus.png';
function Header() {
  return (
      <header className="header">
      <Navbar className='navBarContainer' expand="lg">
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
            <img src={DisneyPlus} alt="" />
        </Container>
    </Navbar>
    <div className='navBarDeskTop'>
        <a href="#" className='headerEnvio'>
        {/* Añadir ícono con :before */}
            <spna>Enviar a</spna>
            <spna>Capital Federal</spna>
        </a>
        <div>
            <ul>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>1234</li>
            </ul>
        </div>
        <div>
            <a href="#">Creá tu cuenta</a>
            <a href="#">Ingresá</a>
            <a href="#"> Mis compras</a>
            <i className="fas fa-shopping-cart"></i>
        </div>
    </div>
      </header>
  );
}

export default Header;
