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
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      height="calc(100vh - 75px)"
      justifyContent="center"
      alignItems="center"
      sx={{ marginX: { sx: 5, sm: 11 } }}
    >
      <Box
        flex={1}
        justifyContent="center"
        sx={{
          paddingTop: { xs: "15px" },
          width: {
            xs: 250,
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
        <Typography sx={{ textDecoration: "underline", fontSize: {xs: 25, sm: 30}}}>
          HOLA, SOY ANDRES RIVERA VALLE
        </Typography>
        <Typography sx={{ fontSize: {xs: 20, sm: 25}}}>Ingeniero en Software</Typography>
        <Typography >Front-ed & video game developer</Typography>
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
                  <Link
                    href="https://github.com/andresRivera123"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton sx={{ color: "black" }}>
                      <WhatsAppIcon fontSize="large" />
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
                      <MailOutlineIcon fontSize="large" />
                    </IconButton>
                  </Link>
                </Grid>
              </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
