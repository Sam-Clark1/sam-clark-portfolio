import {Button, Stack, Box, Grid} from '@mui/material';

export default function Nav ({currentPage, setCurrentPage}) {

    return(
    <Box>
        <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Box sx={{color: 'white', display:'flex', justifyContent:'center', alignItems:'center', fontSize:80, fontFamily:"monospace", p:1}}>
                    Sam Clark
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Stack spacing={4} direction="row" justifyContent="center" sx={{pt:5, px:2}}>
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
    );
};
    