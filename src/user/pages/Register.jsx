import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Row, Col, Button, Image, Alert } from "react-bootstrap";

export default function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");
  const [succ, setSucc] = useState("");
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    setLoad(true);
    const data = {
      email: form.email,
      password: form.password,
    };
    axios
      .post(
        `https://api-car-rental.binaracademy.org/customer/auth/register`,
        data
      )
      .then((res) => {
        if (res.status === 201) {
          navigate("/signin");
          setSucc("berhasil");
        }
        setLoad(false);
        setTimeout(() => {
          // navigate('/login');
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setErr("error");
        setLoad(false);

        if (err.response.status === 500) {
          setErr(err.response.data.errors[0].message);
        } else {
          setErr(err.response.data.message);
        }
      });
  };

  return (
    <div className="d-lg-flex">
      <Col lg={6} md style={{ padding: "10vw 10vw 10vw 10vw " }}>
        <div className="">
          <div style={{ paddingBottom: "36px" }}>
            <img src="./src/assets/Rectangle 62.png" alt="" />
          </div>

          <h1 style={{ margin: "0px" }}>Sign Up</h1>
          <div className="input" style={{ padding: "36px 0px" }}>
            <label>Name</label>
            <Row style={{ padding: "0px 10px" }}>
              <input type="text" name="name" placeholder="Name Lengkap" />
            </Row>

            <label style={{ paddingTop: "10px" }}>Email</label>
            <Row style={{ padding: "0px 10px" }}>
              <input
                type="email"
                name="email"
                placeholder="contoh: johndee@gmail.com"
                onChange={handleChange}
                value={form.email}
              />
            </Row>
            <label style={{ paddingTop: "10px" }}>Create Password</label>
            <Row style={{ padding: "0px 10px" }}>
              <input
                type="email"
                name="password"
                placeholder="6+ Karakter"
                onChange={handleChange}
                value={form.password}
              />
            </Row>
            <Row style={{ marginTop: "32px", padding: "0px 10px" }}>
              <Button
                disabled={load ? true : false}
                onClick={handleSubmit}
                variant="success"
              >
                {load ? "Loading..." : "Sign Up"}
              </Button>
            </Row>
            <div className="d-flex pt-3 justify-content-center">
              <p>Already have an account?</p>
              <Alert.Link
                style={{ color: "#0D28A6" }}
                className="ps-2"
                href="/signin"
              >
                Sign In Here
              </Alert.Link>
              {/* <p className="ps-2">Sign In here</p> */}
            </div>
            {err && (
              <h6 className="text-center pt-1" style={{ color: "red" }}>
                {err}
              </h6>
            )}
          </div>
        </div>
      </Col>
      <Col lg={6} style={{ backgroundColor: "#0D28A6" }}>
        <Image
          fluid
          className="d-none d-lg-block d-xl-block"
          src="./src/assets/pict.png"
          style={{ height: "100vh", width: "auto" }}
        ></Image>
      </Col>
    </div>
  );
}
