import React from "react";
import {
    Box,
    Typography,
    Button
} from "@mui/material";
import { useDispatch } from "react-redux";
import {actAddProduct} from "../actions/index";

const ItemProduct = ({ product }) => {
    const dispatch = useDispatch();
    return (
        <Box sx={{
            width: 280,
            textOverflow: 'ellipsis'
        }}>
            <img width="100%" src={product.img} alt="1" />
            <Typography
                fontSize={20}
                fontFamily="monospace"
                fontWeight="bold"
            >
                {product.title}
            </Typography>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Typography>
                    {product.price}
                </Typography>
                <Button
                    color="error"
                    variant="contained"
                    onClick={() => dispatch(actAddProduct(product))}
                >
                    Add to cart
                </Button>
            </Box>
        </Box>
    );
}
export default ItemProduct;