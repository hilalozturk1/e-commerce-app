import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fecthProduct } from "../../api";

function ProductDetail() {
  const { product_id } = useParams();
  const { isLoading, error, data } = useQuery(["product", product_id], () =>
    fecthProduct(product_id)
  );
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log("data", data);
  return <div>{product_id}</div>;
}

export default ProductDetail;
