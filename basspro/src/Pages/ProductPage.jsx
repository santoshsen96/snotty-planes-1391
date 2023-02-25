import { useState,useEffect } from "react";
import {
  Box,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
  Checkbox,
  Grid,
  Button,
} from "@chakra-ui/react";

const productsk = [
  {
    id: 1,
    name: "Product 1",
    image:  "https://assets.ajio.com/medias/sys_master/root/20210316/OCHb/604faff7f997dd5c401154cb/-473Wx593H-460789301-blue-MODEL.jpg",
    category: "Category A",
    price:"$45.99"
   
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
  {id: 5,
    name: "Product 1",
    price: "$19.99",
    category: "Category A",
   
  },
  {
    id: 6,
    name: "Product 2",
    price: "$29.99",
    category: "Category A",
  },
  {
    id: 7,
    name: "Product 3",
    price: "$39.99",
    category: "Category B",
  },
  {
    id: 8,
    name: "Product 4",
    price: "$49.99",
    category: "Category B",
  },
];
const Product = ({ products }) => {
  ProductPage()
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      {/* <Heading size="md">{products.name}</Heading> */}
      <Text fontSize="lg">{products.price}</Text>
      {/* <Text>{products.category}</Text> */}
      <Button marginTop={5}>ADD</Button>
    </Box>
  );
};



const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://63ca6469f36cbbdfc7574d92.mockapi.io/seeJio/seeJio");
      const data = await response.json();
      setProducts(data);
      console.log(data)
    };
    fetchProducts();
  }, []);



  const filteredProducts = products.filter(
    (products) =>
      products.name &&
      (selectedCategory === "" || products.category === selectedCategory)
  );

  return (
    <HStack spacing={8} alignItems="flex-start" marginTop={150}>
      <Box w={300} marginLeft={4}>
        <Stack spacing={4}>
          <Heading size="md">Filters</Heading>
          <Input
            placeholder="Search products"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <VStack align="flex-start" spacing={2}>
            <Heading size="sm">Categories</Heading>
            <Checkbox/>
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
      <Grid gridTemplateColumns="repeat(4,1fr)" columnGap={100} rowGap={55} width="70%">
        {/* <Heading  marginTop={100}>Products</Heading> */}
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>
    </HStack>
  );
};

export default ProductPage;
