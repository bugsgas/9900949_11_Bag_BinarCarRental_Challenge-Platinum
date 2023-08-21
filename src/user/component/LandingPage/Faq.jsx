import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Accordion } from "react-bootstrap";

export default function Faq() {
  const faqlist = [
    {
      question: "Apa saja syarat yang dibutuhkan?",
      answer: "Lorem",
    },
    {
      question: "Berapa hari minimal sewa mobil lepas kunci?",
      answer: "Lorem",
    },
    {
      question: "Berapa hari sebelumnya sebaiknya booking sewa mobil?",
      answer: "Lorem",
    },
    {
      question: "Apakah Ada biaya antar-jemput?",
      answer: "Lorem",
    },
    {
      question: "Bagaimana jika terjadi kecelakaan",
      answer: "Lorem",
    },
  ];

  return (
    <div
      className="py-5"
      style={{ backgroundColor: "#FFFFFF", padding: "0px 0px" }}
    >
      <Container>
        <Row>
          <Col sm={5}>
            <h3>Frequently Asked Questions</h3>
            <p>Lorem Ipsum Dolor</p>
          </Col>
          <Col sm={7}>
            <Accordion defaultActiveKey="0">
              {faqlist.map((item, key) => (
                <Accordion.Item eventKey={key} key={key} className="my-3">
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
