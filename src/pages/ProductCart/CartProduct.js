import { CartContext } from "../ProductCart/CartContext";
import { useContext } from "react";
// import { getProductData } from "../../api/flowers";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = cart.items_id;
  // console.log(productData)
  console.log(props)
  console.log(cart.flowers);
  return (
    <>
      {cart.flowers.map((elem) => (
        <div key={elem.items_id} className="modal_fields">
          <div className="image_div">
            <img className="flw_img" src={elem.imgUrl} />
          </div>
          <div className="other_div">
            <h3 className="mod_header">{elem.title}</h3>
            <p className="mod_q">{quantity} total</p> 
            <p className="mod_p">
              ${(quantity * elem.price).toFixed(2)}
            </p>
            <button
              className="mod_remove"
              onClick={() => cart.deleteFromCart(id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default CartProduct;
