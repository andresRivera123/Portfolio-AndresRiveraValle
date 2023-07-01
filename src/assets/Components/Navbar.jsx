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

const UserBox = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "5px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

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
          <ListItem sx={{ flex: 1 }}>
            <Button
              onClick={(e) => handleLinkClick(e, "home")}
              component="a"
              href="#home"
              color="inherit"
              sx={{
                "&:hover": {
                  backgroundColor: "#D79788",
                },
              }}
            >
              <ListItemText primary="INICIO" />
            </Button>
          </ListItem>
          <ListItem sx={{ flex: 2 }}>
            <Button
              onClick={(e) => handleLinkClick(e, "about")}
              component="a"
              href="#about"
              color="inherit"
              sx={{
                "&:hover": {
                  backgroundColor: "#D79788",
                },
              }}
            >
              <ListItemText primary="SOBRE MÍ" />
            </Button>
          </ListItem>
          <ListItem sx={{ flex: 1 }}>
            <Button
              onClick={(e) => handleLinkClick(e, "projects")}
              component="a"
              href="#projects"
              color="inherit"
              sx={{
                "&:hover": {
                  backgroundColor: "#D79788",
                },
              }}
            >
              <ListItemText primary="PROYECTOS" />
            </Button>
          </ListItem>
          <ListItem sx={{ flex: 1 }}>
            <Button
              onClick={(e) => handleLinkClick(e, "achievements")}
              component="a"
              href="#achievements"
              color="inherit"
              sx={{
                "&:hover": {
                  backgroundColor: "#D79788",
                },
              }}
            >
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
