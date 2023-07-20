import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Header() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload(false);
    setToken("");
  };

  return (
    <div
      style={{
        backgroundColor: "#F1F3FF",
        paddingTop: "24px",
      }}
    >
      <Col md={{ span: 10, offset: 1 }}>
        <Container>
          {["xl"].map((expand) => (
            <Navbar key={expand} expand={expand} className="">
              <NavLink to="/">
                <Navbar.Brand>Binar</Navbar.Brand>
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
                    <Nav.Link href="<Faq/>">Our Services</Nav.Link>
                    <Nav.Link href="#action2">Why Us</Nav.Link>
                    <Nav.Link href="#action2">Testimony</Nav.Link>
                    <Nav.Link className="me-2" href="#action2">
                      Faq
                    </Nav.Link>
                    {/* {token && (
                      <NavDropdown title={role} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                          Profile
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={handleLogout}>
                          Logout
                        </NavDropdown.Item>
                      </NavDropdown>
                    )} */}
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
                          className="me-2"
                          variant="secondary"
                        >
                          Sign In
                        </Button>
                        <Button href="/signup" variant="dark">
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
