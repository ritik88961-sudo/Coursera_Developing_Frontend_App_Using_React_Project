// Import the configureStore function from Redux Toolkit to create the store
import { configureStore } from '@reduxjs/toolkit'

// Import the reducers from different slices
import currencySymbolReducer from '../slicers/changeCurrencySymbol' // Reducer for handling currency symbol changes
import productSliceReducer from "../slicers/productSlice" // Reducer for handling product-related data
import cartReducer from "../slicers/cartSlice" // Reducer for handling cart-related actions

// Create the Redux store using configureStore
const store = configureStore({
    reducer: { // The reducer object holds the state slices of your app
        products: productSliceReducer, // The products slice manages the product-related state
        currency: currencySymbolReducer, // The currency slice handles currency-related state
        cart: cartReducer, // The cart slice manages the cart-related state (items in the cart)
    },
});

// Export the store so it can be used in the application
export default store;
