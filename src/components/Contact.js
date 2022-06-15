import React from "react";
import { Box, Grow } from "@mui/material";

export default function Contact() {
    return(
      <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1000 } : {})}>
        <Box sx={{color:'white', display:'flex', justifyContent:'center'}}>
          <section>
            <Box sx={{display:'flex', justifyContent:'center'}}>  
                <h1>Contact me</h1>
            </Box>
          </section>
        </Box>
      </Grow>
    );
};