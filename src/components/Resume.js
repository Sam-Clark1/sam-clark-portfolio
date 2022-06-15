import React from "react"
import { Box, Grid, Typography, Grow } from "@mui/material";
import resume from '../assets/Samuel Clark Resume.pdf'

export default function Resume() {
    const skillsArray = [
        {
            title: 'Languages',
            skills: 'Javascript, SQL, HTML/CSS'
        },
        {
            title: 'Technologies',
            skills: 'Node.js, Express.js, React.js, REST, GraphQL, JWT, MVC'
        },
        {
            title: 'Databases',
            skills: 'MySQL, MongoDB'
        },
        {
            title: 'Frameworks',
            skills: 'Sequelize ORM, Mongoose ODM, Jest, Handlebars.js, JQuery'
        },
        {
            title: 'Tools',
            skills: 'Git, GitHub, GitLab, Heroku, Postman, Bash'
        }
    ];
    
    return(
        <Grid container spacing={1} sx={{color:'white', pt:'10%'}}>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1000 } : {})}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Box sx={{borderColor: 'white', border:1, p:2, mr:4}}>
                        <Typography variant="h4" gutterBottom component="div">Proficiencies:</Typography>
                        <ul>
                            {skillsArray.map(skill => (
                                <li key={skill.title}><span style={{textDecoration:'underline'}}>{skill.title}</span>: {skill.skills}</li>
                            ))}
                        </ul>
                    </Box>
                </Grid>
            </Grow>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1500 } : {})}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Typography sx={{color:'white', display: 'flex', flexDirection: 'row', my:"15%"}} variant="h4" gutterBottom component="div">
                        Checkout my resume <a className="resume-link" href={resume} target="_blank" rel='noreferrer'>here</a>
                    </Typography>
                </Grid>
            </Grow>
        </Grid>
    );
};