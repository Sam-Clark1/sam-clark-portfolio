import { useState } from "react";
import { Box, Container } from "@mui/material";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState('aboutme')
  return (
    <div>
      <Box sx={{position:'sitcky', top:0}}>
        <Header
          currentPage = {currentPage}
          setCurrentPage = {setCurrentPage}
          > 
        </Header>
      </Box>

      <Container maxWidth='xl' sx={{minHeight:'80vh'}}>
          {currentPage === 'aboutme' && <About></About>}

          {currentPage === 'projects' && <Project ></Project>}

          {currentPage === 'contact' && <Contact></Contact>}

          {currentPage === 'resume' && <Resume></Resume>}
      </Container>

      <Box sx={{position:'inherit', bottom:0, width:'100%'}}>
        <Footer></Footer>
      </Box>
    </div>
  );
}

export default App;
