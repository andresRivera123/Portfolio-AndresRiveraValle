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
  justifyContent: "space-around",
  alignItems: "center",
  height: "75px",
});

const menuOptions = [
  { id: "home", label: "INICIO", flex: 1 },
  { id: "about", label: "SOBRE MÍ", flex: 2 },
  { id: "projects", label: "PROYECTOS", flex: 1 },
  { id: "achievements", label: "LOGROS", flex: 1 },
];

function Navbar() {
  const [deployMenu, setDeployMenu] = React.useState(false);

  const handleDrawerClose = () => {
    setDeployMenu(false);
  };

  const handleClickDeploy = () => {
    setDeployMenu((prevDeployMenu) => !prevDeployMenu);
  };

  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="fixed">
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
          {menuOptions.map((option) => (
            <ListItem key={option.id} sx={{ flex: option.flex }}>
              <Button
                onClick={(e) => handleLinkClick(e, option.id)}
                component="a"
                href={`#${option.id}`}
                color="inherit"
                sx={{
                  "&:hover": {
                    backgroundColor: "#563f3a",
                    color: "white",
                  },
                }}
              >
                <ListItemText primary={option.label} />
              </Button>
            </ListItem>
          ))}
        </List>
        <Hidden smUp>
          {deployMenu ? (
            <Button onClick={handleClickDeploy}>
              <MenuOpenIcon
                fontSize="large"
                color="secondary"
                sx={{ color: "#563f3a", display: { xs: "block", sm: "none" } }}
              />
            </Button>
          ) : (
            <Button onClick={handleClickDeploy}>
              <MenuIcon
                fontSize="large"
                sx={{ color: "#563f3a", display: { xs: "block", sm: "none" } }}
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
                href="#home"
                color="inherit"
                onClick={handleDrawerClose}
              >
                <ListItemText primary="INICIO" sx={{ textAlign: "center" }} />
              </Button>
            </ListItem>
            <ListItem>
              <Button
                component="a"
                href="#about"
                color="inherit"
                onClick={handleDrawerClose}
              >
                <ListItemText primary="SOBRE MÍ" sx={{ textAlign: "center" }} />
              </Button>
            </ListItem>
            <ListItem>
              <Button
                component="a"
                href="#projects"
                color="inherit"
                onClick={handleDrawerClose}
              >
                <ListItemText
                  primary="PROYECTOS"
                  sx={{ textAlign: "center" }}
                />
              </Button>
            </ListItem>
            <ListItem>
              <Button
                component="a"
                href="#achievements"
                color="inherit"
                onClick={handleDrawerClose}
              >
                <ListItemText primary="LOGROS" sx={{ textAlign: "center" }} />
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </StyleToolbar>
    </AppBar>
  );
}
export default Navbar;
