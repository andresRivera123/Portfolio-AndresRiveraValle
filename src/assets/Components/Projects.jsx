import { Box, Typography } from "@mui/material";
import React from "react";
import SwiperCarousel from "./SwiperCarousel";

export default function Projects() {
  const [expanded, setExpanded] = React.useState("unity");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Box sx={{ marginX: { xs: 3, sm: 8 }, marginTop: 3 }}>
      <Typography variant="h4" sx={{ textAlign: "center", fontWeight: 500 }}>
        Proyectos
      </Typography>
      {/* UNITY */}
      <Typography variant="h5" sx={{ fontWeight: 500 }}>
        Unity
      </Typography>
      <SwiperCarousel />
      {/* WEB */}
      <Typography variant="h5" sx={{ fontWeight: 500 }}>
        Web
      </Typography>
      <SwiperCarousel />
      {/* DESING */}
      <Typography variant="h5" sx={{ fontWeight: 500 }}>
        Diseño
      </Typography>
      <SwiperCarousel />
    </Box>
  );
}
