import { useState } from "react";
import { Container } from "@mui/material";
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
      <Header
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}> 
      </Header>

      <Container fixed sx={{height:'65vh'}}>

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

      </Container>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
