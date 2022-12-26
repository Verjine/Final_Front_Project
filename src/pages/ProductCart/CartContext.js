import { createContext, useState } from "react";
<<<<<<< HEAD
import { useEffect } from "react";
=======
import { Funkcia } from "../../api/flowers";
>>>>>>> 108f0577886bab1d0ceea322abde6ee8e23312b5
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
<<<<<<< HEAD
  flowers: [],
=======
>>>>>>> 108f0577886bab1d0ceea322abde6ee8e23312b5
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
<<<<<<< HEAD
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/flower";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        setFlowers(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
=======
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
>>>>>>> 108f0577886bab1d0ceea322abde6ee8e23312b5

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
<<<<<<< HEAD
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = cartItem.id;
      totalCost += productData.price * cartItem.quantity;
=======
    const {getProductData} = Funkcia();
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      console.log(productData)
      // totalCost += productData.price * cartItem.quantity;
>>>>>>> 108f0577886bab1d0ceea322abde6ee8e23312b5
    });
    return totalCost;
  }

  const contextValue = {
<<<<<<< HEAD
    flowers: flowers,
=======
>>>>>>> 108f0577886bab1d0ceea322abde6ee8e23312b5
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
