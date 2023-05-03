import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function CookieJar() {
  return (
    <Navbar expand="lg" className="border-bottom">
      <Container>
        <Navbar.Brand href="#">
          <img src={"/triviality.png"} alt="" style={{ height: 40 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#quiz">Quiz</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
