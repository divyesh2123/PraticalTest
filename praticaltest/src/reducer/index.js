import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import productReducer from "./productReducer";
import products from "./products";
import userReducer from "./userReducer";


const rootReducer = combineReducers(
    {
    conuter: counterReducer,
    product : productReducer,
    productsOldModule: products,
    userdata : userReducer
    }
)

export default rootReducer;