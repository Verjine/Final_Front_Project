import React, { useEffect, useState } from "react";
// import { flower } from "../api/flowers";
import ProductCart from "../pages/ProductCart/ProductCart";

const Products = () => {
  const [flowers, setFlowers] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/flower";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setFlowers(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  },[]);
  
  return (
    <div className="products">
      {/* <h3 className='title_products'>Our Popular Furniture</h3> */}

      <div className="prod_box">
        {flowers.map((elem) => (
          <div key={elem._id}>
            <ProductCart product={elem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
