import { combineReducers } from "redux";
import {cartReducer} from "./CartReducer";

 export const appReducer = combineReducers({
     Cart: cartReducer,
 });