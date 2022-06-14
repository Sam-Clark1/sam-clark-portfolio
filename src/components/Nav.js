import React from "react"
import { Link } from 'react-router-dom'
import {Stack, Box, Grid} from '@mui/material';
import DrawerNav from './DrawerNav';

export default function Nav () {
const linkArray = (
    [
        {
            route: 'sam-clark-portfolio/aboutme',
            text: 'About Me'
        },
        {
            route: 'sam-clark-portfolio/projects',
            text: 'Projects'
        },
        {
            route: 'sam-clark-portfolio/contact',
            text: 'Contact'
        },
        {
            route: 'sam-clark-portfolio/resume',
            text: 'Resume'
        }
    ]
);
    return(
    <Box>
        <a href="#" data-target="mobile-nav" className="sidenav-trigger hide-on-large-only"><DrawerNav /></a>
        <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Box sx={{color: 'white', display:'flex', justifyContent:'center', alignItems:'center', fontSize:80, fontFamily:"monospace", p:1}}>
                    Sam Clark
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Stack spacing={4} direction="row" justifyContent="center" sx={{pt:5, px:2}} className='hide-on-med-and-down'>

                    {linkArray.map(link => (
                        <Link to={link.route} className='nav-link' key={link.text}>{link.text}</Link>
                    ))}

                </Stack>
            </Grid>
        </Grid>
    </Box> 
    );
};
    