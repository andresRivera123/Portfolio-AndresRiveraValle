import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { UnityData } from "../utils/ProjectData";

import "swiper/css";
import "swiper/css/pagination";
import "../Styles/bulletSwiper.css";
import { Image } from "@mui/icons-material";

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
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia sx={{ height: 115 }} image={project.image} />
              <CardContent>
                <Box display="flex" flexDirection="column">
                  <Typography variant="h7" sx={{ fontWeight: 500 }}>
                    {project.name}
                  </Typography>
                  <Typography variant="h8">{project.description}</Typography>
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SwiperCarousel;
