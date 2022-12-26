import { CartContext } from "../ProductCart/CartContext";
import { useContext, useState } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPalButton from "../../components/PayPalButton";
import { Link } from "react-router-dom";




function ProductCard(props) {
  const initialOptions = {
    "client-id": process.env.REACT_APP_CLIENT_ID,
    currency: "USD",
    intent: "capture",
    components: "buttons",
  };
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product._id);
  const token = localStorage.getItem("token");

  // console.log(cart.items);
  // console.log(props)
  const [closed, setClosed] = useState(false);

  return (
    <div className="box_list">
      <div className="image_wrapper">
        <img src={product.imgUrl} alt="img" />
      </div>
      <div className="box_info">
        <h3>{product.title}</h3>
        <div className="price">
          <span> {product.price}$</span>

          {closed ? (
            <>
              <form className="cart_form">
                <label className="label">In Cart: {productQuantity}</label>
                <div
                  className="
                re_btn"
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      cart.addOneToCart(product._id);
                    }}
                    className="add"
                  >
                    +
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      cart.removeOneFromCart(product._id);
                    }}
                    className="remove"
                  >
                    -
                  </button>
                </div>
                {token?
                <div className="paypal">
                <PayPalScriptProvider options={initialOptions}>
                  <PayPalButton product={product} />
                </PayPalScriptProvider>
              </div>
              : <Link className="login_buy" to =  "/login">Login for buy</Link>

                }
                
              </form>
              <button onClick={() => setClosed(false)} className="delete">
                Close
              </button>
            </>
          ) : (
            <button
              className="buy"
              variant="primary"
              onClick={(e) => {
                e.preventDefault();

                cart.addOneToCart(product._id);
                setClosed(true);
              }}
            >
              <span>Buy it</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
