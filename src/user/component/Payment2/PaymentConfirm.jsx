import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Countdown from "react-countdown-now";

const PaymentConfirm = ({ confirmbutton, toggleCountdownVisibility }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  // Step 2: Add a function to handle the combined button click
  const handleButtonClick = () => {
    toggleCountdownVisibility();
    // Set the confirmation state to true
    setIsConfirmed(true);
  };
  //showuploadcontent
  const countdownDuration = 10 * 60 * 1000;
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Action to perform when the countdown completes
      console.log("Countdown complete!");
      return <span>Countdown Complete!</span>;
    }

    return (
      <span className="d-flex">
        <span className="red-block">{minutes}</span>
        <p style={{ margin: "0px 5px" }}>:</p>
        <span className="red-block">{seconds}</span>
      </span>
    );
  };

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

  return (
    <>
      <Card className="mt-5 p-4">
        {isConfirmed ? (
          <div className="show-upload">
            <>
              <div
                className="d-flex align-items-center justify-content-between"
                style={{ fontSize: "12px" }}
              >
                <h6 className="m-0">Konfirmasi Pembayaran</h6>
                <Countdown
                  date={Date.now() + countdownDuration}
                  renderer={renderer}
                />
              </div>
              <div className="mt-4" style={{ fontSize: "14px" }}>
                <p>
                  Terima kasih telah melakukan konfirmasi pembayaran.
                  Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit
                  untuk mendapatkan konfirmasi.
                </p>
                <p>Upload Bukti Pembayaran</p>
                <p>
                  Untuk membantu kami lebih cepat melakukan pengecekan. Kamu
                  bisa upload bukti bayarmu
                </p>
              </div>
              <div className="my-2 d-flex justify-content-center align-items-center text-center">
                {previewUrl && (
                  <div className="">
                    <label htmlFor="fileInput">
                      {/* Wrap the image inside the label */}
                      <img
                        src={previewUrl}
                        alt="Preview"
                        style={{ maxWidth: "300px", marginTop: "10px" }}
                        className="preview-image"
                      />
                      <input
                        id="fileInput"
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                )}
                {!previewUrl && (
                  <div className="upload my-2">
                    <label htmlFor="fileInput">
                      {/* Wrap the image inside the label */}
                      <img
                        src="../src/assets/pembayaran/frame 39.png"
                        alt="Preview"
                        style={{
                          maxWidth: "300px",
                          marginTop: "10px",
                          cursor: "pointer",
                        }}
                      />
                      <input
                        id="fileInput"
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                )}
              </div>
              <Button
                id="ConfirmButton"
                onClick={confirmbutton}
                disabled={!selectedFile} // Disable the button if no file is selected
                style={{ width: "100%" }}
                className="mt-3"
              >
                Submit
              </Button>
            </>
          </div>
        ) : (
          <div className="show-confirm">
            <p>
              Klik konfirmasi pembayaran untuk mempercepat proses pengecekan
            </p>
            <Button onClick={handleButtonClick}>Konfirmasi Pembayaran</Button>
          </div>
        )}
      </Card>
    </>
  );
};

export default PaymentConfirm;
