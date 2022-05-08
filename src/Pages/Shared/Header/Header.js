import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        sticky="top"
        variant="light"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h3>M E M O R Y</h3>
            <p>
              <small className="text-danger">Kept Your sweet Moments</small>
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-primary fw-bold" href="About">
                About
              </Nav.Link>
              <Nav.Link className="text-primary fw-bold" href="blogs">
                Blogs
              </Nav.Link>
              <Nav.Link className="text-primary fw-bold" href="Home#packages">
                packages
              </Nav.Link>
            </Nav>
            <Nav>
           
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;