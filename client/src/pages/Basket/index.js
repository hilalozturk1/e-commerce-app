import React, { useRef, useState } from "react";
import { useBasket } from "../../context/BasketContex";
import {
  Alert,
  Image,
  Button,
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { postOrder } from "../../api";

function Basket() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  const [address, setAddress] = useState("");
  const { items, removeFromBasket, setItems } = useBasket();

  const handleSubmit = async () => {
    const itemIds = items.map((item) => item._id);
    const input = {
      address,
      items: JSON.stringify(itemIds),
    };
    await postOrder(input);
    setItems([]);
    onClose();
  };

  console.log(items);
  return (
    <>
      {items.length < 1 ? (
        <Alert status="warning">You have not any items in your basket</Alert>
      ) : (
        <>
          <ul>
            {items.map((item, idx) => (
              <li key={idx}>
                <Link to={`/product/${item._id}`}>
                  {item.title} - {item.price}
                  <Image htmlWidth={200} src={item.photos[0]} alt="basket item" />
                </Link>
                <Button mt="2" size="sm" colorScheme="pink" onClick={() => removeFromBasket(item)}>
                  Remove from basket
                </Button>
              </li>
            ))}
          </ul>
          <Box mt="10">
            <Text fontSize="22">Total: {items.reduce((acc, obj) => acc + obj.price, 0)}</Text>
          </Box>
          <Button mt="2" size="sm" colorScheme="green" onClick={onOpen}>
            Order
          </Button>
          <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Order</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Textarea
                    ref={initialRef}
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
}

export default Basket;
