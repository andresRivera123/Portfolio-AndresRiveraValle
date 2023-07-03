import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import logoImage from "../images/logo.png";
import unityImage from "../images/unityImage.jpg";
import SwiperCarousel from "./SwiperCarousel";

export default function Projects() {
  const [expanded, setExpanded] = React.useState("unity");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Box sx={{ marginX: { xs: 3, sm: 8 }, marginY: 3 }}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Proyectos
      </Typography>
      {/* UNITY */}
      <Typography sx={{ fontWeight: 600 }}>UNITY</Typography>
      <SwiperCarousel/>
      {/* WEB */}
      <Typography sx={{ fontWeight: 600 }}>WEB</Typography>
      <SwiperCarousel/>
      {/* DESING */}
      <Typography sx={{ fontWeight: 600 }}>DESING</Typography>
      <SwiperCarousel/>
    </Box>
  );
}
