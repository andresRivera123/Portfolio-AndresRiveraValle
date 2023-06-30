import { Box, Grid, IconButton, Link, Typography } from "@mui/material";
import React from "react";

/* IMAGE & ICONS */
import logoImage from "../images/logo.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { theme } from "../../theme";

export default function Main() {
  const handleEmailClick = () => {
    window.location.href = "mailto:carlosandresriveravalle@gmail.com";
  };
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola, ¿cómo te puede ayudar?");
    const phoneNumber = "0984579517";

    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      height="calc(100vh - 75px)"
      justifyContent="center"
      alignItems="center"
      sx={{ marginX: { xs: 10, sm: 5, md: 25, lg: 35 } }}
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
          sx={{ fontWeight:800, fontSize: { xs: 20, sm: 25, md: 30 } }}
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
              width: { xs: "225px", sm: "250px" },
              margin: "0 auto",
              bgcolor: theme.palette.primary.main,
            }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Grid item xs={3} sm={3}>
                <Link
                  href="https://github.com/andresRivera123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton sx={{ color: "black" }}>
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                </Link>
              </Grid>
              <Grid item xs={3} sm={3}>
                <Link
                  href="https://github.com/andresRivera123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton sx={{ color: "black" }}>
                    <LinkedInIcon fontSize="large" />
                  </IconButton>
                </Link>
              </Grid>
              <Grid item xs={3} sm={3}>
                <IconButton
                  onClick={handleWhatsAppClick}
                  sx={{ color: "black" }}
                >
                  <WhatsAppIcon fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item xs={3} sm={3}>
                <IconButton onClick={handleEmailClick} sx={{ color: "black" }}>
                  <MailOutlineIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
