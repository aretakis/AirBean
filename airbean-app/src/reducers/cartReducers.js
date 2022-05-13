const initialState = { cart: [], totalPrice: 0, discount: 0 };

export default function cartReducer(state = initialState, action) {
	function checkIfDiscount(cart) {
		let bryggkaffe = cart.some((e) => (e.title === "Bryggkaffe"));
		let napoleon = cart.some((e) => (e.title === "Gustav Adolfsbakelse"));
		if (bryggkaffe && napoleon) {
			return 49;
		} else return 0;
	};
	switch (action.type) {
		case "UPDATE_CART_ITEM":
			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === action.payload.id
						? { ...item, count: item.count + 1 }
						: item
				),
				totalPrice: state.totalPrice + action.payload.price,
				discount: checkIfDiscount(state.cart)
			};

		case "ADD_CART_ITEM":
			return {
				...state,
				cart: [...state.cart, action.payload],
				totalPrice: state.totalPrice + action.payload.price,
				discount: checkIfDiscount(state.cart)
			};

		case "REMOVE_CART_ITEM":
			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === action.payload.id
						? { ...item, count: action.payload.count - 1 }
						: item
				),
				totalPrice: state.totalPrice - action.payload.price,
				discount: checkIfDiscount(state.cart)
			};

		case "EMPTY_CART": 
		return {
			...state, 
			cart: [],
			totalPrice: 0, 
			discount: 0
		}
		default:
			return state;
	}
}
