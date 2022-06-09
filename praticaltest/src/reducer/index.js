import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import loginReucer from "./loginReucer";
import productReducer from "./productReducer";
import products from "./products";
import registrationReducer from "./registrationReducer";
import userReducer from "./userReducer";


const rootReducer = combineReducers(
    {
    conuter: counterReducer,
    product : productReducer,
    productsOldModule: products,
    userdata : userReducer,
    registration:registrationReducer,
    loginData: loginReucer
    }
)

export default rootReducer;