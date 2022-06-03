import { Box } from "@mui/system";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Twitter from "@mui/icons-material/Twitter";

export default function Footer() {
    return (
    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
            <a href="https://github.com/sam-clark1" target="_blank" rel='noreferrer'>
                <GitHubIcon sx={{ fontSize: 75, mr:5, color: 'white' }}/>
            </a>
            <a href="https://www.linkedin.com/in/samuel-clark-0a3836205/" target="_blank" rel='noreferrer'>
                <LinkedInIcon sx={{ fontSize: 75, mr:5, color: 'white' }}/>
            </a>
            <a href="https://twitter.com/" target="_blank" rel='noreferrer'>
                <Twitter sx={{ fontSize: 75, mr:5, color: 'white' }}/>
            </a>
        </Box>
    </Box>
    );
};