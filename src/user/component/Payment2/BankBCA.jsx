import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { bankBca } from "./BanksInfo";

function BankBCA() {
  const [selectedBank, setSelectedBank] = useState(bankBca[0].id);
  const textToCopy = "54104257877";
  const iconStyle = {
    background: "none",
    border: "none",
    padding: 0,
    width: "24px", // Set the desired width
    height: "24px", // Set the desired height
    cursor: "pointer",
  };

  const handleCopyClick = () => {
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    // Optionally, you can show a notification or tooltip to indicate the text was copied.
    console.log("Text copied to clipboard!");
  };
  return (
    <>
      <Card className="mt-5 p-4">
        <div className="">
          <Row>
            <h5 className="my-2">Lakukan Transfer Ke</h5>
            <div className="my-2 d-flex">
              <Button
                id="BankButtonOption"
                variant="outline-light text-dark"
                disabled="true"
                style={{ padding: "0.3rem 1.5rem" }}
              >
                BCA
              </Button>
              <div>
                <p className="m-0 ps-3">BCA Transfer</p>
                <p className="m-0 ps-3">a.n Binar Car Rental</p>
              </div>
            </div>
          </Row>
          <Row>
            <div className="my-2">
              <p style={{ margin: "0" }}>Nomor Rekening</p>
              <div className="px-3 py-2 border border-primary d-flex justify-content-between align-contents-middle">
                <p style={{ margin: "0" }}>{textToCopy}</p>
                <button style={iconStyle} onClick={handleCopyClick}>
                  <FaCopy />
                </button>
              </div>
            </div>
          </Row>
          <Row>
            <div className="my-2">
              <p style={{ margin: "0" }}>Total Bayar</p>
              <div className="px-3 py-2 border border-primary d-flex justify-content-between align-contents-middle">
                <p style={{ margin: "0" }}>{textToCopy}</p>
                <button style={iconStyle} onClick={handleCopyClick}>
                  <FaCopy />
                </button>
              </div>
            </div>
          </Row>
        </div>
      </Card>

      <Card className="mt-5 p-4">
        <div className="">
          <div>
            <h5>Instructions for Payment</h5>
          </div>
          <div className="btn-group btn-block custom-btn-group d-flex justify-content-evenly">
            {bankBca.map((bank) => (
              <Button
                key={bank.id}
                onClick={() => setSelectedBank(bank.id)}
                variant="none"
                style={{
                  borderRadius: "0",
                }}
              >
                {bank.title}
              </Button>
            ))}
          </div>
          {selectedBank !== null && (
            <div>
              {bankBca
                .find((bank) => bank.id === selectedBank)
                .text.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
            </div>
          )}
        </div>
      </Card>
    </>
  );
}

export default BankBCA;
