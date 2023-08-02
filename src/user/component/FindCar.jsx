import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Card from "react-bootstrap/Card";
import CarCard from "./CarCard";
import { useNavigate } from "react-router-dom";

export default function FindCar({ showCard }) {
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");
  const [form, setForm] = useState({
    name: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    isRented: "",
  });

  useEffect(() => {
    getDetailedData();
  }, [form]);

  const getDetailedData = () => {
    const api = `https://api-car-rental.binaracademy.org/customer/v2/car?name=${form.name}&category=${form.category}&minPrice=${form.minPrice}&maxPrice=${form.maxPrice}&isRented=${form.isRented}&pageSize=4`;
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const navigate = useNavigate();
  const goToSearch = (id) => navigate(`/car/${id}`);

  return (
    <div>
      {err && <h1 style={{ color: "red" }}>{err}</h1>}
      <Col md={{ span: 10, offset: 1 }}>
        <Container>
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
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Innova"
                  />
                </Col>
                <Col md={2} xs={12} className="pt-2">
                  <label>Kapasitas</label>
                  <Form.Select
                    name="category"
                    id="inputState"
                    className="form-select"
                    value={form.category}
                    onChange={handleChange}
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
                    value={form.minPrice}
                    onChange={handleChange}
                    placeholder="Harga Terendah"
                  />
                </Col>
                <Col md={2} xs={12} className="pt-2">
                  <label>Harga</label>
                  <Form.Control
                    name="maxPrice"
                    type="string"
                    value={form.maxPrice}
                    onChange={handleChange}
                    placeholder="Harga Tertinggi"
                  />
                </Col>
                <Col md={2} xs={12} className="pt-2">
                  <label>Status</label>
                  <Form.Select
                    name="isRented"
                    className="form-select"
                    onChange={handleChange}
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
                    <Button
                      className="rounded-1 btn btn-success"
                      onClick={getDetailedData}
                    >
                      Cari Mobil
                    </Button>
                  </Form>
                </Col>
              </Row>
            </div>
          </Row>
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
