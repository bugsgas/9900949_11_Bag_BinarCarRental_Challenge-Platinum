import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Card from "react-bootstrap/Card";
import CarCard from "./CarCard";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function FindCar({ showCard }) {
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");
  const [name, setName] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [size, setSize] = useState("");
  const [isRented, setIsRented] = useState("");
  const [overlayActive, setOverlayActive] = useState(false);

  // const [form, setForm] = useState({
  //   name: "",
  //   category: "",
  //   minPrice: "",
  //   maxPrice: "",
  //   isRented: "",
  // });

  useEffect(() => {
    getDetailedData();
  }, []);

  const getDetailedData = () => {
    const api = `https://api-car-rental.binaracademy.org/customer/v2/car?name=${name}&category=${size}&minPrice=${minPrice}&maxPrice=${maxPrice}&isRented=${isRented}&pageSize=4`;
    axios
      .get(api)
      .then((res) => {
        setData(res.data.cars);
      })
      .catch((err) => {
        setErr(err.message);
        errorState();
      });
  };

  const errorState = () => {
    setTimeout(() => {
      setErr("");
    }, 4000);
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm({ ...form, [name]: value });
  // };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayActive) {
        if (!event.target.closest(".container-form")) {
          setOverlayActive(false);
        }
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [overlayActive]);

  const navigate = useNavigate();
  const goToSearch = (id) => navigate(`/car/${id}`);

  return (
    <div>
      {err && <h1 style={{ color: "red" }}>{err}</h1>}
      <Col md={{ span: 10, offset: 1 }}>
        <Container>
          <div className={` ${overlayActive ? "overlay-active" : ""}`}>
            <Row className="container-form">
              <div className="px-4">
                <Row className="pt-2">
                  <h5>Pencarianmu</h5>
                </Row>
                <Row className="pb-2">
                  <Col md={2} xs={12} className="pt-2">
                    <label>Nama Mobil</label>
                    <Form.Control
                      type="string"
                      name="name"
                      value={name}
                      onClick={() => setOverlayActive(true)}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Innova"
                    />
                  </Col>
                  <Col md={2} xs={12} className="pt-2">
                    <label>Kapasitas</label>
                    <Form.Select
                      name="category"
                      id="inputState"
                      className="form-select"
                      value={size}
                      onClick={() => setOverlayActive(true)}
                      onChange={(e) => setSize(e.target.value)}
                    >
                      <option value="">Kapasitas Mobil</option>
                      <option value="small">2 - 4 Orang</option>
                      <option value="medium">4 - 6 Orang</option>
                      <option value="large">6 - 8 Orang</option>
                    </Form.Select>
                  </Col>
                  <Col md={2} xs={12} className="pt-2">
                    <label>Harga</label>
                    <Form.Control
                      name="minPrice"
                      type="string"
                      value={minPrice}
                      onClick={() => setOverlayActive(true)}
                      onChange={(e) => setMinPrice(e.target.value)}
                      placeholder="Harga Terendah"
                    />
                  </Col>
                  <Col md={2} xs={12} className="pt-2">
                    <label>Harga</label>
                    <Form.Control
                      name="maxPrice"
                      type="string"
                      value={maxPrice}
                      onClick={() => setOverlayActive(true)}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      placeholder="Harga Tertinggi"
                    />
                  </Col>
                  <Col md={2} xs={12} className="pt-2">
                    <label>Status</label>
                    <Form.Select
                      name="isRented"
                      className="form-select"
                      onClick={() => setOverlayActive(true)}
                      onChange={(e) => setIsRented(e.target.value)}
                    >
                      <option value="" selected disabled hidden>
                        Pilih Status
                      </option>
                      <option value="true">Disewakan</option>
                      <option value="false">Tidak Disewa</option>
                    </Form.Select>
                  </Col>
                  <Col md={2} xs={12} className="pt-2">
                    <label></label>
                    <Form>
                      <div className="d-flex">
                        <Button
                          className="rounded-1 btn btn-success"
                          onClick={() => {
                            getDetailedData();
                            setOverlayActive(false); // Deactivate the overlay
                          }}
                        >
                          Cari Mobil
                        </Button>
                        <Button
                          className="rounded-1 btn btn-danger"
                          onClick={() => {
                            setName("");
                            setSize("");
                            setMinPrice("");
                            setMaxPrice("");
                            setIsRented("");
                            getDetailedData();
                            setOverlayActive(false); // Deactivate the overlay
                          }}
                        >
                          <FontAwesomeIcon icon={faTimes} />{" "}
                          {/* FontAwesome icon */}
                        </Button>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </div>
            </Row>
          </div>
          {showCard && (
            <Col className="">
              <Row className="d-flex">
                {data.map((item) => (
                  <Col md={3} xs={6} className="mt-lg-0 mt-4">
                    <CarCard
                      carname={item.name}
                      carsize={item.category}
                      carprice={item.price}
                      carimage={item.image}
                      cardetail={() => goToSearch(item.id)}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          )}
        </Container>
      </Col>
    </div>
  );
}
