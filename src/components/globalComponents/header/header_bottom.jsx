import "../../../styles/header.css"; // Importing the header CSS file for styling the header component
import { useState } from "react"; // Importing useState hook to manage state in the component
import { Link } from "react-router-dom"; // Importing Link from React Router to enable navigation between pages

export default function Header_Bottom() {
  // Defining the Header_Bottom component
  const [Active, setActive] = useState(false); // Initializing state for menu visibility (Active or not)

  return (
    <div className="header-bottom">
      {" "}
      {/* Main container for the bottom part of the header */}
      <nav className="main-menu">
        {" "}
        {/* Navigation container that holds the menu */}
        {/* Hamburger Menu Icon for mobile view */}
        <div className="res_menu" onClick={() => setActive(!Active)}>
          {/* When the user clicks, toggle the 'Active' state, which controls the menu visibility */}
          <div></div> {/* Hamburger line 1 */}
          <div></div> {/* Hamburger line 2 */}
          <div></div> {/* Hamburger line 3 */}
        </div>
        {/* The unordered list of menu items */}
        <ul className={`menu ${Active ? "show-menu" : ""}`}>
          {/* If 'Active' state is true, add 'show-menu' class, else keep it empty */}

          {/* Close button for the mobile menu */}
          <div className="closeBtn" onClick={() => setActive(!Active)}>
            {/* Toggle the 'Active' state when the close button is clicked */}
            <div></div> {/* Close button line 1 */}
            <div></div> {/* Close button line 2 */}
          </div>

          {/* Menu Item - Home */}
          <li className="menu-item">
            <Link to="/">Home</Link>{" "}
            {/* Using Link for navigation to the Home page */}
          </li>

          {/* Menu Item - Shop */}
          <li className="menu-item">
            <a href="#">Shop</a>{" "}
            {/* Link for the Shop page (currently non-functional) */}
          </li>

          {/* Menu Item - Features */}
          <li className="menu-item">
            <a href="#">Features</a>{" "}
            {/* Link for Features page (currently non-functional) */}
          </li>

          {/* Menu Item - Electronic */}
          <li className="menu-item">
            <a href="#">Electronic</a>{" "}
            {/* Link for Electronics page (currently non-functional) */}
          </li>

          {/* Menu Item - Pages */}
          <li className="menu-item">
            <a href="#">Pages</a>{" "}
            {/* Link for Pages (currently non-functional) */}
          </li>

          {/* Menu Item - Blog */}
          <li className="menu-item">
            <a href="#">Blog</a>{" "}
            {/* Link for Blog page (currently non-functional) */}
          </li>

          {/* Menu Item - Contact */}
          <li className="menu-item">
            <a href="#">Contact</a>{" "}
            {/* Link for Contact page (currently non-functional) */}
          </li>
        </ul>{" "}
        {/* Closing the unordered list for the menu */}
      </nav>
    </div>
  );
} // Closing the Header_Bottom component
