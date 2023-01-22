import axios from "axios";
export const fecthProductList = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/product?page=1`);
  return data;
};

export const fecthProduct = async (product_id) => {
  const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/product/${product_id}`);
  return data;
};
