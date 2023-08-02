import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Col, Button, Card, Row, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import FindCar from "../component/FindCar";
import Hero from "../component/Hero";
import DateRange from "../component/DetailMobil/DateRange";
import TentangPaket from "../component/DetailMobil/TentangPaket";
import CarsDetail from "../component/DetailMobil/CarsDetail";

export default function DetailMobil() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [form, setForm] = useState({
    start_rent_at: "",
    finish_rent_at: "",
    car_id: parseInt(id),
  });

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isButtonEnable, setIsButtonEnable] = useState(true);

  useEffect(() => {
    getDetailedData();
  }, []);

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
    if (totalPrice > 0) {
      setIsButtonEnable(false);
    }
  }, [totalPrice]);

  const handlePayment = () => {
    if (!token) {
      navigate("/signin");
    }
    const postData = {
      start_rent_at: startDate,
      finish_rent_at: endDate,
      car_id: form.car_id,
    };
    axios
      .post(
        "https://api-car-rental.binaracademy.org/customer/order",
        postData,
        {
          headers: {
            access_token: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        const orderId = res.data.id;
        navigate(`/confirm-payment/${orderId}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Hero showButton={false} showText={false} showImg={false} />
      <FindCar showCard={false} />
      <Col md={{ span: 10, offset: 1 }}>
        <Container className="d-flex justify-content-evenly">
          <Col lg={4} xs={12} className="order-lg-1 pb-5">
            <Card className="m-auto" style={{ width: "20rem" }}>
              <div className="p-3">
                <CarsDetail data={data} />
                <DateRange
                  data={data}
                  onDateChange={(start, end, price) => {
                    setStartDate(start);
                    setEndDate(end);
                    setTotalPrice(price);
                  }}
                />
                <div className="d-flex pt-3 m-0 align-items-center justify-content-between">
                  <p>Total</p>
                  <p>
                    {startDate && endDate ? (
                      <div>
                        <p>Rp. {totalPrice}</p>
                      </div>
                    ) : (
                      <p>Rp. {data.price}</p>
                    )}
                  </p>
                </div>
                <Row className="px-2">
                  <Button onClick={handlePayment} disabled={isButtonEnable}>
                    Lanjutkan Pembayaran
                  </Button>
                </Row>
              </div>
            </Card>
          </Col>
          <Col lg={8} xs={12} className="order-lg-0">
            <TentangPaket />
          </Col>
        </Container>
      </Col>
    </div>
  );
}
