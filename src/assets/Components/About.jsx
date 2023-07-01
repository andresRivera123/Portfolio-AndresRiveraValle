import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <Box id="about" sx={{ marginX: { xs: 3, sm: 8 }, marginY: 3 }}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Sobre mí
      </Typography>
      <Box
        sx={{
          paddingY: 3,
          marginX: "auto",
          maxWidth: 600,
          textAlign: "center",
        }}
      >
        "Soy un apasionado del diseño centrado en el usuario y el desarrollo de
        experiencias digitales intuitivas y atractivas. Mi enfoque principal
        está en el campo de <span style={{ fontWeight: 800 }}>UX/UI</span>,
        donde combino mi experiencia en{" "}
        <span style={{ fontWeight: 800 }}>frontend</span> con mis habilidades en
        el <span style={{ fontWeight: 800 }}>desarrollo de videojuegos</span>.”
      </Box>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Habilidades
      </Typography>
    </Box>
  );
}
