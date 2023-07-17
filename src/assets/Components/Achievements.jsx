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

const Achievements = () => {
  return (
    <Box sx={{ marginX: { xs: 3, sm: 8 }, marginTop: 3 }}>
      <Typography variant="h4" sx={{ textAlign: "center", fontWeight: 500 }}>
        Logros
      </Typography>
      <Box >
        <List sx={{ width: "100%"}}>
          <ListItem sx={{width: "auto"}}>
            <ListItemAvatar>
              <Avatar>
                <WorkspacePremiumOutlined />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="1er lugar | Concurso de desarollo de videojuegos | GamerFest/Espe-l | 2022"/>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkspacePremiumOutlined />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="2do lugar | Concurso de desarollo de videojuegos | GamerFest/Espe-l | 2023"/>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Achievements;
