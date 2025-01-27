import { createSlice } from "@reduxjs/toolkit"; // Import createSlice from Redux Toolkit

// Create a slice for the currency symbol
export const currencySymbolSice = createSlice({
  name: "currency", // Name of the slice (currency)
  initialState: {
    symbol: "USD", // Initial state, with the default currency symbol set to "USD"
  },
  reducers: {
    // Reducers to handle actions related to the currency symbol
    changeSymbol: (state, action) => {
      // Action to change the currency symbol
      state.symbol = action.payload; // Update the state with the new currency symbol passed in the action's payload
    },
  },
});

// Exporting the action 'changeSymbol' to be dispatched
export const { changeSymbol } = currencySymbolSice.actions;

// Export the reducer to be used in the store for updating the currency symbol state
export default currencySymbolSice.reducer;
