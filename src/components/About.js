import React from "react"
import { Grid, Avatar, Box, Grow, Typography } from "@mui/material"

export default function About() {
    const skillsArray = [
        {
            title: 'Languages',
            skills: 'Javascript, SQL, Java, HTML/CSS'
        },
        {
            title: 'Technologies',
            skills: 'Node.js, Express.js, React.js, REST, GraphQL, Spring Boot, MVC, SPA'
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
            skills: 'Git, GitHub, AWS, GitLab, Heroku, Postman, Bash'
        }
    ];
    return (
        <Grid container spacing={1} sx={{pt:'5%'}}>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1000 } : {})}>
                <Grid item xs={12} sm={3} md={3} lg={3} xl={3} sx={{display:'flex', justifyContent:'center', mb:5}}>
                    <Avatar src={require('../assets/avatar.jpg')} alt='Sam Clark' sx={{height:250, width: 250}}/>
                </Grid>
            </Grow>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1500 } : {})}>
                <Grid item xs={12} sm={9} md={9} lg={9} xl={9}>
                    <Box sx={{color:'white', ml:5, fontSize:25}}>
                    As a research associate in the biotechnology industry, I am given the opportunity to enhance my critical thinking skills to execute the daily laboratory workflow and support the development of products for associated organizations. With the desire to learn and develop my skills, I recently graduated from UNC Chapel Hill's Full-Stack Coding Boot Camp in which I learned how to develop responsive web apps and learn in-demand technologies.
                    </Box>
                </Grid>
            </Grow>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 2000 } : {})}>
                <Grid item xs={12}>
                    <Box sx={{borderColor: 'white', border:1, p:2, mr:4, color:'white'}}>
                        <Typography variant="h4" gutterBottom component="div">Proficiencies:</Typography>
                        <ul>
                            {skillsArray.map(skill => (
                                <li key={skill.title}><span style={{textDecoration:'underline'}}>{skill.title}</span>: {skill.skills}</li>
                            ))}
                        </ul>
                    </Box>
                </Grid>
            </Grow>
        </Grid>
    )
}