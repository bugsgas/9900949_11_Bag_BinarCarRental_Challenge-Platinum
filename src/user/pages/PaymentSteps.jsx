import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Hero from "../component/Hero";
import DetailsBar from "../component/Payment1/DetailsBar";
import BankSelectionCard from "../component/Payment1/BankSelectionCard";
import PaymentDetailsCard from "../component/Payment1/PaymentDetailsCard";
import PaymentHeader from "../component/PaymentHeader";

const PaymentSteps = () => {
  const [isBankSelected, setIsBankSelected] = useState(false);

  const breadcrumbItems = [
    { id: 1, title: "Pilih Metode", active: true },
    { id: 2, title: "Bayar", active: false },
    { id: 3, title: "Tiket", active: false },
  ];

  const [selectedButtonId, setSelectedButtonId] = useState(null);
  const handleButtonClick = (itemId) => {
    setSelectedButtonId(itemId);
    setIsBankSelected(true);
  };

  const data = [
    { title: "BCA", name: "BCA Transfer", id: 1 },
    { title: "BNI", name: "BNI Transfer", id: 2 },
    { title: "Mandiri", name: "Mandiri Transfer", id: 3 },
  ];

  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const toggleDetailsVisibility = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  const navigate = useNavigate();
  const confirmButton = () => {
    navigate("/upload-payment", { state: { selectedButtonId } });
  };

  return (
    <div>
      <div className="pt-5" style={{ backgroundColor: "#F1F3FF" }}>
        <PaymentHeader breadcrumbItems={breadcrumbItems} />
      </div>

      <Hero showButton={false} showText={false} showImg={false} />
      <Col md={{ span: 10, offset: 1 }}>
        <Container>
          <DetailsBar />
          <Row className="">
            <Col lg={8} xs={12} className="">
              <BankSelectionCard
                data={data}
                handleButtonClick={handleButtonClick}
                selectedButtonId={selectedButtonId}
              />
            </Col>
            <Col lg={4} xs={12} className="">
              <PaymentDetailsCard
                isDetailsVisible={isDetailsVisible}
                toggleDetailsVisibility={toggleDetailsVisibility}
                confirmButton={confirmButton}
                isBankSelected={isBankSelected}
              />
            </Col>
          </Row>
        </Container>
      </Col>
    </div>
  );
};

export default PaymentSteps;
