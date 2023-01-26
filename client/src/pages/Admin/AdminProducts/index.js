import { useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query"; //fetch data useQuery - add, delete, update useMutation
import { fecthProductList, deleteProduct } from "../../../api";
import { Table, Popconfirm } from "antd";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function AdminProducts() {
  const { isLoading, isError, data, error } = useQuery("admin:products", fecthProductList);
  const deleteMutation = useMutation(deleteProduct);
  const queryClient = useQueryClient();

  const columns = useMemo(() => {
    return [
      { title: "Title", dataIndex: "title", key: "title" },
      { title: "Price", dataIndex: "price", key: "price" },
      { title: "Created At", dataIndex: "createdAt", key: "createdAt" },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <>
            <Link to={`/admin/products/${record._id}`}>Edit</Link>
            <Popconfirm
              title="Are you sure?"
              onConfirm={() => {
                console.log("deleted");
                deleteMutation.mutate(record._id, {
                  onSuccess: () => {
                    queryClient.invalidateQueries("admin:products");
                    console.log("success");
                  },
                });
              }}
              onCancel={() => {
                console.log("cancelled ");
              }}
              okText="Yes"
              cancelText="No"
              placement="top"
            >
              <a href="/#" style={{ marginLeft: 10 }}>
                Delete
              </a>
            </Popconfirm>
          </>
        ),
      },
    ];
  }, []);

  if (isLoading) {
    return <div>Loading..</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);
  return (
    <div>
      <Text fontSize="2xl" p="5">
        Products
      </Text>
      <Table dataSource={data} columns={columns} rowKey="_id"></Table>
    </div>
  );
}

export default AdminProducts;
