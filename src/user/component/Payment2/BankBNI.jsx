import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { bankBni } from "./BanksInfo";

function BankBNI({ data }) {
  const [selectedBank, setSelectedBank] = useState(bankBni[0].id);
  const textToCopy = "54104257877";
  const priceToCopy = data?.total_price;
  const iconStyle = {
    background: "none",
    border: "none",
    padding: 0,
    width: "24px", // Set the desired width
    height: "24px", // Set the desired height
    cursor: "pointer",
  };

  const handleCopyText = () => {
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    console.log("Text copied to clipboard!");
  };
  const handleCopyPrice = () => {
    const textarea = document.createElement("textarea");
    textarea.value = priceToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
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
                style={{
                  border: "1px solid #D0D0D0",
                  padding: "0.3rem 1.5rem",
                }}
              >
                BNI
              </Button>
              <div>
                <p className="m-0 ps-3">BNI Transfer</p>
                <p className="m-0 ps-3">a.n Binar Car Rental</p>
              </div>
            </div>
          </Row>
          <Row>
            <div className="my-2">
              <p className="mb-2">Nomor Rekening</p>
              <div className="px-3 py-2 border d-flex justify-content-between align-contents-middle">
                <p style={{ margin: "0" }}>{textToCopy}</p>
                <button style={iconStyle} onClick={handleCopyText}>
                  <FaCopy />
                </button>
              </div>
            </div>
          </Row>
          <Row>
            <div className="my-2">
              <p className="mb-2">Total Bayar</p>
              <div className="px-3 py-2 border d-flex justify-content-between align-contents-middle">
                <p style={{ margin: "0" }}>{priceToCopy}</p>
                <button style={iconStyle} onClick={handleCopyPrice}>
                  <FaCopy />
                </button>
              </div>
            </div>
          </Row>
        </div>
      </Card>

      {/* 3 */}
      <Card className="mt-5 p-4">
        <div className="">
          <div>
            <h5>Instructions for Payment</h5>
          </div>
          <div className="py-2 btn-group btn-block custom-btn-group d-flex justify-content-evenly">
            {bankBni.map((bank) => (
              <Button
                className="button-list"
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
            <div className="py-2">
              {bankBni
                .find((bank) => bank.id === selectedBank)
                .text.map((item, index) => (
                  <p className="desc-list" key={index}>
                    {item}
                  </p>
                ))}
            </div>
          )}
        </div>
      </Card>
    </>
  );
}

export default BankBNI;
