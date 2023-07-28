import React from "react";
import { Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function PaymentHeader({ breadcrumbItems }) {
  return (
    <Col md={{ span: 10, offset: 1 }}>
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
              key={item.id}
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
    </Col>
  );
}

export default PaymentHeader;
