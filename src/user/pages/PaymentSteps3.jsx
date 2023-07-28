import React, { useState } from "react";
import { Button, Container, Row, Col, Card, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import PaymentHeader from "../component/PaymentHeader";

function PaymentSteps3() {
  const breadcrumbItems = [
    { id: 1, title: "Pilih Metode", active: true },
    { id: 2, title: "Bayar", active: true },
    { id: 3, title: "Tiket", active: true },
  ];

  return (
    <>
      <div className="py-5" style={{ backgroundColor: "#F1F3FF" }}>
        {/* <Col md={{ span: 10, offset: 1 }}>
          <Container className="d-flex align-items-center justify-content-between">
            <div>
              <button
                onClick={() => window.history.back()}
                className="d-flex btn btn-link custom-button"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                <h6 className="m-0">Kembali</h6>
              </button>
            </div>

            <div className="d-flex">
              {breadcrumbItems.map((item) => (
                <div
                  className={`d-flex align-items-center link-item ${
                    item.active ? "active" : "inactive"
                  }`}
                >
                  <span
                    className={`blue-circle me-2 ${
                      item.active ? "active" : "inactive"
                    }`}
                    style={{ fontSize: "12px" }}
                  >
                    {item.id}
                  </span>
                  <p className="m-0">{item.title}</p>
                </div>
              ))}
            </div>
          </Container>
        </Col> */}
        <PaymentHeader breadcrumbItems={breadcrumbItems} />
      </div>
      <Col className="py-5" md={{ span: 10, offset: 1 }}>
        <Container className="d-flex align-items-center flex-column">
          <Image src="../src/assets/success.png" alt="Success" fluid />
          <h6>Pembayaran Berhasil!</h6>
          <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
          <Card className="p-3" style={{ width: 605 }}>
            <div className="d-flex justify-content-between">
              <h6>Invoice</h6>
              <Button>Unduh</Button>
            </div>
            <p>*no invoice</p>
          </Card>
        </Container>
      </Col>
    </>
  );
}

export default PaymentSteps3;
