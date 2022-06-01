import { Box } from '@mui/material';
import Nav from './Nav'
const Header = ({currentPage, setCurrentPage}) => {
    return (
        <Box sx={{width: 'auto',height: 250}}>
            <Nav
            currentPage = {currentPage}
            setCurrentPage = {setCurrentPage}>
            </Nav>
        </Box> 
    )
}

export default Header;