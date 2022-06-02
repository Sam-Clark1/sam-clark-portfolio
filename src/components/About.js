import { Grid, Avatar, Box } from "@mui/material"

export default function About() {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} sm={3} md={3} lg={3} xl={3} sx={{display:'flex', justifyContent:'center'}}>
                <Avatar src={require('../assets/avatar.jpg')} alt='Sam Clark' sx={{height:250, width: 250}}/>
            </Grid>
            <Grid item xs={12} sm={9} md={9} lg={9} xl={9}>
                <Box sx={{color:'white', ml:5, fontSize:25}}>
                Fullstack Software Engineer. Completed UNC Chapel Hill's Fullstack Coding Bootcamp in June 2022.
                </Box>
            </Grid>
        </Grid>
    )
}