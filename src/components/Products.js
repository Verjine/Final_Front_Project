import React from "react";
import { flower } from "../api/flowers";
import ProductCart from "../pages/ProductCart/ProductCart";

const Products = () => {
  return (
    <div className="products">
      {/* <h3 className='title_products'>Our Popular Furniture</h3> */}

      <div className="prod_box">
        {flower.map((elem, index) => (
          <div key={index}>
            <ProductCart product={elem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
