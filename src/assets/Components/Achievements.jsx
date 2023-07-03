import { Box, Typography } from "@mui/material";
import waveImage from "../images/footer.png";

const Achievements = () => {
  return (
    <Box
      sx={{
        minHeight: "105vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Contenedor para el texto "Logros" */}
      <Box
        sx={{
          marginX: { xs: 3, sm: 8 },
          marginTop: 3,
        }}
      >
      <Typography variant="h4" sx={{ textAlign: "center", fontWeight: 500 }}>
          Logros
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        {/* Aquí puedes agregar el resto del contenido */}
        {/* ... */}
      </Box>

      {/* Imagen de fondo */}
      <img
        src={waveImage}
        alt="Wave"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
        }}
      />
    </Box>
  );
};

export default Achievements;