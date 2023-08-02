import { Card, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function CarsDetail({ data }) {
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
    <>
      <Card.Img className="py-1" variant="top" src={data.image} />
      <Card.Title className="py-1 m-0 d-flex align-items-center justify-content-between">
        <div className="">{data.name}</div>
      </Card.Title>
      <Card.Text>
        <div
          className="py-1 m-0 d-flex align-items-center"
          style={{ fontSize: "14px", color: "#8A8A8A" }}
        >
          <FontAwesomeIcon className="pe-2" icon={faUser} size="sm" />
          <div>{getCategoryValue(data.category)}</div>
        </div>
      </Card.Text>
      {/* <Card.Text>Rp {data.price} / hari</Card.Text> */}
      <p className="m-0" style={{ fontSize: "12px" }}>
        Tentukan lama sewa mobil (max. 7 hari)
      </p>
    </>
  );
}

export default CarsDetail;
