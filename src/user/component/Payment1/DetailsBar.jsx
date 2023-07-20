import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function DetailsBar() {
  return (
    <Row className="container-form">
      <div className="px-4">
        <Row className="pt-2">
          <h5>Detail Pesananmu</h5>
        </Row>
        <Row className="pb-2">
          <Col md={3} xs={12} className="pt-2">
            <label>Nama Mobil</label>
            <p>Innova</p>
          </Col>
          <Col md={3} xs={12} className="pt-2">
            <label>Kapasitas</label>
            <p>Innova</p>
          </Col>
          <Col md={3} xs={12} className="pt-2">
            <label>Harga</label>
            <p>Innova</p>
          </Col>
          <Col md={3} xs={12} className="pt-2">
            <label>Harga</label>
            <p>Innova</p>
          </Col>
        </Row>
      </div>
    </Row>
  );
}

export default DetailsBar;
