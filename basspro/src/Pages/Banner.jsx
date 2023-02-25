import { useState } from "react";
import {
  Box,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$19.99",
    category: "Category A",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$29.99",
    category: "Category A",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$39.99",
    category: "Category B",
  },
  {
    id: 4,
    name: "Product 4",
    price: "$49.99",
    category: "Category B",
  },
];

const Product = ({ product }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Heading size="md">{product.name}</Heading>
      <Text fontSize="lg">{product.price}</Text>
      <Text>{product.category}</Text>
    </Box>
  );
};

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || product.category === selectedCategory)
  );

  return (
    <HStack spacing={8} alignItems="flex-start">
      <Box w={300}>
        <Stack spacing={4}>
          <Heading size="md">Filters</Heading>
          <Input
            placeholder="Search products"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <VStack align="flex-start" spacing={2}>
            <Heading size="sm">Categories</Heading>
            <Text
              onClick={() => setSelectedCategory("")}
              cursor="pointer"
              fontWeight={selectedCategory === "" ? "bold" : "normal"}
            >
              All categories
            </Text>
            <Text
              onClick={() => setSelectedCategory("Category A")}
              cursor="pointer"
              fontWeight={selectedCategory === "Category A" ? "bold" : "normal"}
            >
              Category A
            </Text>
            <Text
              onClick={() => setSelectedCategory("Category B")}
              cursor="pointer"
              fontWeight={selectedCategory === "Category B" ? "bold" : "normal"}
            >
              Category B
            </Text>
          </VStack>
        </Stack>
      </Box>
      <VStack spacing={8} align="stretch">
        <Heading size="md">Products</Heading>
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </VStack>
    </HStack>
  );
};

export default ProductPage;
