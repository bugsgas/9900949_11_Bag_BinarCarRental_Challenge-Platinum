import React, { useState, useEffect } from "react";
import { Container, Col, Card, Row } from "react-bootstrap";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import CountdownComponent from "../component/CountdownComponent";
import PaymentConfirm from "../component/Payment2/PaymentConfirm";
import BankBCA from "../component/Payment2/BankBCA";
import BankBNI from "../component/Payment2/BankBNI";
import BankMandiri from "../component/Payment2/BankMandiri";
import PaymentHeader from "../component/PaymentHeader";

const PaymentSteps2 = () => {
  const [isCountdownVisible, setIsCountdownVisible] = useState(true);
  const toggleCountdownVisibility = () => {
    setIsCountdownVisible((prevIsVisible) => !prevIsVisible);
  };
  const currentDate = new Date();
  const nextDate = new Date(currentDate);
  nextDate.setDate(currentDate.getDate() + 1);
  const formattedDate = nextDate.toLocaleString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  const location = useLocation();
  const { state } = location;
  const { selectedButtonId } = state || {};

  const breadcrumbItems = [
    { id: 1, title: "Pilih Metode", active: true },
    { id: 2, title: "Bayar", active: true },
    { id: 3, title: "Tiket", active: false },
  ];

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

  const renderComponentById = (id) => {
    switch (id) {
      case 1:
        return <BankBCA data={data} />;
      case 2:
        return <BankBNI data={data} />;
      case 3:
        return <BankMandiri data={data} />;
      default:
        return null;
    }
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  const confirmButton = (e) => {
    const formData = new FormData();
    formData.append("slip", selectedFile);

    axios
      .put(
        `https://api-car-rental.binaracademy.org/customer/order/${id}/slip`,
        formData,
        {
          headers: {
            access_token: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        const orderId = data.id;
        navigate(`/payment-complete/${orderId}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="py-5" style={{ backgroundColor: "#F1F3FF" }}>
        <PaymentHeader
          showText={true}
          data={data}
          breadcrumbItems={breadcrumbItems}
        />
      </div>
      <Col md={{ span: 10, offset: 1 }}>
        <Container>
          <Row className="">
            <Col lg={8} xs={12} className="">
              <Card className="mt-5 p-4">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h5 className="m-0 py-1">Selesaikan Pembayaran Sebelum</h5>
                    <p className="m-0 py-1">{formattedDate} WIB</p>
                  </div>
                  <div>
                    {isCountdownVisible && <CountdownComponent data={data} />}
                  </div>{" "}
                  {/* Pass data prop to CountdownComponent */}
                </div>
              </Card>

              <div>{renderComponentById(selectedButtonId)}</div>
            </Col>

            <Col lg={4} xs={12} className="">
              <PaymentConfirm
                confirmbutton={confirmButton}
                toggleCountdownVisibility={toggleCountdownVisibility}
                onPreview={previewUrl}
                onChange={handleFileChange}
                onDisable={!selectedFile}
              />
            </Col>
          </Row>
        </Container>
      </Col>
    </div>
  );
};

export default PaymentSteps2;
