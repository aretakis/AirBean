const initialState = { order: [] };

export default function orderReducer(state = initialState, action) {
	switch (action.type) {
		case "ADD_ORDER":
			return {
				...state,
				order: [...state.order, action.payload],
			};
		default:
			return state;
	}
}
