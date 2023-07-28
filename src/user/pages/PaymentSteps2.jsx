import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import CountdownComponent from "../component/CountdownComponent";
import PaymentConfirm from "../component/Payment2/PaymentConfirm";
import BankBCA from "../component/Payment2/BankBCA";
import BankBNI from "../component/Payment2/BankBNI";
import BankMandiri from "../component/Payment2/BankMandiri";
import PaymentHeader from "../component/PaymentHeader";

const PaymentSteps2 = () => {
  // const [isDetailVisible, setIsDetailVisible] = useState(true);
  // const [isShowUploadVisible, setIsShowUploadVisible] = useState(false);
  // const [isSubmitVisible, setIsSubmitVisible] = useState(false);
  // Step 1: Create a state variable to control the visibility of the countdown component
  const [isCountdownVisible, setIsCountdownVisible] = useState(true);

  // Step 2: Add a function to toggle the visibility of the countdown component
  const toggleCountdownVisibility = () => {
    setIsCountdownVisible((prevIsVisible) => !prevIsVisible);
  };

  const location = useLocation();
  const { state } = location;
  const { selectedButtonId } = state || {};
  // const showComponent = () => {
  //   setIsDetailVisible(false);
  //   setIsShowUploadVisible(true);
  //   setIsSubmitVisible(true);
  //   setIsCountdownVisible(false); // Hide the countdown when Payment Confirm is clicked
  // };

  const breadcrumbItems = [
    { id: 1, title: "Pilih Metode", active: true },
    { id: 2, title: "Bayar", active: true },
    { id: 3, title: "Tiket", active: false },
  ];

  const renderComponentById = (id) => {
    switch (id) {
      case 1:
        return <BankBCA />;
      case 2:
        return <BankBNI />;
      case 3:
        return <BankMandiri />;
    }
  };
  const navigate = useNavigate();
  const confirmButton = () => {
    navigate("/payment-complete");
  };

  return (
    <div>
      {/* Header */}
      <div className="py-5" style={{ backgroundColor: "#F1F3FF" }}>
        <PaymentHeader breadcrumbItems={breadcrumbItems} />
      </div>
      <Col md={{ span: 10, offset: 1 }}>
        <Container>
          <Row className="">
            <Col lg={8} xs={12} className="">
              {/* component show */}
              <Card className="mt-5 p-4">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h5 className="m-0">Selesaikan Pembayaran Sebelum</h5>
                    <p className="m-0">Rabu, 19 Mei 2022 jam 13.00 WIB</p>
                  </div>
                  <div>{isCountdownVisible && <CountdownComponent />}</div>
                </div>
              </Card>

              <div>
                {/* Render the component based on dataId */}
                {renderComponentById(selectedButtonId)}
              </div>
            </Col>

            <Col lg={4} xs={12} className="">
              <PaymentConfirm
                confirmbutton={confirmButton}
                toggleCountdownVisibility={toggleCountdownVisibility}
              />
            </Col>
          </Row>
        </Container>
      </Col>
    </div>
  );
};

export default PaymentSteps2;
