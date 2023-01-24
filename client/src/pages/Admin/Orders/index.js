import React from "react";
import { useQuery } from "react-query";
import { fecthOrders } from "../../../api";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

function Orders() {
  const { isLoading, isError, data, error } = useQuery("admin:orders", fecthOrders);
  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  console.log("data: ", data);
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>User</Th>
            <Th>Address</Th>
            <Th isNumeric>Items</Th>
          </Tr>
        </Thead>
        <Tbody>
          {" "}
          {data.map((item) => (
            <Tr key={item._id}>
              <Td>{item.user.email}</Td>
              <Td>{item.adress}</Td>
              <Td isNumeric>{item.items.length}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
export default Orders;
