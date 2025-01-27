import { Routes, Route, Navigate } from "react-router-dom"; // Importing necessary components for routing in React
import Products from "../components/globalComponents/product"; // Importing the Products component
import Cart from "../components/globalComponents/cart"; // Importing the Cart component
import Header from "../components/globalComponents/header/header"; // Importing the Header component

export default function Home() {
  // Home component which will serve as the main layout
  return (
    <>
      <Header />{" "}
      {/* Rendering the Header component, which will be common across pages */}
      <main>
        {" "}
        {/* Main section of the page where content will change dynamically based on routes */}
        <Routes>
          {" "}
          {/* Defining all the routes for the application */}
          {/* Default Route - Redirect to Products */}
          <Route path="/" element={<Navigate to="/products" />} />
          {/* If the user visits the root route ("/"), they will be redirected to the /products page */}
          {/* Products Page */}
          <Route path="/products" element={<Products />} />
          {/* This route displays the Products page when the user visits "/products" */}
          {/* Cart Page */}
          <Route path="/cart" element={<Cart />} />
          {/* This route displays the Cart page when the user visits "/cart" */}
        </Routes>{" "}
        {/* Closing Routes */}
      </main>
    </>
  );
} // End of the Home component
