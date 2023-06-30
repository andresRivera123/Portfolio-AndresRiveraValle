import * as React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  styled,
  ListItemText,
  ListItem,
  List,
  Button,
  Drawer,
  Hidden,
} from "@mui/material";

/* ICONS & IMAGES */
import logoPage from "../images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-evenly",
  height: "75px",
});

const UserBox = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "5px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const pages = ["Inicio", "Sobre mí", "Proyectos", "Logros"];

function Navbar() {
  const [deployMenu, setDeployMenu] = React.useState(false);

  const handleDrawerClose = () => {
    setDeployMenu(false);
  };

  const handleClickDeploy = () => {
    setDeployMenu((prevDeployMenu) => !prevDeployMenu);
  };

  return (
    <AppBar position="sticky">
      <StyleToolbar>
        <Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Avatar
              sx={{ width: 50, height: 50, marginRight: 3 }}
              src={logoPage}
            ></Avatar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Andyk
            </Typography>
          </Box>
        </Box>
        <List
          sx={{
            display: { xs: "none", sm: "flex" },
            gap: "15px",
            alignItems: "center",
          }}
        >
          <ListItem sx={{ flex: 1 }}>
            <Button component="a" href="#" color="inherit">
              <ListItemText primary="INICIO" />
            </Button>
          </ListItem>
          <ListItem sx={{ flex: 2 }}>
            <Button component="a" href="#about" color="inherit">
              <ListItemText primary="SOBRE MÍ" />
            </Button>
          </ListItem>
          <ListItem sx={{ flex: 1 }}>
            <Button component="a" href="#projects" color="inherit">
              <ListItemText primary="PROYECTOS" />
            </Button>
          </ListItem>
          <ListItem sx={{ flex: 1 }}>
            <Button component="a" href="#achievements" color="inherit">
              <ListItemText primary="LOGROS" />
            </Button>
          </ListItem>
        </List>
        <Hidden smUp>
          {deployMenu ? (
            <Button onClick={handleClickDeploy}>
              <MenuOpenIcon
                fontSize="large"
                color="secondary"
                sx={{ display: { xs: "block", sm: "none" } }}
              />
            </Button>
          ) : (
            <Button onClick={handleClickDeploy}>
              <MenuIcon
                fontSize="large"
                color="secondary"
                sx={{ display: { xs: "block", sm: "none" } }}
              />
            </Button>
          )}
        </Hidden>
        <Drawer
          anchor="bottom"
          open={deployMenu}
          onClose={handleDrawerClose}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <List>
            <ListItem>
              <Button
                component="a"
                href="#"
                color="inherit"
                onClick={handleDrawerClose}
              >
                <ListItemText primary="INICIO" />
              </Button>
            </ListItem>
            <ListItem>
              <Button
                component="a"
                href="#about"
                color="inherit"
                onClick={handleDrawerClose}
              >
                <ListItemText primary="SOBRE MÍ" />
              </Button>
            </ListItem>
            <ListItem>
              <Button
                component="a"
                href="#projects"
                color="inherit"
                onClick={handleDrawerClose}
              >
                <ListItemText primary="PROYECTOS" />
              </Button>
            </ListItem>
            <ListItem>
              <Button
                component="a"
                href="#achievements"
                color="inherit"
                onClick={handleDrawerClose}
              >
                <ListItemText primary="LOGROS" />
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </StyleToolbar>
    </AppBar>
  );
}
export default Navbar;
