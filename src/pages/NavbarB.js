import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class NavbarB extends Component {
    render() {
        return (
            <div>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <NavLink  to="/">Bosh sahifa</NavLink>
      <NavLink to="/ #rahbariyat">Rahbariyat</NavLink>
      <NavLink to="/#video">Videolavhalar</NavLink>
      <NavLink to="/gallery">Fotolavhalar</NavLink>
      <NavLink  to="/yangiliklar">Yangiliklar</NavLink>
      <NavLink  to="/#bog'lanish">Bog'lanish</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
        )
    }
}
