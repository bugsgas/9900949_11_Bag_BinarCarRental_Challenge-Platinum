import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

export default function AddCar() {
  const [showToast, setShowToast] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();

  const tokenAdmin = localStorage.getItem("tokenadmin");
  useEffect(() => {
    if (!tokenAdmin) {
      navigate("/admin-signin");
    }
  });

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangePhoto = (e) => {
    console.log(e.target.files[0]);
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", parseInt(price));
    formData.append("status", false);
    formData.append("image", photo);

    axios
      .post("https://api-car-rental.binaracademy.org/admin/car", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          access_token: localStorage.getItem("tokenadmin"),
        },
      })
      .then((res) => {
        console.log(res);
        setShowToast(true);
      })

      .catch((err) => console.log(err));
    setTimeout(() => {
      navigate("/listcar");
    }, 3000);
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center pt-3 pb-2">
        <h3 className="">Add Car</h3>
      </div>
      {showToast && (
        <div style={{ position: "relative" }}>
          <ToastContainer position="top-center">
            <Toast className="text-center">
              <Toast.Body className="bg-primary text-white">
                Data Berhasil Ditambahkan
              </Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
      )}
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="name"
              name="name"
              value={name}
              onChange={handleChangeName}
              placeholder="Nama Mobil"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Harga
          </Form.Label>
          <Col sm="10">
            <Form.Control
              name="price"
              value={price}
              onChange={handleChangePrice}
              type=""
              placeholder="Harga"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Gambar
          </Form.Label>
          <Col sm="10">
            <Form.Control
              onChange={handleChangePhoto}
              type="file"
              name="image"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Kategori
          </Form.Label>
          <Col sm="10">
            <Form.Control
              name="category"
              value={category}
              onChange={handleChangeCategory}
              type=""
              placeholder="Category"
            />
          </Col>
        </Form.Group>
      </Form>
      <Button variant="primary" disabled="" onClick={handleSubmit}>
        Click
      </Button>
    </Container>
  );
}
