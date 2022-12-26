import React from "react";
import Products from "../../components/Products";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

const Shop = () => {


  

  return (
    <div>
      <Menu />
      <div className="menu">
{/*   
        <button className="modalBtn" onClick={() => setOpenModal(true)}>
          <SlBasket  size="30px" color="FF8F52"/> {productsCount} Items
        </button> */}
      </div>
      {/* <Modal open={openModal} onClose={() => setOpenModal(false)} /> */}

      <Products />
      <Footer />
    </div>
  );
};

export default Shop;
