export const addCartItem = (cartItem) => ({
    type: 'ADD_CART_ITEM', 
    payload: cartItem
})

export const updateCartItem = (cartItem) => ({
    type: 'UPDATE_CART_ITEM', 
    payload: cartItem
})

export const addCart = (cart) => ({
    type: 'ADD_CART', 
    payload: cart
})

export const emptyCart = () => ({
    type: 'EMPTY_CART'
})


export const removeCartItem = (cartItem) => ({
    type: 'REMOVE_CART_ITEM', 
    payload: cartItem
})
