import { Box, Typography } from "@mui/material";
import React from "react";

/* IMAGE & ICONS */
import logoImage from "../images/logo.png";
import { theme } from "../../theme";
import IconsGrid from "./IconsGrid";

export default function Main() {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      height="calc(100vh - 75px)"
      justifyContent="center"
      alignItems="center"
      sx={{ marginX: { xs: 10, sm: 5, md: 25, lg: 35 } }}
      gap={5}
    >
      <Box
        flex={1}
        justifyContent="center"
        sx={{
          paddingTop: { xs: "15px" },
          width: {
            xs: 225,
            sm: 300,
            md: 100,
          },
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={logoImage}
          alt="Logo portafolio - Andres Rivera"
          style={{ maxWidth: "100%" }}
        ></img>
      </Box>
      <Box
        flex={1}
        justifyContent="center"
        sx={{ textAlign: "center", paddingX: { xs: 2, sm: 2 } }}
      >
        <Typography
          sx={{ fontWeight: 800, fontSize: { xs: 25, sm: 30, md: 35 } }}
        >
          HOLA, SOY ANDRES RIVERA VALLE
        </Typography>
        <Typography sx={{ fontSize: { xs: 15, sm: 20, md: 25 } }}>
          Ingeniero en Software
        </Typography>
        <Typography sx={{ fontSize: { xs: 15, sm: 20, md: 25 } }}>
          Front-ed & video game developer
        </Typography>
        <Box sx={{ marginTop: 3 }}>
          <Box
            borderRadius={7}
            sx={{
              height: "60px",
              width: { xs: "250px", sm: "300px" },
              margin: "0 auto",
              bgcolor: theme.palette.primary.main,
            }}
          >
            <IconsGrid />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
