import {Button, Stack, Box, Grid} from '@mui/material'

const Nav = ({currentPage, setCurrentPage}) => {

    return(
    <Box>
        <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Box sx={{color: 'white', justifyContent:'flex-start', alignItems:'flex-start', fontSize:80, fontFamily:"monospace", p:2}}>
                    Sam Clark
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Stack spacing={5} direction="row" justifyContent="center" sx={{pt:5, px:2}}>
                    <Button variant="contained" sx={{backgroundColor:'white', color: 'inherit', whiteSpace: 'nowrap', fontSize:12 }} size="auto" 
                    onClick={() => {
                    setCurrentPage('aboutme');
                    }}>About Me</Button>

                    <Button variant="contained" sx={{backgroundColor:'white', color: 'inherit',fontSize:12}} size="auto" onClick={() => {
                    setCurrentPage('projects');
                    }}>Projects</Button>

                    <Button variant="contained" sx={{backgroundColor:'white', color: 'inherit', fontSize:12}} size="auto" onClick={() => {
                    setCurrentPage('contact');
                    }}>Contact</Button>

                    <Button variant="contained" sx={{backgroundColor:'white', color: 'inherit', fontSize:12}} size="auto" onClick={() => {
                    setCurrentPage('resume');
                    }}>Resume</Button>
                    
                </Stack>
            </Grid>
        </Grid>
    </Box> 
    )
}
    
export default Nav;