import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { BsPersonFill } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
=======
import { BsCart2 } from "react-icons/bs";
import { CartContext } from "../pages/ProductCart/CartContext";
import Modal from "./Modal";
import "./modal.css";
>>>>>>> 108f0577886bab1d0ceea322abde6ee8e23312b5

const Menu = () => {
  const cart = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);

<<<<<<< HEAD
const Menu = () => {
  const username = localStorage.getItem("username");
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  const token = localStorage.getItem("token");
  //   const [username , setUsername] = useState("")

  //   if (localdata != null &&  localdata.length > 0)
  // {
  //   setUsername(localdata)

  // }
  // console.log(localdata, 1245)
=======
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
>>>>>>> 108f0577886bab1d0ceea322abde6ee8e23312b5

  return (
<<<<<<< HEAD
    <>
      <div className="navbar">
        <h1>
          {" "}
          <Link to="/" className="shop">
            {" "}
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

        <div className="icons">
          {token ? (
            <div className="icons_hide">
              <div className="username">{username}</div>
              <Link to="/" onClick={logout}>
                <CiLogout size="25px" color="FF8F52" />
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/register">
                <BsPersonFill size="25px" color="FF8F52" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
=======
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

   
>>>>>>> 108f0577886bab1d0ceea322abde6ee8e23312b5
  );
};

export default Menu;
