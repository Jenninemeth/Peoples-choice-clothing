export const addItemToCart = (cartItems, cartItemToAdd) => {
    //checks for same item before adding to cart
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id 
    );
    //if there is the same item in cart, rerender new cart with + 1 to item quanity 
    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
            )
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id 
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
};