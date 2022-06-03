import React from "react"
import { Box } from '@mui/material';
import Nav from './Nav';

export default function Header ({currentPage, setCurrentPage}) {
    return (
        <Box sx={{width: 'auto', height:'auto', mb:2}}>
            <Nav
            currentPage = {currentPage}
            setCurrentPage = {setCurrentPage}>
            </Nav>
        </Box> 
    );
};
