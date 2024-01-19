import Header from "./components/Header";
import Body from "./components/Body";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
import Offers from "./components/Offers";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

function App() {
  return (
    <div className="flex flex-col ">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} errorElement={<Error />} />
          <Route path="/about" element={<About />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
