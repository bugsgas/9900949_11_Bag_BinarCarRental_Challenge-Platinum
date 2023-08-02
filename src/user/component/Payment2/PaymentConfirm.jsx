import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Countdown from "react-countdown-now";

const PaymentConfirm = ({
  confirmbutton,
  toggleCountdownVisibility,
  onPreview,
  onChange,
  onDisable,
  // Rename the prop to onFileChange
}) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  // const [selectedFile, setSelectedFile] = useState(null);
  // const [previewUrl, setPreviewUrl] = useState(null);

  const handleButtonClick = () => {
    toggleCountdownVisibility();
    setIsConfirmed(true);
  };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedFile(file);

  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setPreviewUrl(reader.result);
  //   };
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   } else {
  //     setPreviewUrl(null);
  //   }
  // };

  const countdownDuration = 10 * 60 * 1000;
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
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

  return (
    <>
      <Card className="mt-5 p-4">
        {isConfirmed ? (
          <div className="show-upload">
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
                Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu
                akan segera kami cek tunggu kurang lebih 10 menit untuk
                mendapatkan konfirmasi.
              </p>
              <p>Upload Bukti Pembayaran</p>
              <p>
                Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa
                upload bukti bayarmu
              </p>
            </div>
            <div className="my-2 d-flex justify-content-center align-items-center text-center">
              {onPreview && (
                <div className="">
                  <label htmlFor="fileInput">
                    <img
                      src={onPreview}
                      alt="Preview"
                      style={{ maxWidth: "300px", marginTop: "10px" }}
                      className="preview-image"
                    />
                    <input
                      id="fileInput"
                      type="file"
                      style={{ display: "none" }}
                      onChange={onChange}
                    />
                  </label>
                </div>
              )}
              {!onPreview && (
                <div className="upload my-2">
                  <label htmlFor="fileInput">
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
                      onChange={onChange}
                    />
                  </label>
                </div>
              )}
            </div>
            <Button
              id="ConfirmButton"
              onClick={confirmbutton}
              disabled={onDisable}
              style={{ width: "100%" }}
              className="mt-3"
            >
              Submit
            </Button>
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
