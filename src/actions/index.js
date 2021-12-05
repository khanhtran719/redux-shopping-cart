import {Types} from "./Types";

export const actAddProduct = (product) => {
    return {
        type: Types.CartService.ADD_PRODUCT,
        product: product
    }
}
export const actDelProduct = (payload) => {
    return {
        type: Types.CartService.DELETE_PRODUCT,
        payload
    }
}
export const actIncreaseProduct = (payload) => {
    return {
        type: Types.CartService.INCREASE_QUATITY,
        payload
    }
}
export const actDecreaseProduct = (payload) => {
    return {
        type: Types.CartService.DECREASE_QUANTITY,
        payload
    }
}
export const actDelAllProduct = () => {
    return {
        type: Types.CartService.DELETE_ALL,
    }
}