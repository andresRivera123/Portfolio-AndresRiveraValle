import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import logoImage from "../images/logo.png";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
        <Box sx={{ width: 150 }}>
                <img
                  src={logoImage}
                  alt="Logo portafolio - Andres Rivera"
                  style={{ width: "100%", height: "auto" }}
                ></img>
              </Box>
              <Box sx={{ width: 150 }}>
                <img
                  src={logoImage}
                  alt="Logo portafolio - Andres Rivera"
                  style={{ width: "100%", height: "auto" }}
                ></img>
              </Box>
              <Box sx={{ width: 150 }}>
                <img
                  src={logoImage}
                  alt="Logo portafolio - Andres Rivera"
                  style={{ width: "100%", height: "auto" }}
                ></img>
              </Box>
        </Slider>
      </div>
    );
  }
}