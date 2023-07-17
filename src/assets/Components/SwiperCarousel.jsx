import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { UnityData } from "../utils/ProjectData";

import "swiper/css";
import "swiper/css/pagination";
import "../Styles/bulletSwiper.css";

const SwiperCarousel = () => {
  return (
    <Box>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
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
        {UnityData.map((project) => (
          <SwiperSlide key={project.id}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box sx={{ width: 350 }}>
                <img
                  src={project.image}
                  alt="Logo portafolio - Andres Rivera"
                  style={{ width: "100%", height: "auto" }}
                />
                <Box display="flex" flexDirection="column">
                  <Typography variant="h7" sx={{ fontWeight: 500 }}>
                    {project.name}
                  </Typography>
                  <Typography variant="h8">{project.description}</Typography>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SwiperCarousel;
