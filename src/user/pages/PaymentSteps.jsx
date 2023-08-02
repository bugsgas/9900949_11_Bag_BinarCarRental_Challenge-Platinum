import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

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
  const dataBank = [
    { title: "BCA", name: "BCA Transfer", id: 1 },
    { title: "BNI", name: "BNI Transfer", id: 2 },
    { title: "Mandiri", name: "Mandiri Transfer", id: 3 },
  ];
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const toggleDetailsVisibility = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };
  const navigate = useNavigate();

  const [data, setData] = useState({});
  let { id } = useParams();
  const getDetailedData = () => {
    const api = `https://api-car-rental.binaracademy.org/customer/order/${id}`;
    axios
      .get(api, {
        headers: {
          access_token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDetailedData();
  }, []);

  const confirmButton = () => {
    const orderId = data.id;
    navigate(`/upload-payment/${orderId}`, { state: { selectedButtonId } });
  };

  return (
    <div className="pb-5">
      <div className="pt-5" style={{ backgroundColor: "#F1F3FF" }}>
        <PaymentHeader
          showText={false}
          data={data}
          breadcrumbItems={breadcrumbItems}
        />
      </div>

      <Hero showButton={false} showText={false} showImg={false} />
      <Col md={{ span: 10, offset: 1 }}>
        <Container>
          <DetailsBar data={data} />
          <Row className="">
            <Col lg={8} xs={12} className="">
              <BankSelectionCard
                data={dataBank}
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
                data={data}
              />
            </Col>
          </Row>
        </Container>
      </Col>
    </div>
  );
};

export default PaymentSteps;
