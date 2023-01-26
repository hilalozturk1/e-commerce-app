import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fecthProduct, updateProduct } from "../../../api";
import { Formik, FieldArray } from "formik";
import { Text, Box, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import validationSchema from "./validations";
import { message } from "antd";

function AdminProductDetail() {
  const { product_id } = useParams();

  const { isLoading, isError, data, error } = useQuery(["admin:product", product_id], () =>
    fecthProduct(product_id)
  );

  if (isLoading) {
    return <div>Loading..</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  const handleSubmit = async (values, bag) => {
    console.log("submited");
    message.loading({ content: "Loading..", key: "product_update" });
    try {
      await updateProduct(values, product_id);
      message.success({
        content: "The product succesfully updated",
        key: "product_update",
        duration: 2,
      });
    } catch (error) {
      message.error("the product does not updated");
    }
  };
  console.log(data);
  return (
    <div>
      <Text fontSize="2xl"></Text>
      <Formik
        initialValues={{
          title: data.title,
          description: data.description,
          price: data.price,
          photos: data.photos,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, errors, touched, handleChange, handleBlur, values, isSubmitting }) => (
          <>
            <Box>
              <Box my="5" textAlign="left">
                <form onSubmit={handleSubmit}>
                  <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input
                      name="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      disabled={isSubmitting}
                      isInvalid={touched.title && errors.title}
                    ></Input>
                    {touched.title && errors.title && <Text color="red">{errors.title}</Text>}
                  </FormControl>
                  <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Textarea
                      name="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      disabled={isSubmitting}
                      isInvalid={touched.description && errors.description}
                    ></Textarea>
                    {touched.description && errors.description && (
                      <Text color="red">{errors.description}</Text>
                    )}
                  </FormControl>
                  <FormControl>
                    <FormLabel>Price</FormLabel>
                    <Input
                      name="price"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                      disabled={isSubmitting}
                      isInvalid={touched.price && errors.price}
                    ></Input>
                    {touched.price && errors.price && <Text color="red">{errors.price}</Text>}
                  </FormControl>
                  <FormControl mt="4">
                    <FormLabel>Photos</FormLabel>
                    <FieldArray
                      name="photos"
                      render={(arrayHelpers) => (
                        <div>
                          {values.photos &&
                            values.photos.map((photo, idx) => (
                              <div key={idx}>
                                <Input
                                  name={`photos.${idx}`}
                                  value={photo}
                                  disabled={isSubmitting}
                                  onChange={handleChange}
                                  width="3xl"
                                />
                                <Button
                                  onClick={() => arrayHelpers.remove(idx)}
                                  ml="4"
                                  colorScheme="red"
                                >
                                  Remove
                                </Button>
                              </div>
                            ))}
                          <Button mt="5" onClick={() => arrayHelpers.push("")}>
                            Add a photo
                          </Button>
                        </div>
                      )}
                    ></FieldArray>
                  </FormControl>
                  <Button mt="4" width="full" type="submit" isLoading={isSubmitting}>
                    Update
                  </Button>
                </form>
              </Box>
            </Box>
          </>
        )}
      </Formik>
    </div>
  );
}

export default AdminProductDetail;
