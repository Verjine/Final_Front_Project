import { CartContext } from "../ProductCart/CartContext";
import { useContext, useState } from "react";

function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product._id);
  // console.log(cart.items);
  const [closed, setClosed] = useState(false);
  console.log(closed, productQuantity)

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
              </form>
              <button onClick={() => setClosed(false)} 
              className="delete">
                Close
              </button>
            </>
          ) : (
            <button
              className="buy"
              variant="primary"
              onClick={() =>{ cart.addOneToCart(product._id);setClosed(true)}}
            >
              <span>Add To Cart</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
