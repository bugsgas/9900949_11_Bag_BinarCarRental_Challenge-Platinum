import "bootstrap/dist/css/bootstrap.min.css";
import Countdown from "react-countdown-now";
import { useState } from "react";

function ShowUpload() {
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
      <div
        className="d-flex align-items-center justify-content-between"
        style={{ fontSize: "12px" }}
      >
        <h6 className="m-0">Konfirmasi Pembayaran</h6>
        <Countdown date={Date.now() + countdownDuration} renderer={renderer} />
      </div>
      <div style={{ fontSize: "14px" }}>
        <p>
          Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan
          segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan
          konfirmasi.
        </p>
        <p>Upload Bukti Pembayaran</p>
        <p>
          Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload
          bukti bayarmu
        </p>
      </div>
      <div>
        {previewUrl && (
          <div>
            <label htmlFor="fileInput">
              {/* Wrap the image inside the label */}
              <img
                src={previewUrl}
                alt="Preview"
                style={{ maxWidth: "300px", marginTop: "10px" }}
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
          <div className="upload">
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
    </>
  );
}

export default ShowUpload;
