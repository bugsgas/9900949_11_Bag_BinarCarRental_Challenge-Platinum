import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Image, Nav, Card } from "react-bootstrap";

export default function CarCardAdmin({
  carname,
  carsize,
  carimage,
  carprice,
  cardetail,
  carupdate,
  caredit,
  cardelete,
}) {
  return (
    <>
      <Card className="m-auto" style={{ width: "15rem" }}>
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
            </div>
            <Card.Text>Rp {carprice} /hari</Card.Text>
            <Card.Text>{carsize}</Card.Text>
            <Card.Text>{carupdate}</Card.Text>
            <Row>
              <div className="d-flex justify-content-between">
                <Button
                  style={{ width: "6vw" }}
                  variant="outline-danger"
                  onClick={cardelete}
                >
                  Delete
                </Button>

                <Button
                  style={{ width: "6vw" }}
                  onClick={caredit}
                  variant="success"
                >
                  Edit
                </Button>
              </div>
            </Row>
          </Card.Body>
        </div>
      </Card>
    </>
  );
}
