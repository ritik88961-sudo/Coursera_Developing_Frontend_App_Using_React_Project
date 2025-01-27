import "../../../styles/card.css"; // Importing the CSS styles for the card component
import Rating from "./productRating"; // Importing the Rating component to show the product's rating
import { useSelector, useDispatch } from "react-redux"; // Importing necessary hooks from Redux to interact with the global store
import currencySymbol from "currency-symbol"; // Importing a package to handle currency symbols
import { addToCart, removeFromCart } from "../../../Redux/slicers/cartSlice"; // Importing actions to manage the cart (add/remove items)

// The Card component that displays product details
export default function Card(props) {
  const dispatch = useDispatch(); // Get the dispatch function to dispatch actions to the Redux store
  const cartItems = useSelector((state) => state.cart.items); // Accessing the cart items from the Redux store
  const productInCart = cartItems.some((item) => item.id === props.id); // Check if the current product is already in the cart

  // Function to decode currency symbols like ₹, $, €, etc.
  function decodeSymbolEntity(entity) {
    const p = document.createElement("span"); // Create a span element
    p.innerHTML = entity; // Set the inner HTML of the span element to the currency entity
    return p.textContent; // Return the text content of the span (the decoded symbol)
  }

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    if (!productInCart) {
      // Check if the product is not already in the cart
      dispatch(
        addToCart({
          // Dispatch the addToCart action with the product details
          id: props.id,
          name: props.name,
          price: props.price,
          category: props.category,
          rating: props.rating,
        })
      );
    }
  };

  // Handle removing the product from the cart
  const handleRemoveFromCart = (e) => {
    dispatch(removeFromCart(e.target.id)); // Dispatch the removeFromCart action with the product ID
  };

  const currentCurrencySymbol = useSelector((state) => state.currency.symbol); // Get the current currency symbol from the Redux store

  const handleClick = (e) => {
    console.log(e.target.id); // Log the ID of the product when the "Buy now" button is clicked
  };

  return (
    <>
      <div className="card">
        {" "}
        {/* Wrapper for the entire card component */}
        <div className="card_header">
          {" "}
          {/* Header section of the card */}
          <img
            src={`images/products/${props.category}/${props.name}.jpeg`} // Image path based on category and product name
            alt={props.name} // Alt text for the image
          />
          <h3>{props.category}</h3> {/* Display product category */}
        </div>
        <div className="card_middle">
          {" "}
          {/* Middle section of the card */}
          <h2>{props.name}</h2> {/* Display product name */}
          <p>{props.about}</p> {/* Display product description */}
          <h3>
            {decodeSymbolEntity(currencySymbol.symbol(currentCurrencySymbol))}{" "}
            {props.price}{" "}
            {/* Display the price of the product with the correct currency symbol */}
          </h3>
          <Rating rating={props.rating} />{" "}
          {/* Display product rating using the Rating component */}
        </div>
        <div className="card_footer">
          {" "}
          {/* Footer section of the card */}
          <button className="buy_now" id={props.id} onClick={handleClick}>
            {" "}
            {/* Button for buying the product */}
            Buy now
          </button>
          <button
            className="add_to_cart" // Button for adding/removing product to/from the cart
            id={props.id}
            onClick={productInCart ? handleRemoveFromCart : handleAddToCart} // Toggle between adding/removing from cart based on product presence
          >
            {productInCart ? "Remove" : "Add to Cart"}{" "}
            {/* Change button text based on if the product is in the cart */}
          </button>
        </div>
      </div>
    </>
  );
}
