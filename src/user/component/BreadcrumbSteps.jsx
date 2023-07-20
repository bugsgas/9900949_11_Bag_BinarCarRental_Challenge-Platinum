import React from "react";

const BreadcrumbSteps = ({ steps, currentStep, handleStepChange }) => {
  return (
    <ul className="breadcrumbs">
      {steps.map((step) => (
        <li
          key={step.id}
          className={`breadcrumb-item${
            currentStep === step.id ? " active" : ""
          }`}
          onClick={() => handleStepChange(step.id)}
        >
          {step.title}
        </li>
      ))}
    </ul>
  );
};

export default BreadcrumbSteps;
