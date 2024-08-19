import { Text, Grid, Link } from '@radix-ui/themes'
import ShopItems from '../ShopItems.json'
import '../Styles/Shop.css';

function Shop() {

  return (
    <article>
        <Text as='p' size='8' weight='bold' style={{margin: '20px'}} >KogShop 64</Text>
        <Text as='p' size='4' style={{margin: '20px'}}>Take a look at our shop and find what captures your eye</Text>
        <Grid className='Grid' style={{marginBottom:'30px'}} columns={{xs:'1',sm:'2', lg:'3'}} gap='9'>
            {
                ShopItems.map( (ShopItem, key) => (
                    <Link underline='none' href={'/shop/'+key} className='ShopItem' key={key}>
                        <img src='https://t4.ftcdn.net/jpg/05/17/53/57/360_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg' height='300px' width='100%' alt='ShopImage' />
                        <section className='ShopItemDetail'>
                        <Text as='p' size='6' weight='bold'>{ShopItem.name}</Text>
                        <Text>{ShopItem.desc}</Text>
                        <Text as='p' size='5' weight='bold'>${ShopItem.price}.00</Text>
                        </section>
                    </Link>
                ))
            }
        </Grid>
    </article>
  );
}

export default Shop;