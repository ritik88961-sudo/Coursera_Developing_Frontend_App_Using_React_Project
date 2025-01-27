import { useDispatch, useSelector } from "react-redux"; // Import hooks to access Redux store and dispatch actions
import { removeFromCart } from "../../Redux/slicers/cartSlice"; // Import the action to remove an item from the cart
import Card from "./pages_components/card"; // Import the Card component to display cart items
import "../../styles/card.css"; // Import CSS for card styling
import { useNavigate } from "react-router-dom"; // Import the hook to navigate between pages
import "../../styles/cart.css"; // Import CSS for the cart page styling

export default function Cart() {
  // Define the Cart component
  const cartItems = useSelector((state) => state.cart.items); // Access the items in the cart from Redux store
  const dispatch = useDispatch(); // Get the dispatch function to dispatch actions to the Redux store
  const navigate = useNavigate(); // Initialize the navigate function to move between pages

  const handleRemoveItem = (id) => {
    // Define the function to remove an item from the cart
    dispatch(removeFromCart(id)); // Dispatch the action to remove the item with the given id from the cart
  };

  const handleGoToShop = () => {
    // Define the function to navigate to the shop page
    navigate("/products"); // Navigate to the /products page
  };

  return (
    <div className="cart_container" style={{ textAlign: "center" }}>
      {" "}
      {/* Main container for the cart page */}
      <h2>Shopping Cart</h2> {/* Display the title of the cart page */}
      {/* Check if the cart is empty */}
      {cartItems.length === 0 ? (
        <div className="empty_cart">
          {" "}
          {/* If the cart is empty, show this section */}
          <p>Your cart is empty.</p>{" "}
          {/* Inform the user that the cart is empty */}
          <button onClick={handleGoToShop}>Go to Shop</button>{" "}
          {/* Button to navigate to the shop */}
        </div>
      ) : (
        <div className="card_container">
          {" "}
          {/* If there are items in the cart, display them */}
          {cartItems.map(
            (
              item // Iterate over the cart items
            ) => (
              <Card
                key={item.id} // Set a unique key for each item in the cart
                id={item.id} // Pass the item id as a prop to the Card component
                name={item.name} // Pass the item name as a prop to the Card component
                category={item.category} // Pass the item category as a prop to the Card component
                price={item.price} // Pass the item price as a prop to the Card component
                rating={item.rating} // Pass the item rating as a prop to the Card component
              >
                <button onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>{" "}
                {/* Button to remove an item from the cart */}
              </Card>
            )
          )}
        </div>
      )}
      {/* Show the checkout button if there are items in the cart */}
      {cartItems.length !== 0 ? (
        <button className="checkout-btn">Checkout</button>
      ) : (
        ""
      )}
    </div>
  );
}
