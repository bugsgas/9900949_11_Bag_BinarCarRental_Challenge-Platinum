import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Countdown from "react-countdown-now";

const PaymentConfirm = () => {
  const countdownDuration = 10 * 60 * 1000;
  const [isDetailVisible, setIsDetailVisible] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Read and create a preview URL for the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Action to perform when the countdown completes
      console.log("Countdown complete!");
      return <span>Countdown Complete!</span>;
    }
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return (
      <span className="d-flex">
        <span className="red-block">{formattedMinutes}</span>
        <p style={{ margin: "0px 5px" }}>:</p>
        <span className="red-block">{formattedSeconds}</span>
      </span>
    );
  };

  const showComponent = () => {
    setIsDetailVisible(false);
  };

  return (
    <Card className="mt-5 p-4">
      <div
        className="d-flex align-items-center justify-content-between"
        style={{ fontSize: "12px" }}
      >
        <h6 className="m-0">Konfirmasi Pembayaran</h6>
        {isDetailVisible && (
          <Countdown
            date={Date.now() + countdownDuration}
            renderer={renderer}
          />
        )}
      </div>
      <div style={{ fontSize: "14px" }}>
        {isDetailVisible && (
          <>
            <p>
              Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu
              akan segera kami cek tunggu kurang lebih 10 menit untuk
              mendapatkan konfirmasi.
            </p>
            <p>Upload Bukti Pembayaran</p>
            <p>
              Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa
              upload bukti bayarmu
            </p>
          </>
        )}
      </div>
      {isDetailVisible && (
        <div>
          <label htmlFor="fileInput">
            {/* Wrap the image inside the label */}
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Preview"
                style={{ maxWidth: "300px", marginTop: "10px" }}
              />
            ) : (
              <img
                src="../src/assets/pembayaran/frame 39.png"
                alt="Preview"
                style={{
                  maxWidth: "300px",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
              />
            )}
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </label>
        </div>
      )}
      <div className="detail-div">
        {isDetailVisible && (
          <>
            <p>
              Klik konfirmasi pembayaran untuk mempercepat proses pengecekan
            </p>
            <Button onClick={showComponent}>Konfirmasi Pembayaran</Button>
          </>
        )}
      </div>
      {!isDetailVisible && (
        <NavLink
          to="/payment-complete"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "inline-block",
            width: "100%",
          }}
        >
          <div style={{ width: "100%" }}>
            <Button
              id="ConfirmButton"
              // onClick={confirmbutton}
              // disabled={!isBankSelected}
              style={{ width: "100%" }}
            >
              Submit
            </Button>
          </div>
        </NavLink>
      )}
    </Card>
  );
};

export default PaymentConfirm;
