import React from "react"
import { Box, Grid, Typography, Grow } from "@mui/material";
import resume from '../assets/Samuel Clark Resume.pdf'

export default function Resume() {
    return(
        <Grid container spacing={1} sx={{color:'white'}}>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1000 } : {})}>
                <Grid item xs={12}>
                    <Typography sx={{color:'white', display: 'flex', flexDirection: 'row', my:'5%'}} variant="h4" gutterBottom component="div">
                        Find my resume <a className="resume-link" href={resume} target="_blank" rel='noreferrer'>here</a>
                    </Typography>
                    <Typography sx={{color:'white', display: 'flex', flexDirection: 'row', mb:'5%'}} variant="h4" gutterBottom component="div">
                        If you have any questions, you can contact me at...
                    </Typography>
                </Grid>
            </Grow>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1500 } : {})}>
                <Grid item xs={12}>
                    <Box sx={{borderColor: 'white', border:1, p:2}}>
                        <Typography variant="h5" gutterBottom component="div">Contact Information:</Typography>
                        <ul>
                            <li>
                                Telephone Number: 
                            </li>
                            <li>
                                Email: 
                            </li>
                        </ul>
                    </Box>
                </Grid>
            </Grow>
        </Grid>
    );
};
