import { Grid, Box, Text, Link } from '@radix-ui/themes';
import ReactPlayer from 'react-player'
import './App.css';

function App() {
  return (
    
    <article>
      <section style={{marginTop:'30px'}}>
      <Text as='p' size="8" weight="bold" >Welcome to Kog64's Official Webpage! </Text>
      <Text as='p' size='5' style={{margin: '0 auto', width: '50%', marginTop: '20px'}}>
      This webpage serves the purpose to connect both the widget shop and the twitch community. Here, you'll find all things for Content
      within gaming and all things widgets from iPhone Notifications and more!
      </Text>
      </section>
      <Grid className='Grid' gap='9' columns={{md: '2', xs: '1'}} >
        <Link className='GridSection' underline='none' href='/stream' style={{color:'black'}}>
          <img src='https://t4.ftcdn.net/jpg/05/17/53/57/360_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg' alt='StreamImage' />
          <section className='GridSectionCaption'>
          <Text as='p' size="6" weight="bold"> Stream Content Here </Text>
          <Text as='p' size='4'>Click here to see everything in action</Text>
          </section>
        </Link>
          <Link color='pink' className='GridSection' underline='none' href='/shop' style={{color:'black'}}>
            <img src='https://t4.ftcdn.net/jpg/05/17/53/57/360_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg' alt='StreamImage' />
            <section className='GridSectionCaption'>
            <Text as='p' size='6' weight='bold'>
              KogShop 64
            </Text>
            <Text as='p' size='4'>
              Take a look at all of our widgets in the shop!
            </Text>
            </section>
          </Link>
      </Grid>

      
      
    </article>
  );
}

export default App;
