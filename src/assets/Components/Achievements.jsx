import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import waveImage from "../images/footer.png";
import { WorkspacePremiumOutlined } from "@mui/icons-material";
import TimelineAchievements from "./TimelineAchievements";

const Achievements = () => {
  return (
    <Box sx={{ marginX: { xs: 0, sm: 8 }, marginTop: 3 }}>
      <Typography variant="h4" sx={{ textAlign: "center", fontWeight: 500 }}>
        Logros
      </Typography>
      <Box>
        <TimelineAchievements/>
      </Box>
    </Box>
  );
};

export default Achievements;
