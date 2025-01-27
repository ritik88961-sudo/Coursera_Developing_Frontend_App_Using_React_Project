import { createSlice } from '@reduxjs/toolkit'; // Import createSlice function from Redux Toolkit

// Initial state for the cart, containing the list of items and the item count
const initialState = {
  items: [], // Array to store the items added to the cart
  itemCount: 0, // Counter to store the total number of items in the cart
};

// Create a slice for the cart
const cartSlice = createSlice({
  name: 'cart', // Name of the slice (cart)
  initialState, // Initial state defined above
  reducers: { // Reducers to handle actions
    addToCart: (state, action) => { // Action to add a product to the cart
      const existingProduct = state.items.find(item => item.id === action.payload.id); // Check if the product is already in the cart
      if (!existingProduct) { // If product doesn't already exist in the cart
        state.items.push(action.payload); // Add the product to the items array
        state.itemCount += 1; // Increment the item count
      }
    },
    removeFromCart: (state, action) => { // Action to remove a product from the cart
      state.items = state.items.filter(item => item.id !== action.payload); // Filter out the item with the specified id from the cart
      state.itemCount -= 1; // Decrement the item count
    },
    resetCart: (state) => { // Action to reset the cart (clear all items)
      state.items = []; // Empty the items array
      state.itemCount = 0; // Reset the item count to 0
    }
  }
});

// Exporting the actions (addToCart, removeFromCart, resetCart) so they can be dispatched
export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;

// Export the reducer to be used in the store
export default cartSlice.reducer;
