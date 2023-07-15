import { Box, Typography } from "@mui/material";
import waveImage from "../images/footer.png";

const Achievements = () => {
  return (
    <Box sx={{ marginX: { xs: 3, sm: 8 }, marginTop: 3}}>
      <Typography variant="h4" sx={{ textAlign: "center", fontWeight: 500 }}>
        Logros
      </Typography>
    </Box>
  );
};

export default Achievements;
