import React from 'react';
import {Navbar, Container, Nav, NavDropdown, Form, Button} from "react-bootstrap"
const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/#/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/#/products/:id">products</Nav.Link>
              <Nav.Link href="/#/purchase">purchase</Nav.Link>
              <Nav.Link href="/#/login">login</Nav.Link>
              </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      );
    
};

export default NavBar;