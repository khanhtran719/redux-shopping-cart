import React from "react";
import {
    Box,
    Container,
    Grid
} from "@mui/material";

import { products } from "../data/data";
import ItemProduct from "../components/ItemProduct"; 
const Home = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{
                flexGrow: 1,
                marginTop: 5
            }}>
                <Grid container spacing={1}>
                    {products.map(product => {
                        return (
                            <Grid item xs={6} md={3} key={product.id}>
                                <ItemProduct product={product} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </Container>
    );
}
export default Home;