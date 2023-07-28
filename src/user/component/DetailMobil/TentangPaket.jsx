import React from "react";
import { tentangData } from "../../helper";
import { Container, Row, Col, Button, Image, Nav, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const TentangPaket = () => {
  return (
    <Card className="p-5">
      <div className="detail-tentang">
        <h4 className="tentang">Tentang Paket</h4>
        <div className="first">
          <h6>Include</h6>
          <ul>
            {tentangData.include.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="second">
          <h6>Exclude</h6>
          <ul>
            {tentangData.exclude.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="third">
          <h6>Refund, Reschedule, Overtime</h6>
          <ul>
            {tentangData.refundRescheduleOvertime.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default TentangPaket;
