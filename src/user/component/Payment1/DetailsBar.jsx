import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function DetailsBar({ data }) {
  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    return date.toLocaleDateString();
  };

  const formattedCreatedAt = formatDate(data.start_rent_at);
  const formattedFinishedAt = formatDate(data.finish_rent_at);

  const getCategoryValue = (category) => {
    if (!category) {
      return "Unknown Category";
    }
    switch (category.toLowerCase()) {
      case "small":
        return "2-4 Orang";
      case "medium":
        return "6-8 Orang";
      case "large":
        return "8+ Orang";
      default:
        return "Unknown Category";
    }
  };

  return (
    <Row className="container-form">
      <div className="px-5 me-10px">
        <Row className="pt-2">
          <h4>Detail Pesananmu</h4>
        </Row>
        <Row className="pb-2">
          <Col md={3} xs={12} className="pt-2">
            <h5>Nama Mobil</h5>
            <h6 style={{ color: "gray" }}>{data?.Car?.name}</h6>
          </Col>
          <Col md={3} xs={12} className="pt-2">
            <h5>Kapasitas</h5>
            <h6 style={{ color: "gray" }}>
              {" "}
              {getCategoryValue(data?.Car?.category)}
            </h6>
          </Col>
          <Col md={3} xs={12} className="pt-2">
            <h5>Tanggal Mulai</h5>
            <h6 style={{ color: "gray" }}>
              {data?.start_rent_at ? formatDate(data.start_rent_at) : null}
            </h6>
          </Col>
          <Col md={3} xs={12} className="pt-2">
            <h5>Tanggal Selesai</h5>
            <h6 style={{ color: "gray" }}>
              {data?.finish_rent_at ? formatDate(data.finish_rent_at) : null}
            </h6>
          </Col>
        </Row>
      </div>
    </Row>
  );
}

export default DetailsBar;
