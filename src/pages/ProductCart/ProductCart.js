import { CartContext } from "../ProductCart/CartContext";
import { useContext } from "react";

function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);
  return (
    <div className="box_list">
      <div className="image_wrapper">
        <img src={product.imgUrl} alt="img" />
      </div>
      <div className="box_info">
        <h3>{product.title}</h3>
        <div className="price">
          <span> {product.price}$</span>

          {productQuantity > 0 ? (
            <>
              <form className="cart_form">
                <label className="label">In Cart: {productQuantity}</label>
                <div className="
                re_btn">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      cart.addOneToCart(product.id);
                    }}
                    className="add"
                  >
                    +
                  </button>
                  <button
                    onClick={() => cart.removeOneFromCart(product.id)}
                    className="remove"
                  >
                    -
                  </button>
                </div>
              </form>
              <button
                onClick={() => cart.deleteFromCart(product.id)}
                className="delete"
              >
                Close
              </button>
            </>
          ) : (
            <button
              className="buy"
              variant="primary"
              onClick={() => cart.addOneToCart(product.id)}
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
