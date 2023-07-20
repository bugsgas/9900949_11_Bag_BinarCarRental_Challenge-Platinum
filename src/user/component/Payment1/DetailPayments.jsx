import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function DetailPayments() {
  return (
    <Card className="p-5">
      <div className="detail-div">
        <h5 className="tentang">Innova</h5>
        <h5 className="tentang">6 - 8 orang</h5>
      </div>
      <hr />
      <div className="details">
        <p>Total</p>
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
      </div>
    </Card>
  );
}

export default DetailPayments;
