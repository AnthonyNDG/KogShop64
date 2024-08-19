import { Text, Grid, Box, Button } from "@radix-ui/themes";
import ShopItems from "../ShopItems.json";
import { Link } from "react-router-dom";
import "../Styles/Shop.css";

function Shop(props) {
  const itemID = window.location.href.split("/");
  console.log(itemID[itemID.length - 1]);
  console.log(typeof itemID[itemID.length - 1]);
  const item = ShopItems.filter(
    (items) => items.id == itemID[itemID.length - 1]
  )[0];
  if (item === undefined) {
    return (
      <article>
        <Text as="p" size="8" weight="bold" style={{ margin: "20px" }}>
          Item Not Found
        </Text>
        <Text as="p" size="6">
          It seems that this webpage does not have the item you are looking for.
          Check the ID of the item to see if it's in the list
        </Text>
      </article>
    );
  }
  return (
    <article>
      {/* <Text as='p' size='8' weight='bold' style={{margin: '20px'}} >{item.name}</Text> */}

      <Grid
        className="ShopItemGrid"
        style={{ margin: "30px" }}
        columns={{ sm: "1", md: "2", lg: "2" }}
        justify="center"
        gap="9"
      >
        <Box>
          <img
            src="https://t4.ftcdn.net/jpg/05/17/53/57/360_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg"
            style={{ minWidth: "300px" }}
            width="75%"
            alt="sus"
          />
        </Box>
        <Box>
          <section style={{ textAlign: "left" }}>
            <Text as="p" size="8" weight="bold" style={{ margin: "10px" }}>
              {item.name}
            </Text>
            <Text
              as="p"
              size="5"
              weight="light"
              style={{ margin: "10px", fontStyle: "italic" }}
            >
              {item.type}
            </Text>
            <Text as="p" size="7" weight="bold">
              ${item.price}
            </Text>
            <Text as="p" size="6">
              {item.desc}
            </Text>
            <Box style={{ marginTop: "30px" }}>
              <Link to={item.link}>
                <Button size="3" style={{ backgroundColor: "hotpink" }}>
                  Buy Now
                </Button>
              </Link>
            </Box>
          </section>
        </Box>
      </Grid>
    </article>
  );
}

export default Shop;
