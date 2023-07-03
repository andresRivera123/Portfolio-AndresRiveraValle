import React from "react";
import { Box } from "@mui/material";
import logoImage from "../images/logo.png";
import unityImage from "../images/unityImage.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";

const SwiperCarousel = () => {
  return (
    <Box>
      <Swiper
        modules={[Pagination]}
      
        pagination={{
          el: ".pagination",
          clickable: true,
        }}
        slidesPerView={3}
        breakpoints={{
          "@0.00": { slidesPerView: 1, spaceBetween: 10 },
          "@0.50": { slidesPerView: 1.5, spaceBetween: 25 },
          "@0.75": { slidesPerView: 1.75, spaceBetween: 25 },
          "@1.00": { slidesPerView: 2, spaceBetween: 10 },
          "@1.25": { slidesPerView: 2.5, spaceBetween: 20 },
          "@1.50": { slidesPerView: 3, spaceBetween: 10 },
          "@1.75": { slidesPerView: 4, spaceBetween: 20 },
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
      <div className="pagination" />
    </Box>
  );
};

export default SwiperCarousel;
