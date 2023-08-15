import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { testimoniList } from "../../helper";

import Rating from "@mui/material/Rating";

const Testimony = () => {
  const [settings, setSettings] = useState({
    // className: "center",
    // centerMode: true,
    // centerPadding: "300px",

    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    className: "center",
    centerMode: true,
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  return (
    <div className="py-5">
      <div className="text-center">
        <h1>Testimonial</h1>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>
      <Slider {...settings}>
        {testimoniList.map((item) => (
          <div className="d-flex align-items-center px-5 testimonyBox">
            <div className="picture mx-3">
              <Image style={{ width: "100px" }} src={item.pic}></Image>
            </div>
            <div className="testimony px-3">
              <Rating
                name="read-only"
                value={item.star}
                precision={0.5}
                sx={{
                  color: "#F9CC00",
                }}
                size="large"
                readOnly
              />
              <div className="text my-2" style={{ fontSize: "20px" }}>
                {item.text}
              </div>
              <div className="name">{item.person}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimony;
