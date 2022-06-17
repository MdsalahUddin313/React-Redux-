import React from "react";
import { Nav, Container } from "react-bootstrap";

const Navbar = () => {
  return (
    <>
      <Container>
        <Nav className="justify-content-center bg-secondary">
          <Nav.Item as="li">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/counter">Counter</Nav.Link>
          </Nav.Item>

          <Nav.Item as="li">
            <Nav.Link href="/">Todo List</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/">Calculator</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/">Ecommerce</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </>
  );
};

export default Navbar;
/*
<a >Home</a>
      <a href="/counter">Counter App</a>
      <a href="#">Todo List</a>
      <a href="#">Calculator</a>
      <a href="#">Ecommerce website</a>
      
*/
