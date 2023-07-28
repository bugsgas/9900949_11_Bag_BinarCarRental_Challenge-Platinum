import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

export default function OurServices() {
  return (
    <>
      <div
        className=""
        style={{ backgroundColor: "#FFFFFF", padding: "72px 0px" }}
      >
        <Col md={{ span: 10, offset: 1 }}>
          <Container>
            <Row>
              <Col lg={6}>
                <Image
                  fluid
                  className="pt-2"
                  src="./src/assets/img_service.svg"
                ></Image>
              </Col>
              <Col lg={6}>
                <div className="py-5">
                  <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                  <p>
                    Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan
                    harga lebih murah dibandingkan yang lain, kondisi mobil
                    baru, serta kualitas pelayanan terbaik untuk perjalanan
                    wisata, bisnis, wedding, meeting, dll.
                  </p>

                  <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                  <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                  <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                  <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                  <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </div>
    </>
  );
}
