import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "./pages/Home/Home.css";
import "./pages/ProductCart/shop.css"
import "./pages/About/about.css";
import CartProvider from "./pages/ProductCart/CartContext";
import Location from "./components/Location";
import Register from "./pages/Registration/register"
import Login from "./pages/Login/Login"
import "./pages/Registration/register.css"
import "./pages/Login/Login.css"


function App() {
  return (
    <CartProvider>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path ="/location" element = {<Location/>}> </Route>
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
