import React from "react";
import { useBasket } from "../../context/BasketContex";
import { Alert, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Basket() {
  const { items } = useBasket();
  console.log(items);
  return (
    <>
      {items.length < 1 ? (
        <Alert status="warning">You have not any items in your basket</Alert>
      ) : (
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>
              <Link to={`/product/${item._id}`}>
                {item.title} - {item.price}
                <Image htmlWidth={200} src={item.photos[0]} alt="basket item" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Basket;
