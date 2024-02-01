import React, { useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import { Box, Button, TextField, Typography } from "@mui/material";

const AddProducts = () => {
  const { addProduct } = useProducts();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    img: "",
  });
  const handleInput = (e) => {
    console.log(e.target.name);
    if (e.target.name === "price") {
      const obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      const obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  };
  const handleClick = () => {
    addProduct(product);
  };
  return (
    <div>
      <Box
        sx={{
          width: "100vh",
          height: 500,
          margin: "20px auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" align="center">
          ADMIN PAGE
        </Typography>
        <TextField
          onChange={handleInput}
          fullWidth
          name="title"
          label="Title"
          variant="outlined"
        />
        <TextField
          onChange={handleInput}
          fullWidth
          name="description"
          label="Description"
          variant="outlined"
        />
        <TextField
          onChange={handleInput}
          fullWidth
          name="Price"
          label="Price"
          variant="outlined"
        />
        <TextField
          onChange={handleInput}
          fullWidth
          name="Image"
          label="Image URL"
          variant="outlined"
        />
        <Button onClick={handleClick}>ADD PRODUCT</Button>
      </Box>
    </div>
  );
};

export default AddProducts;
