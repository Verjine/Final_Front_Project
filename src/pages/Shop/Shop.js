import React from "react";
import Products from "../../components/Products";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
<<<<<<< HEAD

const Shop = () => {

=======
import { CartContext } from "../ProductCart/CartContext";
import { SlBasket } from "react-icons/sl";
import Modal from "../../components/Modal";
const Shop = () => {
  // const cart = useContext(CartContext);
  // const [openModal, setOpenModal] = useState(false)

  // const productsCount = cart.items.reduce(
  //   (sum, product) => sum + product.quantity,
  //   0
  // );
>>>>>>> 108f0577886bab1d0ceea322abde6ee8e23312b5

  

  return (
    <div>
      <Menu />
<<<<<<< HEAD
      <div className="menu">
{/*   
        <button className="modalBtn" onClick={() => setOpenModal(true)}>
          <SlBasket  size="30px" color="FF8F52"/> {productsCount} Items
        </button> */}
      </div>
=======
      {/* <div className="menu">
  
        <button className="modalBtn" onClick={() => setOpenModal(true)}>
          <SlBasket  size="30px" color="FF8F52"/> {productsCount} Items
        </button>
      </div> */}
>>>>>>> 108f0577886bab1d0ceea322abde6ee8e23312b5
      {/* <Modal open={openModal} onClose={() => setOpenModal(false)} /> */}

      <Products />
      <Footer />
    </div>
  );
};

export default Shop;
