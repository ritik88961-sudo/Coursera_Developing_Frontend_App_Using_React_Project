// Import createSlice from Redux Toolkit to create the slice
import { createSlice } from "@reduxjs/toolkit";

// Create a slice named 'products'
const productSlice = createSlice({
  name: 'products', // Name of the slice, should match the key in the store
  initialState: {
    items: [], // Initially an empty array to store products
    isLoading: false, // Boolean to track the loading state
    error: null, // To hold any error message if an error occurs
  },
  reducers: { // Reducers to handle different actions
    pushProducts(state, action) { // Push products to the 'items' array
      state.items = [...state.items, ...action.payload]; // Append the products from the action's payload
    },
    setLoading(state, action) { // Set loading state to true or false
      state.isLoading = action.payload; // Set isLoading to the value in the payload (true or false)
    },
    setError(state, action) { // Set an error message
      state.error = action.payload; // Store the error message from the payload
    },
  },
});

// Export actions so they can be dispatched in components
export const { pushProducts, setLoading, setError } = productSlice.actions;

// Export the reducer as default to be used in the store
export default productSlice.reducer;
