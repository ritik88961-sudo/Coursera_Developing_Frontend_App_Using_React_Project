import "../../../styles/header.css"; // Importing the CSS file for the header styling
import { useState } from "react"; // Importing useState hook for managing component states
import { useSelector, useDispatch } from "react-redux"; // Importing useSelector to access Redux store and useDispatch to dispatch actions
import { changeSymbol } from "../../../Redux/slicers/changeCurrencySymbol"; // Importing the 'changeSymbol' action from the Redux slice
import currencySymbol from "currency-symbol"; // Importing the 'currency-symbol' library to get currency symbols

export default function Header_Top() {
  // Defining the Header_Top component
  const [Hovered, setHovered] = useState(false); // State to manage hover effect on currency selection dropdown
  const [popupHovered, setPopUpHovered] = useState(false); // State to manage hover effect for the popup menu

  const currentCurrencySymbol = useSelector((state) => state.currency.symbol); // Accessing the current currency symbol from Redux store
  const dispatch = useDispatch(); // Getting dispatch function to dispatch actions to Redux store

  // Function to decode HTML entities (used to get the correct currency symbol)
  function decodeSymbolEntity(entity) {
    const p = document.createElement("span"); // Creating a temporary span element
    p.innerHTML = entity; // Setting the innerHTML of the span to the passed entity (symbol)
    return p.textContent; // Returning the decoded text content (currency symbol)
  }

  // Function to handle the currency change when a user selects a new currency
  const handleChange = (e) => {
    e.preventDefault(); // Preventing default form submission behavior
    dispatch(changeSymbol(e.target.value)); // Dispatching the changeSymbol action with the selected currency value
  };

  // Handling mouse enter event for the currency symbol
  const handleMouseEnter = () => {
    setHovered(true); // Set hovered to true when mouse enters the currency symbol
  };

  // Handling mouse leave event for the currency symbol
  const handleMouseLeave = () => {
    if (!popupHovered) {
      // Only set hovered to false if the popup is not being hovered
      setHovered(false); // Set hovered to false when mouse leaves the currency symbol
    }
  };

  // Handling mouse enter event for the popup menu
  const handlePopupMouseEnter = () => setPopUpHovered(true); // Set popupHovered to true when mouse enters the currency selection popup

  // Handling mouse leave event for the popup menu
  const handlePopupMouseLeave = () => setPopUpHovered(false); // Set popupHovered to false when mouse leaves the currency selection popup

  return (
    <header>
      {" "}
      {/* Header container */}
      <div className="header-top">
        {" "}
        {/* Main container for the top section of the header */}
        <div className="top-left">
          {" "}
          {/* Left side section containing links */}
          <a href="#" className="sup">
            {" "}
            {/* Link to support */}
            Support
          </a>
          <a href="#" className="sup">
            {" "}
            {/* Link to store locator */}
            Store Locator
          </a>
          <a href="#">Track Your Order</a> {/* Link to track order */}
        </div>
        <div className="top-middle">
          {" "}
          {/* Middle section displaying the contact number */}
          <span className="call">Call Us: </span>
          <span>
            <a href="+919999999999">(+91) 9999999999</a>{" "}
            {/* Displaying the phone number */}
          </span>
        </div>
        <div className="top-right">
          {" "}
          {/* Right side section containing currency and language selection */}
          <div className="currencyList">
            {" "}
            {/* Currency selection container */}
            <span
              onMouseEnter={handleMouseEnter} // Setting hover state to true when mouse enters the currency symbol
              onMouseLeave={handleMouseLeave} // Setting hover state to false when mouse leaves the currency symbol
            >
              {decodeSymbolEntity(currencySymbol.symbol(currentCurrencySymbol))}{" "}
              | {currentCurrencySymbol}{" "}
              {/* Displaying the current currency symbol and currency code */}
            </span>
            <div
              className={`currencyBtn ${
                Hovered || popupHovered ? "active" : "" // Adding 'active' class to show currency options when hovered
              }`}
              onMouseEnter={handlePopupMouseEnter} // Setting popupHovered to true when mouse enters the popup menu
              onMouseLeave={handlePopupMouseLeave} // Setting popupHovered to false when mouse leaves the popup menu
            >
              {/* Buttons for changing the currency */}
              <button onClick={handleChange} value="USD">
                {decodeSymbolEntity(currencySymbol.symbol("USD"))} | USD
              </button>
              <button onClick={handleChange} value="EUR">
                {decodeSymbolEntity(currencySymbol.symbol("EUR"))} | EUR
              </button>
              <button onClick={handleChange} value="Rupee">
                {decodeSymbolEntity(currencySymbol.symbol("Rupee"))} | INR
              </button>
              <button onClick={handleChange} value="GBP">
                {decodeSymbolEntity(currencySymbol.symbol("GBP"))} | GBP
              </button>
            </div>
          </div>
          <div className="language">
            {" "}
            {/* Language selection section */}
            <span>Language</span> {/* Displaying 'Language' text */}
          </div>
        </div>
      </div>
    </header>
  );
}
