import { Text, Grid, Link } from '@radix-ui/themes'
import '../Styles/Shop.css';

function Error() {

  return (
    <article>
        <Text as='p' size='8' weight='bold' style={{margin: '20px'}} >Missing Page?</Text>
        <img src='https://cdn.pixabay.com/photo/2021/04/21/10/17/meme-6195988_960_720.png' height='450px' alt='sus'/>
        <Text as='p' size='4' style={{margin: '20px'}}>This pages seems to be either non-existent or in the works at the moment :)</Text>

    </article>
  );
}

export default Error;