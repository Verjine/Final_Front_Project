// import React, { useEffect, useState } from "react";
// import { flower } from "../api/flowers";
import ProductCart from "../pages/ProductCart/ProductCart";
<<<<<<< HEAD
import {CartContext} from "../pages/ProductCart/CartContext"
import { useContext, useState } from "react";


const Products = () => {
  const cart = useContext(CartContext);

=======
import { CartContext } from "../pages/ProductCart/CartContext";
import { useContext, useState } from "react";
import { Funkcia } from "../api/flowers";

const Products = () => {
  const cart = useContext(CartContext);
  const { flower } = Funkcia();
>>>>>>> 108f0577886bab1d0ceea322abde6ee8e23312b5
  // const [flowers, setFlowers] = useState([]);
  // useEffect(() => {
  //   const url = "http://localhost:5000/flower";
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       console.log(data);
  //       setFlowers(data);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };
  //   fetchData();
  // },[]);
<<<<<<< HEAD
  console.log(cart.items)
  
=======
  console.log(flower)

>>>>>>> 108f0577886bab1d0ceea322abde6ee8e23312b5
  return (
  
    <div className="products">
      <div className="prod_box">
<<<<<<< HEAD
        {cart.flowers.map((elem, id) => (
          <div key={id}>
            <ProductCart  product={elem} />
=======
        {flower.map((elem, id) => (
          <div key={id}>
            <ProductCart product={elem} />
>>>>>>> 108f0577886bab1d0ceea322abde6ee8e23312b5
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
