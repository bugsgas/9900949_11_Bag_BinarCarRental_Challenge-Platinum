import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Card } from "react-bootstrap";

const DateRange = ({ data }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [numOfDays, setNumOfDays] = useState(0);
  const today = new Date();
  const maxDate = startDate ? new Date(startDate.getTime()) : null;
  if (maxDate) {
    maxDate.setDate(startDate.getDate() + 7);
  }

  const handleDateChange = (update) => {
    if (update[1] && update[1] > maxDate) {
      update = [update[0], maxDate];
    }
    setDateRange(update);
  };

  useEffect(() => {
    if (startDate && endDate) {
      const differenceInTime = endDate.getTime() - startDate.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      setNumOfDays(Math.ceil(differenceInDays));
    } else {
      setNumOfDays(0);
    }
  }, [startDate, endDate]);

  const totalPrice = numOfDays * data.price;

  return (
    <div className="dateRange">
      <Card className="m-auto" style={{ width: "20rem" }}>
        <div className="p-2">
          <Card.Img className="p-3" variant="top" src={data.image} />
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>Rp {data.price} / hari</Card.Text>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Card.Text>
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              minDate={today} // Set the minimum selectable date to today
              maxDate={maxDate} // Set the maximum selectable date (7 days from startDate)
              onChange={handleDateChange}
              isClearable={true}
            />
            <p>Total Price: Rp {totalPrice}</p>
            {/* Display the calculated total price */}
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default DateRange;
