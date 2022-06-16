import React, { useState } from "react";
import {  Grow, Card, Grid, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";

export default function Project() {
    const [projects] = useState([
        {
            title: "Friendless-in-Seattle",
            description: "A website that allows users to create accounts and match and chat with people with similar interests. Utilizes Node.js, Express.js, MySQL, and Sequelize. ",
            deployed: "https://friendless-in-seattle.herokuapp.com/",
            repo: "https://github.com/Sam-Clark1/Friendless-in-seattle",
            timeout: 750
        },
        {
            title: "Date-Dime",
            description: "A website that allows users to search for restaurants by price and location and also gives movie ideas. Uses Jquery, Google Maps API, and MovieGlu API",
            deployed: "https://lyndsclev.github.io/date-dime/",
            repo: "https://github.com/Sam-Clark1/date-dime",
            timeout: 1000
        },
        {
            title: "Social-Media-Backend",
            description: "An application that leverages Node.js, Express.js, MongoDB and Mongoose to make the foundation for the back end of a social media website. ",
            deployed: "https://drive.google.com/file/d/1c2ib8BUolWgmfQ1GAxTq9jsGr6F2ojcq/view",
            repo: "https://github.com/Sam-Clark1/social-media-backend",
            timeout: 1250
        },
        {
            title: "D&D Character Creator",
            description: "An application that utilizes Node.js, Express.js, React.js, MongoDB, Mongoose ODM, and Graphql to generate a website (deployed on Heroku) that allows users to create and keep track of characters for the RPG Dungeons and Dragons.",
            deployed: "https://dnd-character-creator1.herokuapp.com/",
            repo: "https://github.com/Sam-Clark1/dungeon-disco",
            timeout: 1500
        },
        {
            title: "Weather-App",
            description: "A website that allows users to check the current weather and 5-day forcast of an inputted location. Powered by DayJs and Jquery.",
            deployed: "https://sam-clark1.github.io/weather-app/",
            repo: "https://github.com/Sam-Clark1/weather-app",
            timeout: 1750
        },
        {
            title: "Employee-Manager-CLI",
            description: "This application uses inquirer.js and mysql to provide a command line interface for managing employees, employee roles, and departments. Can add new employees, roles, and departments to a mysql database and can retrieve all that data and view it in the command line using the console.table package.",
            deployed: "https://drive.google.com/file/d/1Vvnk_1Cc8xU20_7aUPRbVSY2KXGLiKdk/view",
            repo: "https://github.com/Sam-Clark1/employee-manager-cli",
            timeout: 2000
        }
    ]);
    return(
        <Grid container spacing={1}>
            {projects.map((project, i) => (
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{display:'flex', justifyContent:'center'}} key={project.title}>
                <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: project.timeout } : {})}>
                    <Card sx={{ maxWidth: 345, backgroundColor: '#F1F2F6', mb:2 }} variant='outlined' >
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
                        <CardActions sx={{pt:'auto'}}>
                            <Button href={project.deployed} size="small" target="_blank" rel='noreferrer'>Deployed App</Button>
                            <Button href={project.repo} size="small" target="_blank" rel='noreferrer'>Github</Button>
                        </CardActions>
                    </Card>
                </Grow>
            </Grid>
            ))}
            
        </Grid>
    )
}