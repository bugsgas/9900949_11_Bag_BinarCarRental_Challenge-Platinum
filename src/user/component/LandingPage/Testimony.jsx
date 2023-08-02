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
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "300px",
    slidesToShow: 1,
    speed: 1000,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
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
