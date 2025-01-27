import { useEffect } from "react"; // Import useEffect hook for running code on component mount
import { useDispatch, useSelector } from "react-redux"; // Import hooks to interact with Redux store
import {
  pushProducts, // Action to push products to the Redux store
  setLoading, // Action to set loading state
  setError, // Action to set error state
} from "../../Redux/slicers/productSlice"; // Import actions from the productSlice
import Card from "./pages_components/card"; // Import the Card component to display each product

export default function Products() {
  // Define the Products component
  const product = useSelector((state) => state.products.items); // Retrieve the list of products from the Redux store
  const dispatch = useDispatch(); // Get the dispatch function to send actions to Redux store

  const fetchProducts = async () => {
    // Function to fetch products from the server
    if (product.length > 0) return; // If products are already in the store, don't fetch again
    dispatch(setLoading(true)); // Start loading (show loading spinner/message)
    try {
      const response = await fetch("/data/products/data.json"); // Fetch product data from the JSON file
      if (!response.ok) {
        // Check if the response is successful
        dispatch(setLoading(false)); // Stop loading if response is not successful
        dispatch(setError(response.status)); // Dispatch error action with the response status
        return null; // Exit if there is an error
      }
      const result = await response.json(); // Parse the JSON response
      if (Array.isArray(result)) {
        // Check if the result is an array
        console.log("Dispatching... "); // Log a message in the console
        dispatch(pushProducts(result)); // Dispatch action to push products to Redux store
      } else {
        console.error("Data is not an array!"); // Log error if the result is not an array
      }
    } catch (error) {
      dispatch(setError(error.message)); // Dispatch error action with the error message
      dispatch(setLoading(false)); // Stop loading if there is an error
    } finally {
      dispatch(setLoading(false)); // Stop loading after the fetch is complete (either success or failure)
    }
  };

  // useEffect hook runs only once when the component mounts
  useEffect(() => {
    if (!product.length) {
      // If there are no products in the store
      fetchProducts(); // Call fetchProducts to load products
    }
  }, [dispatch]); // Empty dependency array, so it runs only once

  return (
    <>
      <div className="card_container">
        {" "}
        {/* Container for displaying product cards */}
        {product.length > 0 ? ( // Check if there are products in the store
          product.map(
            (
              ele,
              key // Map through the products array to display each product
            ) => (
              <Card
                key={key} // Set a unique key for each Card component
                category={ele.Category} // Pass the category of the product to the Card component
                name={ele.Name} // Pass the name of the product to the Card component
                price={ele.Price} // Pass the price of the product to the Card component
                about={ele.About} // Pass the description of the product to the Card component
                id={ele.ID} // Pass the ID of the product to the Card component
                rating={ele.Rating} // Pass the rating of the product to the Card component
              />
            )
          )
        ) : (
          <p>Loading...</p> // Show a loading message while the products are being fetched
        )}
      </div>
    </>
  );
}
