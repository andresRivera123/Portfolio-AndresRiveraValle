import React from "react";
import { Box } from "@mui/material";
import logoImage from "../images/logo.png";
import unityImage from "../images/unityImage.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import 'swiper/css/pagination';
import '../Styles/bulletSwiper.css';

const SwiperCarousel = () => {

  return (
    <Box>
      <Swiper
        modules={[Pagination]}
        pagination={{clickable: true}}
        slidesPerView={3}

        breakpoints={{
          180: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          750: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1050: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
      >
        <SwiperSlide>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: 250 }}>
              <img
                src={unityImage}
                alt="Logo portafolio - Andres Rivera"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: 250 }}>
              <img
                src={unityImage}
                alt="Logo portafolio - Andres Rivera"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: 250 }}>
              <img
                src={unityImage}
                alt="Logo portafolio - Andres Rivera"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: 250 }}>
              <img
                src={unityImage}
                alt="Logo portafolio - Andres Rivera"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default SwiperCarousel;
