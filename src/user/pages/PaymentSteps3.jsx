import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Card, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import PaymentHeader from "../component/PaymentHeader";

function PaymentSteps3() {
  const [previewImage, setPreviewImage] = useState(null);
  const [loaded, setLoaded] = useState(false);
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

  const breadcrumbItems = [
    { id: 1, title: "Pilih Metode", active: true },
    { id: 2, title: "Bayar", active: true },
    { id: 3, title: "Tiket", active: true },
  ];
  const handleImageClick = (src) => {
    setPreviewImage(src);
  };

  const handleDownloadClick = () => {
    if (data && data.slip) {
      const link = document.createElement("a");
      link.href = data.slip;
      link.download = data.slip;
      link.target = "_blank";
      link.click();
    }
  };

  return (
    <>
      <div className="py-5" style={{ backgroundColor: "#F1F3FF" }}>
        <PaymentHeader
          showText={true}
          data={data}
          breadcrumbItems={breadcrumbItems}
        />
      </div>
      <Col className="py-5" md={{ span: 10, offset: 1 }}>
        <Container className="d-flex align-items-center flex-column">
          <Image
            className="py-3"
            src="../src/assets/success.png"
            alt="Success"
            fluid
          />
          <div className="text-center py-3">
            <h6>Pembayaran Berhasil!</h6>
            <p style={{ color: "#8A8A8A" }}>
              Tunjukkan invoice ini ke petugas BCR di titik temu.
            </p>
          </div>

          <Card className=" shadow-sm p-3" style={{ width: 605 }}>
            <div className="d-flex align-items-center justify-content-between">
              <h6 className="m-0">Invoice</h6>
              <Button
                variant="outline-primary"
                className="rounded-1"
                onClick={handleDownloadClick}
              >
                Unduh
              </Button>
            </div>
            <p className="m-0">*no invoice</p>
            <hr />
            <div className="mt-4 text-center">
              <Image
                style={{ width: "15rem", height: "100%" }}
                src={data.slip}
                alt="Success"
                onClick={() => handleImageClick(data.slip)}
                fluid
              />
            </div>
          </Card>
        </Container>
        {previewImage && (
          <div
            className="preview-modal"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setPreviewImage(null)}
          >
            <img
              src={previewImage}
              alt="Preview"
              style={{ maxWidth: "90%", maxHeight: "90%", cursor: "pointer" }}
            />
          </div>
        )}
      </Col>
    </>
  );
}

export default PaymentSteps3;
