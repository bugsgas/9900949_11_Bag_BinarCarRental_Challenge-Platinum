// component/Payment1/PaymentDetailsCard.js
import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const PaymentDetailsCard = ({
  isDetailsVisible,
  toggleDetailsVisibility,
  confirmButton,
  isBankSelected,
}) => {
  return (
    <Card className="p-5">
      <div className="detail-div">
        <h5 className="tentang">Innova</h5>
        <h5 className="tentang">6 - 8 orang</h5>
      </div>
      <div className="dropdown d-flex align-items-center">
        <h6 className="pe-2 m-0">Details</h6>
        <div
          className={`toggle-icon ${isDetailsVisible ? "rotate" : ""}`}
          onClick={toggleDetailsVisibility}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>

      {isDetailsVisible && (
        <div className="details">
          <h5>Harga</h5>
          <li>Sewa Mobil Rp.500.000 x 7 Hari</li>
          <br />
          <h5>Biaya Lainnya</h5>
          <li>Pajak</li>
          <li>Biaya makan sopir</li>
          <br />
          <h5>Belum Termasuk</h5>
          <li>Bensin</li>
          <li>Tol dan Parkir</li>
          <hr />
        </div>
      )}

      <div className="total d-flex justify-content-between">
        <h5>Total</h5>
        <h5>Rp.500.000</h5>
      </div>

      <Button
        id="ConfirmButton"
        onClick={confirmButton}
        disabled={!isBankSelected}
        style={{ width: "100%" }}
      >
        Submit
      </Button>
    </Card>
  );
};

export default PaymentDetailsCard;
