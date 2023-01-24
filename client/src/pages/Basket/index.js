import React from "react";
import { useBasket } from "../../context/BasketContex";
import { Alert, Image, Button, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Basket() {
  const { items, removeFromBasket } = useBasket();
  console.log(items);
  return (
    <>
      {items.length < 1 ? (
        <Alert status="warning">You have not any items in your basket</Alert>
      ) : (
        <>
          <ul>
            {items.map((item, idx) => (
              <li key={idx}>
                <Link to={`/product/${item._id}`}>
                  {item.title} - {item.price}
                  <Image htmlWidth={200} src={item.photos[0]} alt="basket item" />
                </Link>
                <Button mt="2" size="sm" colorScheme="pink" onClick={() => removeFromBasket(item)}>
                  Remove from basket
                </Button>
              </li>
            ))}
          </ul>
          <Box mt="10">
            <Text fontSize="22">Total: {items.reduce((acc, obj) => acc + obj.price, 0)}</Text>
          </Box>
        </>
      )}
    </>
  );
}

export default Basket;
