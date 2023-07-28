import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Banner() {
  return (
    <>
      <div
        className="py-5"
        style={{ backgroundColor: "#FFFFFF", padding: "0px 0px" }}
      >
        <Col md={{ span: 10, offset: 1 }}>
          <Container className="banner">
            <div className="banner-css text-center">
              <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <NavLink to="carimobil">
                <Button variant="warning">Mulai Sewa Mobil</Button>
              </NavLink>
            </div>
          </Container>
        </Col>
      </div>
    </>
  );
}
