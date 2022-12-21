// import React, { useEffect, useState } from "react";
// import { flower } from "../api/flowers";
import ProductCart from "../pages/ProductCart/ProductCart";
import { CartContext } from "../pages/ProductCart/CartContext";
import { useContext, useState } from "react";
import { Funkcia } from "../api/flowers";

const Products = () => {
  const cart = useContext(CartContext);
  const { flower } = Funkcia();
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
  console.log(flower)

  return (
    <div className="products">
      <div className="prod_box">
        {flower.map((elem, id) => (
          <div key={id}>
            <ProductCart product={elem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
