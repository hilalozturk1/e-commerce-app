import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fecthProduct } from "../../api";
import { Box, Button, Text } from "@chakra-ui/react";
import moment from "moment";
import ImageGallery from "react-image-gallery";
import { useBasket } from "../../context/BasketContex";

function ProductDetail() {
  const { addToBasket, items } = useBasket();

  const { product_id } = useParams();
  const { isLoading, error, data } = useQuery(["product", product_id], () =>
    fecthProduct(product_id)
  );
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log("data", data);

  const findBasketItem = items.find((item) => item._id === product_id);

  const images = data.photos.map((item) => {
    return { original: item };
  });

  console.log(images);
  return (
    <div>
      <Button
        colorScheme={findBasketItem ? "pink" : "green"}
        onClick={() => addToBasket(data, findBasketItem)}
      >
        {findBasketItem ? "Remove from basket" : "Add to basket"}
      </Button>
      <Text as="h2" fontSize="2xl">
        {data.title}
      </Text>
      <Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Text>
      <p>{data.description}</p>
      <Box margin="10px">
        <ImageGallery items={images} />
      </Box>
    </div>
  );
}

export default ProductDetail;
