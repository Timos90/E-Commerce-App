import { createSlice } from '@reduxjs/toolkit';
/* @reduxjs/toolkit and react-redux are already provided in the package.json file, so no need to install here*/
const initialState = {
    cartItems: [],
  };

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) { // This reducer function handles the action of adding an item to the cart.It takes two parameters: state (current state of the slice) and action (the dispatched action containing the payload)
            const existingItem = state.cartItems.find(item => item.id === action.payload.id); // It first checks if the item already exists in the cart by searching for its ID within state.cartItems.
            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              state.cartItems.push({ ...action.payload, quantity: 1 }); // if the item doesn't exist in the cart, it adds the item to the cartItems array with a quantity of 1.
            }
        },
        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload); // It updates the cartItems array by filtering out the item with the ID provided in the action payload.
        },
        clearCart(state) {
            state.cartItems = [];
        },
        increaseItemQuantity(state, action) {
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload); // It finds the item in the shopping cart whose identifier (id) matches the identifier passed in the action payload.
            if (itemToIncrease) {      // If the item is found (itemToIncrease is not undefined), it increments the quantity property of that item by 1.
              itemToIncrease.quantity += 1;
            }
        },
        decreaseItemQuantity(state, action) {
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToDecrease && itemToDecrease.quantity > 1) {
              itemToDecrease.quantity -= 1;
            }
        },
    }
});
export const {
addItemToCart,
removeItemFromCart,
clearCart,
increaseItemQuantity,
decreaseItemQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;
