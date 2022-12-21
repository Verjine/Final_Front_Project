import { createContext, useState } from "react";
import { Funkcia } from "../../api/flowers";
// import {  getProductData } from '../../api/flowers';

// const [flowers, setFlowers] = useState([]);
//   useEffect(() => {
//     const url = "http://localhost:5000/flower";
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//         setFlowers(data);
//       } catch (error) {
//         console.log("error", error);
//       }
//     };
//     fetchData();
//   },[]);

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  // const [flowers, setFlowers] = useState([]);

  // useEffect(() => {
  //   const url = "http://localhost:5000/flower";
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       // console.log(data);
  //       setFlowers(data);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  function getTotalCost() {
    const {getProductData} = Funkcia();
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      console.log(productData)
      // totalCost += productData.price * cartItem.quantity;
    });
    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;

// export const useUpdater = (value, initialState = '') => {
//     const [state, setState] = useState(initialState);
//     useEffect(() => {
//       setState(value);
//     }, [value, setState]);
//     return [state, setState];
//   };

// const [data, setData] = useUpdater(fetchData);
