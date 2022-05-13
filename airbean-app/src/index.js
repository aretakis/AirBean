import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Menu from "./menu/Menu";
import Cart from "./cart/Cart";
import Status from "./status/Status";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="" element={<App />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/status" element={<Status />} />
				</Routes>
			</Router>
		</Provider>
	</React.StrictMode>
);
