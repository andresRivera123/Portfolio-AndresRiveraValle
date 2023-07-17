import About from "./assets/Components/About";
import Navbar from "./assets/Components/Navbar";
import { Box } from "@mui/material";
import Projects from "./assets/Components/Projects";
import Main from "./assets/Components/Main";
import Achievements from "./assets/Components/Achievements";
import Footer from "./assets/Components/Footer";

function App() {
  return (
    <Box display="flex" flexDirection="column">
      <Navbar />
      <Box
        id="home"
        component="section"
        sx={{ paddingTop: "75px", minHeight: "100vh" }}
      >
        <Main />
      </Box>
      <Box
        id="about"
        component="section"
        sx={{ paddingTop: "75px", minHeight: "100vh" }}
      >
        <About />
      </Box>
      <Box
        id="projects"
        component="section"
        sx={{ paddingTop: "75px", minHeight: "100vh" }}
      >
        <Projects />
      </Box>
      <Box
        id="achievements"
        component="section"
        sx={{ paddingTop: "75px", minHeight: "75vh" }}
      >
        <Achievements />
      </Box>
      <Box
        id="footer"
        component="footer"
        sx={{ paddingTop: "75px", height: "25vh" }}
      ><Footer/></Box>
    </Box>
  );
}

export default App;
