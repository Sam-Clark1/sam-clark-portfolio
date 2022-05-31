import {Button, Stack, Box, Grid} from '@mui/material'

const Nav = () => {
    
    return(
    <Box>
        <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Box sx={{color: 'white', justifyContent:'flex-start', alignItems:'flex-start', fontSize:80, fontFamily:"monospace", p:2}}>
                    Sam Clark
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Stack spacing={5} direction="row" sx={{p:2}} justifyContent="flex-end" alignItems="flex-end">
                    <Button variant="contained" sx={{backgroundColor:'#F5ECCC', color: 'inherit'}} size="large">About Me</Button>
                    <Button variant="contained" sx={{backgroundColor:'#F5ECCC', color: 'inherit'}} size="large">Projects</Button>
                    <Button variant="contained" sx={{backgroundColor:'#F5ECCC', color: 'inherit'}} size="large">Contact</Button>
                    <Button variant="contained" sx={{backgroundColor:'#F5ECCC', color: 'inherit'}} size="large">Resume</Button>
                </Stack>
            </Grid>
        </Grid>
    </Box>
    )

}

export default Nav;