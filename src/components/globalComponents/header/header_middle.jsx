import "../../../styles/header.css"; // Importing the CSS file for the header styling
import logo from "/images/logo.png"; // Importing the logo image for the header
import { Link } from "react-router-dom"; // Importing 'Link' from React Router to enable navigation

// Importing icon components from 'react-icons/fi' for user and cart icons
import {
  FiShoppingCart,
  FiUser,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

// Importing necessary hooks from React and Redux
import { useState } from "react"; // Importing useState hook for managing component states
import { useSelector } from "react-redux"; // Importing useSelector hook to access Redux store

export default function Header_Middle() {
  // Defining the Header_Middle component
  const cartItems = useSelector((state) => state.cart.itemCount); // Accessing the number of items in the cart from the Redux store
  const [Hovered, setHovered] = useState(false); // State to manage hover effect on category dropdown
  const [popupHovered, setPopUpHovered] = useState(false); // State to manage hover effect for the popup menu

  // Handling mouse enter event for categories
  const handleMouseEnter = () => {
    setHovered(true); // Set hovered to true when mouse enters the category dropdown
  };

  // Handling mouse leave event for categories
  const handleMouseLeave = () => {
    if (!popupHovered) {
      // Only set hovered to false if the popup is not being hovered
      setHovered(false); // Set hovered to false when mouse leaves the category dropdown
    }
  };

  // Handling mouse enter event for the popup menu
  const handlePopupMouseEnter = () => setPopUpHovered(true); // Set popupHovered to true when mouse enters the popup menu

  // Handling mouse leave event for the popup menu
  const handlePopupMouseLeave = () => setPopUpHovered(false); // Set popupHovered to false when mouse leaves the popup menu

  return (
    <div className="header-middle">
      {" "}
      {/* Main container for the middle section of the header */}
      <div className="logo-container">
        {" "}
        {/* Container for the logo */}
        <img src={logo} alt="Logo" /> {/* Displaying the logo image */}
      </div>
      <div className="search-bar">
        {" "}
        {/* Container for the search bar */}
        <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Categories {/* Displaying the 'Categories' text */}
          {Hovered || popupHovered ? <FiChevronUp /> : <FiChevronDown />}{" "}
          {/* Toggle the arrow icon based on hover states */}
        </span>
        {/* Dropdown menu for categories */}
        <div
          className={`category_list ${Hovered || popupHovered ? "active" : ""}`} // Toggle 'active' class to show/hide the dropdown
          onMouseEnter={handlePopupMouseEnter} // Set popupHovered to true when mouse enters the category list
          onMouseLeave={handlePopupMouseLeave} // Set popupHovered to false when mouse leaves the category list
        >
          <ul>
            <li>Smartphones</li> {/* List item for Smartphones category */}
            <li>Laptops</li> {/* List item for Laptops category */}
            <li>Headphones</li> {/* List item for Headphones category */}
            <li>Smartwatches</li> {/* List item for Smartwatches category */}
            <li>Cameras</li> {/* List item for Cameras category */}
            <li>Tablets</li> {/* List item for Tablets category */}
            <li>Home Appliances</li>{" "}
            {/* List item for Home Appliances category */}
            <li>Wearables</li> {/* List item for Wearables category */}
            <li>Smart Home</li> {/* List item for Smart Home category */}
            <li>Televisions</li> {/* List item for Televisions category */}
            <li>Gaming Consoles</li>{" "}
            {/* List item for Gaming Consoles category */}
          </ul>
        </div>
        {/* Search input field */}
        <input type="text" placeholder="Search what you looking for..." />{" "}
        {/* Placeholder text in the input field */}
        <button>Search</button> {/* Search button */}
      </div>
      <div className="user-icons cart-icon">
        {" "}
        {/* Container for user and cart icons */}
        <a href="#">
          {" "}
          {/* Link for user profile */}
          <FiUser size={50} color="black" /> {/* Displaying the user icon */}
        </a>
        {/* Link to the cart page */}
        <Link to="/cart">
          <FiShoppingCart size={50} color="black" />{" "}
          {/* Displaying the shopping cart icon */}
          <span className="cart_count">{cartItems}</span>{" "}
          {/* Displaying the number of items in the cart */}
        </Link>
      </div>
    </div>
  );
}
