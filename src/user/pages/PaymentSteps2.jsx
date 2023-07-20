import React, { useState } from "react";
import { RiCheckLine } from "react-icons/ri";

import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "../component/Hero";
import DetailsBar from "../component/Payment1/DetailsBar";
import BankButton from "../component/Payment1/BankButton";
import BreadcrumbSteps from "../component/BreadcrumbSteps";
import DetailPayments from "../component/Payment1/DetailPayments";

const PaymentSteps2 = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bank, setBank] = useState("");
  const [paymentConfirmation, setPaymentConfirmation] = useState("");
  const [screenshot, setScreenshot] = useState("");
  const handleStepChange = (step) => {
    setCurrentStep(step);
    // Handle any actions you want to perform when the step is changed.
  };

  const steps = [
    { id: 1, title: "Step 1: Choose Bank" },
    { id: 2, title: "Step 2: Payment Confirmation" },
    { id: 3, title: "Step 3: Upload Screenshot" },
  ];

  return (
    <div>
      <div>
        <ul className="breadcrumbs">
          {steps.map((step) => (
            <li
              key={step.id}
              className={`breadcrumb-item${
                currentStep === step.id ? " active" : ""
              }${[1, 2].includes(step.id) ? " blue-highlight" : ""}`}
              onClick={() => handleStepChange(step.id)}
            >
              {step.title}
            </li>
          ))}
        </ul>
      </div>

      <Hero showButton={false} showText={false} showImg={false} />
      <Col md={{ span: 10, offset: 1 }}>
        <Container>
          <DetailsBar />
          <Row className="">
            <Col lg={8} xs={12} className="">
              <BankButton />
            </Col>
            <Col lg={4} xs={12} className="">
              <DetailPayments />
            </Col>
          </Row>

          {currentStep === 1 && (
            <>
              <h2>Step 1: Choose Bank</h2>
              <label>
                Select Bank:
                <select value={bank} onChange={(e) => setBank(e.target.value)}>
                  <option value="">Select Bank</option>
                  <option value="Bank A">Bank A</option>
                  <option value="Bank B">Bank B</option>
                  <option value="Bank C">Bank C</option>
                </select>
              </label>
              <button onClick={() => handleStepChange(2)}>Next</button>
            </>
          )}

          {currentStep === 2 && (
            <>
              <h2>Step 2: Payment Confirmation</h2>
              <label>
                Payment Confirmation:
                <input
                  type="text"
                  value={paymentConfirmation}
                  onChange={(e) => setPaymentConfirmation(e.target.value)}
                />
              </label>
              <button onClick={() => handleStepChange(1)}>Previous</button>
              <button onClick={() => handleStepChange(3)}>Next</button>
            </>
          )}

          {currentStep === 3 && (
            <>
              <h2>Step 3: Upload Screenshot</h2>
              <label>
                Upload Screenshot:
                <input
                  type="file"
                  onChange={(e) => setScreenshot(e.target.files[0])}
                />
              </label>
              <button onClick={() => handleStepChange(2)}>Previous</button>
              <button onClick={handleSubmit}>Submit Payment</button>
            </>
          )}
        </Container>
      </Col>
    </div>
  );
};

export default PaymentSteps2;
