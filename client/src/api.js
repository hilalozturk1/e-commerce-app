import axios from "axios";

export const fecthProductList = async () => {
  const {data} = await axios.get("http://localhost:4000/product?page=1");
  return data;
};
