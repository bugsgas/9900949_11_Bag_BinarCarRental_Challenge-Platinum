import { useState } from "react";
import { RiCheckLine } from "react-icons/ri";

import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BankButton = () => {
  const [selectedButtonId, setSelectedButtonId] = useState(null);

  const handleButtonClick = (itemId) => {
    setSelectedButtonId(itemId === selectedButtonId ? null : itemId);
  };

  // Array of data with different names
  const data = [
    { name: "BCA Transfer", id: 1 },
    { name: "Another Payment", id: 2 },
    { name: "Online Payment", id: 3 },
  ];

  return (
    <div>
      <Card className="m-auto">
        <div className="p-2">
          <Card.Body>
            <h5>Pilih Bank Transfer</h5>
            <p>
              Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
              atau Mobile Banking
            </p>
            <Row>
              {data.map((item) => (
                <div key={item.id}>
                  <Row>
                    <button
                      className="btn btn-link"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "flex",
                        alignItems: "center",
                      }}
                      onClick={() => handleButtonClick(item.id)}
                    >
                      <Button
                        variant="outline-light text-dark"
                        style={{ padding: "0.3rem 1.5rem" }}
                      >
                        BCA
                      </Button>
                      <p className="m-0 ps-3">{item.name}</p>
                      <div style={{ marginLeft: "auto" }}>
                        {selectedButtonId === item.id && (
                          <RiCheckLine color="green" size={30} />
                        )}
                      </div>
                    </button>
                  </Row>
                  <hr />
                </div>
              ))}
            </Row>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default BankButton;
