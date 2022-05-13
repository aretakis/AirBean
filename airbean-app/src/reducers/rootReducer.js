import { combineReducers } from "redux";
import cartReducer from "./cartReducers";
import orderReducer from "./orderReducers";

const rootReducer = combineReducers({
	cart: cartReducer,
	order: orderReducer
});

export default rootReducer;
