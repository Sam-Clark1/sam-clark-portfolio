import { Box, Grid, Typography, Button, Grow } from "@mui/material";

export default function Resume() {
    return(
        <Grid container spacing={1} sx={{color:'white', pt:'10%'}}>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1000 } : {})}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Box sx={{borderColor: 'white', border:1, p:2, mr:4}}>
                        <Typography variant="h4" gutterBottom component="div">Proficiencies:</Typography>
                        <ul>
                            <li>Languages: Javascript, SQL, HTML/CSS</li>
                            <li>Technologies: Node.js, Express.js, React.js, REST, GraphQL</li>
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
                        href="https://docs.google.com/document/d/1gcTBg8bQ4trqiHpK3C8jP8gyKRnI7Qev/edit?usp=sharing&ouid=103675949855728027670&rtpof=true&sd=true"
                        target="_blank" rel='noreferrer'>here</Button>
                    </Typography>
                </Grid>
            </Grow>
        </Grid>
    );
};