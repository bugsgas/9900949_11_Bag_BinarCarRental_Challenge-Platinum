import React, { forwardRef, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const DateRange = ({ data, onDateChange }) => {
  //daterange
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [numOfDays, setNumOfDays] = useState(0);
  const today = new Date();
  const maxDate = startDate ? new Date(startDate.getTime()) : null;
  if (maxDate) {
    maxDate.setDate(startDate.getDate() + 6);
  }

  const handleDateChange = (update) => {
    if (update[1] && update[1] > maxDate) {
      update = [update[0], maxDate];
    }
    setDateRange(update);
    onDateChange(update[0], update[1]);
  };

  useEffect(() => {
    const [startDate, endDate] = dateRange;
    if (startDate && endDate) {
      const differenceInTime = endDate.getTime() - startDate.getTime();
      const totalDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)) + 1;
      setNumOfDays(totalDays);
    } else {
      setNumOfDays(0);
    }
  }, [dateRange]);

  useEffect(() => {
    const totalPrice = numOfDays * data.price;
    onDateChange(dateRange[0], dateRange[1], totalPrice);
  }, [dateRange, data.price, numOfDays, onDateChange]);

  const ExampleCustomInputs = forwardRef(
    ({ value, onClick, onChange }, ref) => (
      <input
        value={value}
        className="example-custom-inputs"
        onClick={onClick}
        onChange={onChange}
        ref={ref}
      ></input>
    )
  );

  return (
    <div className="dateRange">
      <DatePicker
        placeholderText="Pilih tanggal sewa"
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        minDate={today} // Set the minimum selectable date to today
        maxDate={maxDate} // Set the maximum selectable date (7 days from startDate)
        onChange={handleDateChange}
        isClearable={true}
      />
    </div>
  );
};

export default DateRange;
