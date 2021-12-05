import React from "react";
import {
    Box,
    Paper,
    Container,
    Typography,
    IconButton,
    Badge
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
    const appData = useSelector(state => state.Cart);

    const showBill = () => {
        return (
            <Typography
                fontFamily='monospace'
                fontSize={28}
                fontWeight='bold'
                paddingX={2}
                color="black"
            >
                {appData.bill}
            </Typography>
        );
    }

    return (
        <Paper elevation={12}>
            <Container maxWidth="lg">
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <Typography
                        paddingY={1}
                        fontFamily='monospace'
                        fontSize={36}
                        fontWeight='bold'
                    >
                        TENGU
                    </Typography>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Typography
                                fontFamily='monospace'
                                fontSize={28}
                                fontWeight='bold'
                                paddingX={2}
                                color="black"
                                sx={{
                                    ":hover": {
                                        color: "gray"
                                    }
                                }}
                            >
                                Home
                            </Typography>
                        </Link>
                        <Link to="/about" style={{ textDecoration: "none" }}>
                            <Typography
                                fontFamily='monospace'
                                fontSize={28}
                                fontWeight='bold'
                                paddingX={2}
                                color="black"
                                sx={{
                                    ":hover": {
                                        color: "gray"
                                    }
                                }}
                            >
                                About
                            </Typography>
                        </Link>
                        <Link to="/cart" style={{ display: "flex" }}>
                            <IconButton>
                                <Badge badgeContent={appData.allQuantity} color="info">
                                    <ShoppingCart fontSize="large" />
                                </Badge>
                            </IconButton>
                            {appData.bill === 0 ? "" : showBill()}
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Paper>
    );
}
export default Header;