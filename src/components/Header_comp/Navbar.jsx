import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
const Navbar = () => {
  return (
    <>
      <Container>
        <Nav fill variant="tabs" className="justify-content-center">
          <Nav.Item as="li">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/counter">Counter</Nav.Link>
          </Nav.Item>

          <Nav.Item as="li">
            <Nav.Link href="/contacts-app">Todo List</Nav.Link>
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
