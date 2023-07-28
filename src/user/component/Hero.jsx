import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function Hero({ showButton, showText, showImg }) {
  return (
    <>
      <div className="pt-5" style={{ backgroundColor: "#F1F3FF" }}>
        <Col md={{ span: 10, offset: 1 }}>
          <Container>
            <Row>
              <Col lg={6} className="pe-5">
                <div className="py-5">
                  {showText && (
                    <>
                      <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                      <p>
                        Selamat datang di Binar Car Rental. Kami menyediakan
                        mobil kualitas terbaik dengan harga terjangkau. Selalu
                        siap melayani kebutuhanmu untuk sewa mobil selama 24
                        jam.
                      </p>
                    </>
                  )}
                  <NavLink to="carimobil">
                    {showButton && (
                      <Button variant="dark"> Mulai Sewa Mobil</Button>
                    )}
                  </NavLink>
                </div>
              </Col>
              <Col lg={6} className="">
                {showImg && (
                  <Image
                    fluid
                    className="pt-2"
                    src="./src/assets/img_car.svg"
                  ></Image>
                )}
              </Col>
            </Row>
          </Container>
        </Col>
      </div>
    </>
  );
}
