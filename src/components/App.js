// import logo from "./logo.svg";

import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
// import ProductPage from "../pages/ProductPage";
import Navbar from "./NavBar";
import Cart from "./Cart";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <NavMenu />
        <Cart />
        {/* <Route path="/products/:handle">
            <ProductPage />
          </Route> */}
        <Route path="/">
          <HomePage />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
