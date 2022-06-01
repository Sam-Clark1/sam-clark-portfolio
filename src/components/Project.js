import { Box, Grow, Card } from "@mui/material"
export default function Project({currentPage, setCurrentPage}) {
    return(
        <Box>
            <Grow in={currentPage === 'projects'}>
                <Card sx={{borderColor:'white', height:100, width:100}}>
                    test1
                </Card>
            </Grow>
            <Grow in={currentPage === 'projects'} style={{ transformOrigin: '0 0 0' }} {...(currentPage === 'projects' ? { timeout: 1000 } : {})}>
                <Card sx={{borderColor:'white', height:100, width:100}}>
                    test1.0
                </Card>
            </Grow>
        </Box>
    )
}