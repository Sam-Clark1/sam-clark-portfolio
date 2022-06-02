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

      <Container maxWidth='xl' sx={{minHeight:'75vh'}}>
        <main>
        {currentPage === 'aboutme' && <About
          currentPage = {currentPage}
          setCurrentPage = {setCurrentPage}>
            </About>}

          {currentPage === 'projects' && <Project 
            currentPage = {currentPage}
            setCurrentPage = {setCurrentPage}></Project>}

          {currentPage === 'contact' && <Contact
          currentPage = {currentPage}
          setCurrentPage = {setCurrentPage}></Contact>}

          {currentPage === 'resume' && <Resume
          currentPage = {currentPage}
          setCurrentPage = {setCurrentPage}></Resume>}
        </main>
      </Container>

      <Box sx={{position:'inherit', bottom:0, width:'100%'}}>
        <Footer></Footer>
      </Box>
    </div>
  );
}

export default App;
