import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user]=useAuthState(auth);
   const handleSignOut=()=>{
          signOut(auth) 
   }
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        sticky="top"
        variant="light"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h3 className="fw-bold fs-2"> Moto House</h3>
            <p>
              <small className="text-danger">Kept Your sweet Moments</small>
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-black fw-bold" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="text-black fw-bold" as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link className="text-black fw-bold" as={Link} to="/Blogs">
                Blogs
              </Nav.Link>
              
            </Nav>
            <Nav.Link
                className="text-primary fw-bold"
               as={Link} to="signup"
              >
                signup
              </Nav.Link>
            <Nav>
            {
              user?
              <button  className="fw-bold rounded-pill bg-primary  text-black  border" onClick={handleSignOut}>Sign Out</button>
              :
                <Nav.Link
                className="text-primary fw-bold"
               as={Link} to="signin"
              >
                sign in
              </Nav.Link>
            }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
