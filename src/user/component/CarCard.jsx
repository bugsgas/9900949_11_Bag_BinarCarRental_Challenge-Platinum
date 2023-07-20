import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Image, Nav, Card } from "react-bootstrap";

export default function CarCard({
  carname,
  carsize,
  carimage,
  carprice,
  cardetail,
}) {
  return (
    <>
      <Col md={3} xs={6} className="mt-lg-0 mt-4">
        {" "}
        <Card className="m-auto" style={{ width: "14.5rem" }}>
          <div className="p-2">
            <Card.Img
              className="p-3"
              variant="top"
              style={{ height: "10rem" }}
              src={carimage}
            />
            <Card.Body>
              <div className="d-flex">
                <Card.Title>{carname}</Card.Title>
                {/* <Card.Text>{carsize}</Card.Text> */}
              </div>
              <Card.Text>Rp. {carprice}/hari</Card.Text>
              <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </Card.Text>
              <Row>
                {" "}
                <Button onClick={cardetail} variant="primary">
                  Pilih Mobil
                </Button>
              </Row>
            </Card.Body>
          </div>
        </Card>
      </Col>
    </>
  );
}
