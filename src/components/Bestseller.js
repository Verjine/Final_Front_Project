import React from "react";
import { BsCartPlus } from "react-icons/bs";
import bestseler from "../api/bestseler";

function Bestseller() {
  return (
    <section className="products" id="products">
      <div className="heading">
        <h2 className="title">Best selers</h2>
      </div>
      {/* products container  */}
      <div className="products-container">
        {bestseler.map((element, id) => (
          <div className="box" key={id}>
            <img src={element.imgUrl} alt="" />

            <h3>{element.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Bestseller;
