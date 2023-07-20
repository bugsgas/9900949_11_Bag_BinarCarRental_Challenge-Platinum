import React from "react";
import axios from "axios";
import { useEffect, useState, forwardRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Image, Nav, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import FindCar from "../component/FindCar";
import Hero from "../component/Hero";
import CalendarBox from "../component/CalendarBox";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { addDays, differenceInDays } from "date-fns";

export default function DetailMobil() {
  const [data, setData] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  });

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

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const calculateSum = () => {
    if (startDate && endDate) {
      const daysDifference = differenceInDays(endDate, startDate);
      return data.price * daysDifference;
    }
    return 0;
  };

  return (
    <div>
      <Hero showButton={false} showText={false} showImg={false} />
      <FindCar showCard={false} />
      <Col md={{ span: 10, offset: 1 }}>
        <Container className="">
          <Row className="justify-content-evenly">
            <Col lg={4} xs={12} className="order-lg-1 pb-5">
              <Card className="m-auto" style={{ width: "20rem" }}>
                <div className="p-2">
                  <Card.Img className="p-3" variant="top" src={data.image} />
                  <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>Rp {data.price} / hari</Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Card.Text>
                    <div className="">
                      <div className="d-flex justify-content-around">
                        <>
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            minDate={new Date()}
                            startDate={startDate}
                            endDate={endDate}
                            customInput={<ExampleCustomInput />}
                          />
                        </>
                        <>
                          <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            maxDate={addDays(startDate, 7)}
                            customInput={<ExampleCustomInput />}
                          />
                        </>
                      </div>
                      <p>Sum: {calculateSum()}</p>
                    </div>
                  </Card.Body>
                </div>
              </Card>
            </Col>
            <Col lg={8} xs={12} className="order-lg-0">
              <Card className="p-5">
                <div className="detail-div">
                  <h4 className="tentang">Tentang Paket</h4>
                  <div className="first">
                    <h6>Include</h6>
                    <ul>
                      <li>
                        "Apa saja yang termasuk dalam paket misal durasi max 12
                        jam"
                      </li>
                      <li>"Sudah termasuk bensin selama 12 jam"</li>
                      <li>"Sudah termasuk Tiket Wisata"</li>
                      <li>"Sudah termasuk pajak"</li>
                    </ul>
                  </div>

                  <div className="second">
                    <h6>Exclude</h6>
                    <ul>
                      <li>"Tidak termasuk biaya makan sopir Rp 75.000/hari"</li>
                      <li>
                        "Jika overtime lebih dari 12 jam akan ada tambahan biaya
                        Rp 20.000/jam"
                      </li>
                      <li>"Tidak termasuk akomodasi penginapan"</li>
                    </ul>
                  </div>

                  <div className="third">
                    <h6>Refund, Reschedule, Overtime</h6>
                    <ul>
                      <li>"Tidak termasuk biaya makan sopir Rp 75.000/hari"</li>
                      <li>
                        "Jika overtime lebih dari 12 jam akan ada tambahan biaya
                        Rp 20.000/jam"
                      </li>
                      <li>"Tidak termasuk akomodasi penginapan"</li>
                      <li>"Tidak termasuk biaya makan sopir Rp 75.000/hari"</li>
                      <li>
                        "Jika overtime lebih dari 12 jam akan ada tambahan biaya
                        Rp 20.000/jam"
                      </li>
                      <li>"Tidak termasuk akomodasi penginapan"</li>
                      <li>"Tidak termasuk biaya makan sopir Rp 75.000/hari"</li>
                      <li>
                        "Jika overtime lebih dari 12 jam akan ada tambahan biaya
                        Rp 20.000/jam"
                      </li>
                      <li>"Tidak termasuk akomodasi penginapan"</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </Col>
    </div>
  );
}
