import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Image, Nav, Card } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <div
        className="py-5"
        style={{ backgroundColor: "#FFFFFF", padding: "0px 0px" }}
      >
        <Col md={{ span: 10, offset: 1 }}>
          <Container>
            <Row className="justify-content-lg-between">
              <Col md={3} xs={10}>
                <div className="">
                  <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                  <p>binarcarrental@gmail.com</p>
                  <p>081-233-334-808</p>
                </div>
              </Col>

              <Col className="pt-5 pt-md-0" md={3} xs={5}>
                <div>
                  <p>Our Services</p>
                  <p>Why Us</p>
                  <p>Testimony</p>
                  <p>FAQ</p>
                </div>
              </Col>
              <Col className=" pt-5 pt-md-0" md={3} xs={5}>
                <div className="">
                  <h6>Connect with us</h6>
                  <Image
                    className="pe-2 pt-2 pt-md-o"
                    fluid
                    src="../src/assets/icon_facebook.png"
                  ></Image>
                  <Image
                    className="pe-2 pt-2 pt-md-o"
                    fluid
                    src="../src/assets/icon_instagram.png"
                  ></Image>
                  <Image
                    className="pe-2 pt-2 pt-md-o"
                    fluid
                    src="../src/assets/icon_mail.png"
                  ></Image>
                  <Image
                    className="pe-2 pt-2 pt-md-o"
                    fluid
                    src="../src/assets/icon_twitter.png"
                  ></Image>
                  <Image
                    className="pe-2 pt-2 pt-md-o"
                    fluid
                    src="../src/assets/icon_twitch.png"
                  ></Image>
                </div>
              </Col>

              <Col className="pt-5 pt-md-0" md={3} xs={5}>
                <div className="">
                  <h6>Copyright Binar</h6>
                  <Image src="../src/assets/logo.png" />
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </div>
    </>
  );
}
