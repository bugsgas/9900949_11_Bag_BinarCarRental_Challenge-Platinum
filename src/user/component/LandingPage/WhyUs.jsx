import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const helper = [
  {
    icon: "src/assets/icon_professional.png",
    title: "Mobil Lengkap",
    desc: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
  },
  {
    icon: "src/assets/icon_price.png",
    title: "Harga Murah",
    desc: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
  },
  {
    icon: "src/assets/icon_24hrs.png",
    title: "Layanan 24 Jam",
    desc: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
  },
  {
    icon: "src/assets/icon_complete.png",
    title: "Sopir Profesional",
    desc: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
  },
];

const WhyUs = () => {
  return (
    <div
      className="py-5"
      style={{ backgroundColor: "#FFFFFF", padding: "0px 0px" }}
    >
      <Container>
        <Row className="text-lg-start text-center">
          <h1>Why Us?</h1>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </Row>
        <Row className="justify-content-center">
          {helper.map((item, index) => (
            <Col key={index} md={6} lg={3} className="justify-content-center">
              <Card className="m-auto my-sm-2" style={{ width: "270px" }}>
                <Card.Body>
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="img-fluid icon-pad"
                  />
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WhyUs;
