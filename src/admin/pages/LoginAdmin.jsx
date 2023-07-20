import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Image, Nav, Card } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

export default function LoginAdmin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");
  const [succ, setSucc] = useState("");
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const tokenAdmin = localStorage.getItem("tokenadmin");
  useEffect(() => {
    if (tokenAdmin) {
      navigate("/dashboard");
    }
  });

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
      .post(`https://api-car-rental.binaracademy.org/admin/auth/login`, data)
      .then((res) => {
        console.log(res);
        console.log(res);
        localStorage.setItem("tokenadmin", res.data.access_token);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("roleadmin", res.data.role);
        setLoad(false);
        navigate("/dashboard");
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
    <>
      <Row>
        {" "}
        <div className="d-lg-flex">
          <Col lg={8}>
            <Image
              fluid
              className="d-none d-lg-block d-xl-block"
              src="./src/assets/img1.png"
              style={{ height: "", width: "auto" }}
            ></Image>
          </Col>
          <Col lg={4}>
            <div className="" style={{ padding: "5vw 5vw 5vw 5vw " }}>
              <div style={{ paddingBottom: "36px" }}>
                <img src="./src/assets/Rectangle 62.png" alt="" />
              </div>

              <h3 style={{ margin: "0px" }}>Welcome, Admin BCR</h3>
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
                    type="password"
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
                <Row className="pt-3" style={{ padding: "0px 10px" }}>
                  <div
                    className="rounded-1"
                    style={{ backgroundColor: "#fbe7e9" }}
                  >
                    {" "}
                    {err && (
                      <p
                        className="m-0 py-2 text-center"
                        style={{ color: "#D00C1A", fontSize: "14px" }}
                      >
                        Masukkan username dan password yang benar. Perhatikan
                        penggunaan huruf kapital.
                      </p>
                    )}
                  </div>
                </Row>
              </div>
            </div>
          </Col>
        </div>
      </Row>
    </>
  );
}
