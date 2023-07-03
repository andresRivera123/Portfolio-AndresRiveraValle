import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import languagesImages from "../images/languagesImage.png";
import frameworkImages from "../images/frameworksImage.png";
import toolsImages from "../images/toolsImage.png";


export default function About() {
  const [expanded, setExpanded] = React.useState("languajes");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Box id="about" sx={{ marginX: { xs: 3, sm: 8 }, marginY: 3 }}>
      <Typography variant="h4" sx={{ textAlign: "center", fontWeight: 500 }}>
        Sobre mí
      </Typography>
      <Box
        sx={{
          paddingY: { xs: 1, sm: 2, md: 3 },
          marginX: "auto",
          maxWidth: 600,
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontSize: { xs: 15, sm: 20 } }}>
          "Soy un apasionado del diseño centrado en el usuario y el desarrollo
          de experiencias digitales intuitivas y atractivas. Mi enfoque
          principal está en el campo de{" "}
          <span style={{ fontWeight: 800 }}>UX/UI</span>, donde combino mi
          experiencia en <span style={{ fontWeight: 800 }}>frontend</span> con
          mis habilidades en el{" "}
          <span style={{ fontWeight: 800 }}>desarrollo de videojuegos</span>.”
        </Typography>
      </Box>
      <Typography variant="h4" sx={{ textAlign: "center", fontWeight: 500 }}>
        Habilidades
      </Typography>
      <Box display="flex">
        <Box
          sx={{
            width: { xs: 400, sm: 700 },
            margin: "0 auto",
            paddingY: { xs: 1, sm: 2, md: 3 },
          }}
        >
          <Accordion
            expanded={expanded === "languajes"}
            onChange={handleChange("languajes")}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="languajes-content"
              id="languajes-header"
            >
              <Typography sx={{ fontWeight: 500 }}>
                Lenguajes de programación
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <img
                src={languagesImages}
                alt="Languages image"
                style={{ maxWidth: "100%" }}
              ></img>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "frameworks"}
            onChange={handleChange("frameworks")}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="frameworks-content"
              id="frameworks-header"
            >
              <Typography sx={{ fontWeight: 500 }}>
                Frameworks y librerías
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <img
                src={frameworkImages}
                alt="Languages image"
                style={{ maxWidth: "100%" }}
              ></img>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "tools"}
            onChange={handleChange("tools")}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="tools-content"
              id="tools-header"
            >
              <Typography sx={{ fontWeight: 500 }}>
                Sofware y herramientas
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <img
                src={toolsImages}
                alt="Languages image"
                style={{ maxWidth: "100%" }}
              ></img>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
}
