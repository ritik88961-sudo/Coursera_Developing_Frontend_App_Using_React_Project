import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; // Redux Provider
import store from "./Redux/stores/store"; // Redux store
import Home from "./pages/home"; // Home Page

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Home /> {/* Main Home component */}
      </Provider>
    </BrowserRouter>
  );
}

export default App;
