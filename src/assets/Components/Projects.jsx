import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import logoImage from "../images/logo.png";

export default function Projects() {
  return (
    <Box sx={{ marginX: { xs: 3, sm: 8 }, marginY: 3 }}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Proyectos
      </Typography>
      <Grid container direction="column">
        <Grid item>
          <Typography>Unity</Typography>
          <Grid item>
            <Box display="flex" flexDirection="row" gap={2}>
              <Box sx={{ width: 150}}>
                <img
                  src={logoImage}
                  alt="Logo portafolio - Andres Rivera"
                  style={{ maxWidth: "100%" }}
                ></img>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid item>
          <Typography>Desarollo Web</Typography>
          <Grid item>
            
          </Grid>
        </Grid>
        <Grid container>
          <Typography>Diseños figma</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
