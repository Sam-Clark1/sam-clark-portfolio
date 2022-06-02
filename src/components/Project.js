import {  Grow, Card, Grid, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material"
import { useState } from "react"

export default function Project({currentPage, setCurrentPage}) {
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
            description: "A website that allows users to create accounts and match and chat with people with similar interests. Utilizes node.js, express.js, MySQL, and Sequelize.",
            deployed: "meme",
            repo: "meme",
            timeout: 1250
        },
        {
            title: "Friendless-in-Seattle",
            description: "A website that allows users to create accounts and match and chat with people with similar interests. Utilizes node.js, express.js, MySQL, and Sequelize.",
            deployed: "meme",
            repo: "meme",
            timeout: 1500
        },
        {
            title: "Friendless-in-Seattle",
            description: "A website that allows users to create accounts and match and chat with people with similar interests. Utilizes node.js, express.js, MySQL, and Sequelize.",
            deployed: "meme",
            repo: "meme",
            timeout: 1750
        },
        {
            title: "Friendless-in-Seattle",
            description: "A website that allows users to create accounts and match and chat with people with similar interests. Utilizes node.js, express.js, MySQL, and Sequelize.",
            deployed: "meme",
            repo: "meme",
            timeout: 2000
        }
    ]);
    return(
        <Grid container spacing={1}>
            {projects.map((project, i) => (
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{display:'flex', justifyContent:'center'}}>
                <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: project.timeout } : {})}>
                    <Card sx={{ maxWidth: 345, backgroundColor: '#F1F2F6', mb:2 }} variant='outlined'>
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
                        <CardActions>
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