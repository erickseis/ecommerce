import React, { useState } from 'react';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  Offcanvas,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CartSidebar from './Cart';

const NavBar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (token) {
      setShow(true);
    } else {
      navigate('/login');
    }
  };

  const logout = () => {
    localStorage.setItem('token', '');
    navigate('/login');
  };

  return (
    <>
      <Navbar
        style={{ backgroundColor: '#23BAC4', color: 'black' }}
        bg='#23BAC4'
        variant='dark'
        expand='lg'
      >
        <Container fluid>
          <Navbar.Brand style={{ color: 'black' }} href='/#/'>
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{
                maxHeight: '100px',
                marginLeft: '5rem',
                display: 'flex',
                gap: '0.5rem',
              }}
              navbarScroll
            >
              <Nav.Link style={{ color: 'black' }} href='/#/products/:id'>
                products
              </Nav.Link>
              <Nav.Link style={{ color: 'black' }} href='/#/purchase'>
                purchase
              </Nav.Link>

              {token ? (
                <Nav.Link
                  id='logout'
                  variant='danger'
                  as={Button}
                  onClick={logout}
                >
                  log out
                </Nav.Link>
              ) : (
                <Nav.Link
                  style={{ color: 'black' }}
                  id='login'
                  variant='danger'
                  href='/#/login'
                >
                  login
                </Nav.Link>
              )}
              <Nav.Link
                id='cart'
                style={{ fontSize: '20px' }}
                variant='dark'
                as={Button}
                onClick={handleShow}
              >
                <i className='fa-solid fa-cart-shopping'></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <CartSidebar show={show} handleClose={handleClose} />
    </>
  );
};

export default NavBar;
