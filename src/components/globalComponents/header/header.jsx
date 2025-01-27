import Header_Top from "./header_top"; // Importing the Header_Top component, which contains the top section of the header
import Header_Middle from "./header_middle"; // Importing the Header_Middle component, which contains the middle section of the header
import Header_Bottom from "./header_bottom"; // Importing the Header_Bottom component, which contains the bottom section of the header

const Header = () => {
  // Defining the Header component that combines all the header sections
  return (
    <>
      {" "}
      {/* Fragment to group the components together without adding extra nodes */}
      <Header_Top /> {/* Rendering the Header_Top component */}
      <Header_Middle /> {/* Rendering the Header_Middle component */}
      <Header_Bottom /> {/* Rendering the Header_Bottom component */}
    </>
  );
};

export default Header; // Exporting the Header component to be used elsewhere in the application
