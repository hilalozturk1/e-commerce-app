import { Grid, Box, Flex, Button } from "@chakra-ui/react";
import React from "react";
import Card from "../../components/Card";
import { useInfiniteQuery } from "react-query";
import { fecthProductList } from "../../api.js";

function Products() {
  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery("repoData", fecthProductList, {
      getNextPageParam: (lastGroup, allGroups) => {
        const morePagesExist = lastGroup?.length === 12;
        if (!morePagesExist) {
          return;
        }
        return allGroups.length + 1;
      },
    });
  if (status === "loading") return "Loading...";

  if (status === "error") return "An error has occurred: " + error.message;
  console.log(data);
  console.log("data", data);
  return (
    <div>
      <Grid templateColumns="repeat(5, 1fr)" gap={3}>
        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.map((item) => (
              <Box key={item._id} w="100%">
                <Card item={item}></Card>
              </Box>
            ))}
          </React.Fragment>
        ))}
      </Grid>
      <Flex mt="10" justifyContent="center">
        <Button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage} isLoading={isFetchingNextPage}>
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </Button>
      </Flex>
    </div>
  );
}

export default Products;
