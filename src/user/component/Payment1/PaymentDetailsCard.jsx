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
  data,
}) => {
  // Function to calculate the difference in days between two dates
  const calculateDateDifference = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDifference = end.getTime() - start.getTime();
    const dayDifference = timeDifference / (1000 * 3600 * 24);
    return dayDifference;
  };

  const daysDifference = calculateDateDifference(
    data.start_rent_at,
    data.finish_rent_at
  );
  const resultPlusOne = daysDifference + 1;

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
    <Card className="p-3">
      <div className="detail-div">
        <h6 className="tentang m-0">{data?.Car?.name}</h6>
        <p className="tentang pt-1 m-0">
          {getCategoryValue(data?.Car?.category)}
        </p>
        <hr />
      </div>
      <div className="mb-3 dropdown d-flex align-items-center">
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
          <h6>Harga</h6>
          <div className="d-flex align-items-center justify-content-between">
            <li>
              Sewa Mobil Rp.{data?.Car?.price} x {resultPlusOne} Hari
            </li>
            <p className="m-0">Rp. {data?.total_price}</p>
          </div>

          <br />
          <h6>Biaya Lainnya</h6>
          <div className="d-flex align-items-center justify-content-between">
            <li>Pajak</li>
            <p style={{ color: "green" }}>Termasuk</p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <li>Biaya makan sopir</li>
            <p style={{ color: "green" }}>Termasuk</p>
          </div>

          <br />
          <h6>Belum Termasuk</h6>
          <li>Bensin</li>
          <li>Tol dan Parkir</li>
          <hr />
        </div>
      )}

      <div className="total d-flex justify-content-between">
        <h6>Total</h6>
        <h6>Rp. {data?.total_price}</h6>
      </div>

      <Button
        className="my-2"
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
