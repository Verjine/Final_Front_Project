import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { CartContext } from "../pages/ProductCart/CartContext";
import Modal from "./Modal";
import "./modal.css";

const Menu = () => {
  const cart = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    // <div className="menu">
    <div className="navbar">
      <h1>
        <Link to="/" className="shop">
          <span>Flower</span>Shop
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <button className="modalBtn" onClick={() => setOpenModal(true)}>
          <BsCart2 size="30px" color="FF8F52" /> {productsCount} Items
        </button>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />

</div>

   
  );
};

export default Menu;
