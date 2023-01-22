import { Grid } from "@chakra-ui/react";
import React from "react";
import Card from "../../components/Card";
import { useQuery } from "react-query";
import { fecthProductList } from "../../api.js";

function Products() {
  const { isLoading, error, data } = useQuery("repoData", fecthProductList);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log("data", data);
  return (
    <div>
      <Grid templateColumns="repeat(5, 1fr)" gap={3}>
        {data.map((item, key) => {
          return <Card item={item} key={key} />;
        })}
      </Grid>
    </div>
  );
}

export default Products;
