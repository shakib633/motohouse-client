import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import css from "./Header.css"
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
     <p className=""> <img className="image-head mt-" src="https://i.ibb.co/xm2pVHQ/aaa-removebg-preview.png" alt="aaa-removebg-preview" border="0"></img></p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mx-5">
              <Nav.Link className="text-black fw-bold" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="text-black fw-bold" as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link className="text-black fw-bold" as={Link} to="/Blogs">
                Blogs
              </Nav.Link>

             
              
              
              </Nav>
              {user && <>
                               
                
              <Nav.Link className="text-black fw-bold" as={Link} to="/additem">
                Add Item
              </Nav.Link>
              <Nav.Link className="text-black fw-bold" as={Link} to="/manageinventories">
                Manage
              </Nav.Link>
                            </>}

            
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
            {user && <>
                                <Nav.Link className='text-white' as={Link} to="/manageinventories">Manage Items</Nav.Link>
                                <Nav.Link className='text-white' as={Link} to="/additem">Add Item</Nav.Link>
                            </>}
            </Nav>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
    </>
  );
};

export default Header;
