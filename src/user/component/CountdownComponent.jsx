import React from "react";
import Countdown from "react-countdown-now";

const CountdownComponent = () => {
  const countdownDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Action to perform when the countdown completes
      console.log("Countdown complete!");
      return <span>Countdown Complete!</span>;
    }

    return (
      <span className="d-flex">
        <span className="red-block">{hours}</span>
        <p style={{ margin: "0px 5px" }}>:</p>
        <span className="red-block">{minutes}</span>
        <p style={{ margin: "0px 5px" }}>:</p>
        <span className="red-block">{seconds}</span>
      </span>
    );
  };

  return (
    <Countdown date={Date.now() + countdownDuration} renderer={renderer} />
  );
};

export default CountdownComponent;
