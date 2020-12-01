import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (

      <div className = "navbar navbar-expand-lg navbar-light">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

          <Navbar.Brand href = "home"> Traffic Fatality Analyzer </Navbar.Brand>

          <Navbar.Toggle aria-controls = "responsive-navbar-nav" />
          <Navbar.Collapse id = "responsive-navbar-nav">
            <Nav className = "mr-auto">
              <Nav.Link href = "queriesPage"> Queries </Nav.Link>
              <Nav.Link href = "map"> Map </Nav.Link>
              <Nav.Link href = "graph"> Graph </Nav.Link>
              <Nav.Link href = "about">  About </Nav.Link>
            </Nav>

          </Navbar.Collapse>

        </Navbar>
      </div>
    );
  }
}
export default NavBar;