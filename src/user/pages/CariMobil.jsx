import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import CarCard from "../component/CarCard";
import FindCar from "../component/FindCar";
import Hero from "../component/Hero";

export default function CariMobil() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // useEffect(() => {
  //   if (!token) {
  //     navigate("/");
  //   }
  // });

  const [data, setData] = useState([]);
  const [err, setErr] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    isRented: "",
  });

  useEffect(() => {
    getDetailedData();
  }, [form]);

  const getDetailedData = () => {
    const api = `https://api-car-rental.binaracademy.org/customer/v2/car?name=${form.name}&category=${form.category}&minPrice=${form.minPrice}&maxPrice=${form.maxPrice}&isRented=${form.isRented}&pageSize=4`;
    axios
      .get(api)
      .then((res) => {
        // console.log(res);
        setData(res.data.cars);
      })
      .catch((err) => {
        setErr(err.message);
      });
    errorState();
  };

  const errorState = () => {
    setTimeout(() => {
      setErr("");
    }, 4000);
  };

  return (
    <>
      <Hero showButton={false} showText={true} showImg={true} />
      <FindCar showCard={true} />
    </>
  );
}
