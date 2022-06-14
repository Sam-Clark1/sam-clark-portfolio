import React from "react"
import { Box, Grid, Typography, Button, Grow } from "@mui/material";
import resume from '../assets/Samuel Clark Resume.pdf'

export default function Resume() {
    return(
        <Grid container spacing={1} sx={{color:'white', pt:'10%'}}>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1000 } : {})}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Box sx={{borderColor: 'white', border:1, p:2, mr:4}}>
                        <Typography variant="h4" gutterBottom component="div">Proficiencies:</Typography>
                        <ul>
                            <li>Languages: Javascript, SQL, HTML/CSS</li>
                            <li>Technologies: Node.js, Express.js, React.js, REST, GraphQL, JWT, MVC</li>
                            <li>Databases: MySQL, MongoDB</li>
                            <li>Frameworks: Sequelize ORM, Mongoose ODM, Jest, Handlebars.js, JQuery</li>
                            <li>Tools: Git, GitHub, GitLab, Heroku, Postman, Bash</li>
                        </ul>
                    </Box>
                </Grid>
            </Grow>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1500 } : {})}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Typography sx={{color:'white', display: 'flex', flexDirection: 'row', my:"15%"}} variant="h4" gutterBottom component="div">
                        Download my resume <Button variant="contained" sx={{backgroundColor:'white', color: '#011936', fontSize:'1rem', ml:2}} size="auto" 
                        href={resume}
                        target="_blank" rel='noreferrer'>here</Button>
                    </Typography>
                </Grid>
            </Grow>
        </Grid>
    );
};