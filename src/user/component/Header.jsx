import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Offcanvas,
  Button,
  Image,
} from "react-bootstrap";

export default function Header() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload(false);
  };

  return (
    <div style={{ backgroundColor: "#F1F3FF", paddingTop: "24px" }}>
      <Col md={{ span: 10, offset: 1 }}>
        <Container>
          {["xl"].map((expand) => (
            <Navbar key={expand} expand={expand}>
              <NavLink to="/">
                <Navbar.Brand>
                  <Image src="../src/assets/logo.png" />
                </Navbar.Brand>
              </NavLink>

              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action2">Our Services</Nav.Link>
                    <Nav.Link href="#action2">Why Us</Nav.Link>
                    <Nav.Link href="#action2">Testimony</Nav.Link>
                    <Nav.Link className="me-2" href="#action2">
                      Faq
                    </Nav.Link>
                    {token ? (
                      <>
                        <NavDropdown
                          title={
                            <span style={{ color: "#0D28A6" }}>Hi, {role}</span>
                          }
                          id="basic-nav-dropdown"
                        >
                          <NavDropdown.Item onClick={handleLogout}>
                            Logout
                          </NavDropdown.Item>
                        </NavDropdown>
                      </>
                    ) : (
                      <>
                        <Button
                          href="/signin"
                          className="me-2 rounded-1"
                          variant="primary"
                        >
                          Sign In
                        </Button>
                        <Button
                          className="rounded-1"
                          href="/signup"
                          variant="success"
                        >
                          Sign Up
                        </Button>
                      </>
                    )}
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Navbar>
          ))}
        </Container>
      </Col>
    </div>
  );
}
