import About from "./assets/Components/About";
import Navbar from "./assets/Components/Navbar";
import { Box } from "@mui/material";
import Projects from "./assets/Components/Projects";
import Main from "./assets/Components/Main";
import Achievements from "./assets/Components/Achievements";
import Footer from "./assets/Components/Footer";


function App() {
  return (
    <Box>
      <Navbar/>
      <section id="home" style={{ paddingTop: "75px", height: "100vh" }}>
        <Main/>
      </section>
      <section id="about" style={{ paddingTop: "75px", height: "100vh"}}>
        <About/>
      </section>
      <section id="projects" style={{ paddingTop: "75px", height: "100vh"}}>
        <Projects/>
      </section>
      <section id="achievements" style={{ paddingTop: "75px", height: "75vh"}}>
        <Achievements/>
      </section>
      <section id="footer" style={{ paddingTop: "75px", height: "25vh"}}>
        <Footer/>
      </section>
    </Box>
  );
}

export default App;
