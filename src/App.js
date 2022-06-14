import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Box, Container } from "@mui/material";

import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  
  return (
    <Router>
      <Box sx={{position:'sitcky', top:0}}>
        <Header />
      </Box>
      <Container maxWidth='xl' sx={{minHeight:'80vh'}}>
        <Routes>
          <Route
            path='sam-clark-portfolio'
            element={<About />}
          />
          <Route
            path='sam-clark-portfolio/aboutme'
            element={<About />}
          />
          <Route
            path='sam-clark-portfolio/projects'
            element={<Project />}
          />
          <Route
            path='sam-clark-portfolio/contact'
            element={<Contact />}
          />
          <Route
            path='sam-clark-portfolio/resume'
            element={<Resume />}
          />
        </Routes>
      </Container>
      <Box sx={{position:'inherit', bottom:0, width:'100%'}}>
        <Footer></Footer>
      </Box>
    </Router>
  );
}

export default App;
