// component/Payment1/BankSelectionCard.js
import React from "react";
import { Card, Row, Button } from "react-bootstrap";
import { RiCheckLine } from "react-icons/ri";

const BankSelectionCard = ({ data, handleButtonClick, selectedButtonId }) => {
  return (
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
                      id="BankButtonOption"
                      className="py-2"
                      variant="text-dark"
                      style={{ border: "1px solid #D0D0D0", width: "6.5rem" }}
                    >
                      {item.title}
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
  );
};

export default BankSelectionCard;
