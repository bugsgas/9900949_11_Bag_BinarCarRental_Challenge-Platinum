import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Image, Nav, Card } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

export default function Login() {
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
      .post(`https://api-car-rental.binaracademy.org/customer/auth/login`, data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.access_token);
        localStorage.setItem("role", res.data.role);
        setLoad(false);
        navigate("/");
      })
      .catch((err) => {
        setErr("error");
        setLoad(false);
        setErr(err.response.data.message);
      });

    setTimeout(() => {
      setErr("");
      setSucc("");
    }, 3000);
  };

  return (
    <div className="d-lg-flex">
      <Col lg={6} style={{ backgroundColor: "#0D28A6" }}>
        <Image
          fluid
          className="d-none d-lg-block d-xl-block"
          src="./src/assets/pict.png"
          style={{ height: "100vh", width: "auto" }}
        ></Image>
      </Col>

      <Col lg={6}>
        <div className="" style={{ padding: "10vw 10vw 10vw 10vw " }}>
          <div style={{ paddingBottom: "36px" }}>
            <img src="./src/assets/Rectangle 62.png" alt="" />
          </div>

          <h1 style={{ margin: "0px" }}>Welcome Back!</h1>
          <div className="input" style={{ padding: "36px 0px" }}>
            <label>Email</label>
            <Row style={{ padding: "0px 10px" }}>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                onChange={handleChange}
                value={form.email}
              />
            </Row>

            <label style={{ paddingTop: "16px" }}>Password</label>
            <Row style={{ padding: "0px 10px" }}>
              <input
                type="email"
                name="password"
                placeholder="your password"
                onChange={handleChange}
                value={form.password}
              />
            </Row>

            <Row style={{ marginTop: "32px", padding: "0px 10px" }}>
              <Button
                variant="primary"
                disabled={load ? true : false}
                onClick={handleSubmit}
              >
                {load ? "Loading..." : "Sign In"}
              </Button>
            </Row>
            <div className="d-flex pt-3 justify-content-center">
              <p>Don't have an account?</p>
              <Alert.Link
                style={{ color: "#0D28A6" }}
                className="ps-2"
                href="/signup"
              >
                Sign Up for free
              </Alert.Link>
              {/* <p className="ps-2">Sign Up for free</p> */}
            </div>
            {err && (
              <h6 className="text-center pt-1" style={{ color: "red" }}>
                {err}
              </h6>
            )}
          </div>
        </div>
      </Col>
    </div>
  );
}
