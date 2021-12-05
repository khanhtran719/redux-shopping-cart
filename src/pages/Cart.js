import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from '@mui/icons-material/Add';

import { useSelector, useDispatch } from "react-redux";
import {
    actDecreaseProduct,
    actDelAllProduct,
    actDelProduct,
    actIncreaseProduct
} from "../actions/index";
// import { products } from "../data/data";

const Cart = () => {
    const dispatch = useDispatch();
    const appData = useSelector(state => state.Cart);
    return (
        <Box m={0} p={0} mt={1}>
            <Box position="relative" width="100%" height="150px" bgcolor="lavender">
                <Container maxWidth="lg">
                    <Box
                        position="absolute"
                        bottom="32px"
                        fontSize="32px"
                        fontWeight="500"
                    >
                        Giỏ hàng của bạn
                    </Box>
                </Container>
            </Box>
            <Container maxWidth="lg">
                <Box sx={{ border: "1px solid lightgray" }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Ảnh sản phẩm</TableCell>
                                <TableCell align="center">Tên sản phẩm</TableCell>
                                <TableCell align="center">Đơn giá</TableCell>
                                <TableCell align="center">Số lượng</TableCell>
                                <TableCell align="center">Thành tiền</TableCell>
                                <TableCell align="center">Xóa</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {appData.items.map((product, key) => {
                                return (
                                    <TableRow
                                        key={product.id}
                                    // sx={{ '&:last-child, &:last-child': { border: 0 } }}
                                    >
                                        <TableCell align="center">
                                            <img width="100px" src={product.img} alt="1" />
                                        </TableCell>
                                        <TableCell align="center">{product.title}</TableCell>
                                        <TableCell align="center">{product.price}đ</TableCell>
                                        <TableCell align="center">
                                            <Box display="flex" justifyContent="center">
                                                <IconButton
                                                    aria-label="decrease"
                                                    size="small"
                                                    onClick={() => dispatch(actDecreaseProduct(key))}
                                                >
                                                    <RemoveIcon />
                                                </IconButton>
                                                <Box p={1}>{product.quantity}</Box>
                                                <IconButton aria-label="increase" size="small" onClick={() => dispatch(actIncreaseProduct(key))}>
                                                    <AddIcon />
                                                </IconButton>
                                            </Box>
                                        </TableCell>
                                        <TableCell align="center">{product.price * product.quantity}đ</TableCell>
                                        <TableCell align="center">
                                            <IconButton aria-label="delete" onClick={() => dispatch(actDelProduct(key))}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Box>
                <Box mt={3} display="flex" justifyContent="space-between">
                    <Box></Box>
                    <Box>
                        <Button
                            sx={{width: 1}}
                            color="error"
                            variant="contained"
                            onClick={() => dispatch(actDelAllProduct())}
                        >
                            Clear All
                        </Button>
                        <Box display="flex" mt={4} >
                            <Box
                                fontSize="22px"
                                fontWeight="Bold"
                                fontFamily="Tahoma"
                            >
                                Tổng đơn hàng
                            </Box>
                            <Box
                                ml={3}
                                fontSize="22px"
                                fontWeight="500"
                                fontFamily="Tahoma"
                            >
                                {appData.bill} đ
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
export default Cart;