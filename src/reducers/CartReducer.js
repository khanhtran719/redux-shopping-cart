import { Types } from "../actions/Types";

const initialState = {
    items: [],
    allQuantity: 0,
    bill: 0
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CartService.ADD_PRODUCT:
            let idx = -1;
            idx = state.items.findIndex(item => item.id === action.product.id);
            if (idx === -1) {
                state.items.push({ ...action.product, quantity: 1 })
            }
            else {
                state.items[idx].quantity++;
            }
            return {
                ...state,
                allQuantity: state.allQuantity+1,
                bill: state.bill + action.product.price,    
            }
        case Types.CartService.DELETE_PRODUCT:
            let _quantity = state.items[action.payload].quantity;
            return {
                ...state,
                bill: state.bill - state.items[action.payload].price * _quantity,
                allQuantity: state.allQuantity - _quantity,
                items: state.items.filter((item, key) => key !== action.payload)
            }
        case Types.CartService.INCREASE_QUATITY:
            state.allQuantity++;
            state.items[action.payload].quantity++;
            state.bill = state.bill + state.items[action.payload].price;
            return {
                ...state
            }
        case Types.CartService.DECREASE_QUANTITY:
            if (state.items[action.payload].quantity > 1) {
                state.allQuantity--;
                state.items[action.payload].quantity--;
                state.bill = state.bill - state.items[action.payload].price;
            }
            return {
                ...state
            }
        case Types.CartService.DELETE_ALL:
            return {
                items: [],
                allQuantity: 0,
                bill: 0
            }
        default:
            return state;
    }
}