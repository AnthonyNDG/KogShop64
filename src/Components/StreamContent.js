import { Link } from 'react-router-dom';
import {Box, Text} from '@radix-ui/themes'
import ReactPlayer from 'react-player';
import '../App.css';

function StreamContent() {
  return (
    <article>
        <Text as='p' size='8' weight='bold' style={{margin: '20px'}} >Stream Page</Text>
        <Box>
            <ReactPlayer url="twitch.tv/kog64" style={{margin:'0 auto'}} width='640px' height='360px'/>
        </Box>
    </article>
  );
}

export default StreamContent;