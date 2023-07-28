import React from "react";
import axios from "axios";
import { useEffect, useState, forwardRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Image, Nav, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import FindCar from "../component/FindCar";
import Hero from "../component/Hero";
import DateRange from "../component/DetailMobil/DateRange";
import TentangPaket from "../component/DetailMobil/TentangPaket";

export default function DetailMobil() {
  const [data, setData] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // useEffect(() => {
  //   if (!token) {
  //     navigate("/");
  //   }
  // });

  const getDetailedData = () => {
    const api = `https://api-car-rental.binaracademy.org/customer/car/${id}`;
    axios
      .get(api)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDetailedData();
  }, []);

  return (
    <div>
      <Hero showButton={false} showText={false} showImg={false} />
      <FindCar showCard={false} />
      <Col md={{ span: 10, offset: 1 }}>
        <Container className="">
          <Row className="justify-content-evenly">
            {/* 1 */}
            <Col lg={4} xs={12} className="order-lg-1 pb-5">
              <DateRange data={data} />
            </Col>
            {/* 2 */}
            <Col lg={8} xs={12} className="order-lg-0">
              <TentangPaket />
            </Col>
          </Row>
        </Container>
      </Col>
    </div>
  );
}
