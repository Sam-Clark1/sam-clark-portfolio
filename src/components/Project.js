import React, { useState } from "react";
import {  Grow, Card, Grid, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";

export default function Project() {
    const [projects] = useState([
        {
            title: "Lab-Assistant",
            description: "A webiste that helps me and my co-works have easy access to formulas that generate data for us more quickly for customers. Front end built with React.js, TailwindCSS, and MaterialUI. Back end constructed with Java, Springboot, and MySQL.",
            deployed: "https://lab-assistant1.herokuapp.com/",
            repo: "https://github.com/Sam-Clark1/lab-assistant",
            backEndRepo:"https://github.com/Sam-Clark1/lab-assistant-api",
            hasBackEnd: true,
            timeout: 750
        },
        {
            title: "Friendless-in-Seattle",
            description: "A website that allows users to create accounts and match and chat with people with similar interests. Utilizes Node.js, Express.js, MySQL, and Sequelize. ",
            deployed: "https://friendless-in-seattle.herokuapp.com/",
            repo: "https://github.com/Sam-Clark1/Friendless-in-seattle",
            backEndRepo:"",
            hasBackEnd: false,
            timeout: 1000
        },
        {
            title: "D&D Character Creator",
            description: "An application that utilizes Node.js, Express.js, React.js, MongoDB, Mongoose ODM, and Graphql to generate a website (deployed on Heroku) that allows users to create and keep track of characters for the RPG Dungeons and Dragons.",
            deployed: "https://dnd-character-creator1.herokuapp.com/",
            repo: "https://github.com/Sam-Clark1/dungeon-disco",
            backEndRepo:"",
            hasBackEnd: false,
            timeout: 1250
        },
        {
            title: "Deep-Thinking",
            description: "Deep Thinking is a website that allows users to create accounts and then post thoughts they have that can be seen by other users. Users can post reactions to thoughts and also view profiles of other users and see all their thoughts. Built with MongoDB, Express.js, React.js, Node.js, and GraphQL. ",
            deployed: "https://deep-thinking1.herokuapp.com/",
            repo: "https://github.com/Sam-Clark1/deep-thinking",
            backEndRepo:"",
            hasBackEnd: false,
            timeout: 1500
        },
        {
            title: "Date-Dime",
            description: "A website that allows users to search for restaurants by price and location and also gives movie ideas. Uses Jquery, Google Maps API, and MovieGlu API",
            deployed: "https://sam-clark1.github.io/date-dime/",
            repo: "https://github.com/Sam-Clark1/date-dime",
            backEndRepo:"",
            hasBackEnd: false,
            timeout: 1750
        },
        {
            title: "Social-Media-Backend",
            description: "An application that leverages Node.js, Express.js, MongoDB and Mongoose to make the foundation for the back end of a social media website. ",
            deployed: "https://drive.google.com/file/d/1c2ib8BUolWgmfQ1GAxTq9jsGr6F2ojcq/view",
            repo: "https://github.com/Sam-Clark1/social-media-backend",
            backEndRepo:"",
            hasBackEnd: false,
            timeout: 2000
        }
    ]);
    return(
        <Grid container spacing={1}>
            {projects.map((project, i) => (
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{display:'flex', justifyContent:'center'}} key={project.title}>
                <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: project.timeout } : {})}>
                    <Card sx={{ maxWidth: 345, backgroundColor: '#F1F2F6', mb:2, display: 'flex', flexDirection: 'column' }} variant='outlined' >
                        <CardMedia
                            component="img"
                            height="140"
                            image={require(`../assets/${i}.png`)}
                            alt={project.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {project.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {project.description}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{mt:'auto'}}>
                            <Button href={project.deployed} size="small" target="_blank" rel='noreferrer' sx={{textAlign:'center'}}>Deployed App</Button>
                            {
                                project.hasBackEnd ?
                                <>
                                    <Button href={project.repo} size="small" target="_blank" rel='noreferrer' sx={{textAlign:'center'}}>Front End Github</Button>
                                    <Button href={project.backEndRepo} size="small" target="_blank" rel='noreferrer' sx={{textAlign:'center'}}>Back End Github</Button>
                                </>
                                :
                                <Button href={project.repo} size="small" target="_blank" rel='noreferrer'>Github</Button>
                            }
                        </CardActions>
                    </Card>
                </Grow>
            </Grid>
            ))}
            
        </Grid>
    )
}