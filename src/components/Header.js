import { Box } from '@mui/material';
import Nav from './Nav'
const Header = () => {
    return (
        <header>
            <Box sx={{width: 'auto',height: 250}}>
                <Nav></Nav>
            </Box>
        </header>
    )
}

export default Header;