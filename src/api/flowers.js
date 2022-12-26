import { useEffect, useState } from "react";

// export { getProductData };


export const Funkcia = () => {
  const [flower, setFlower] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/flower";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setFlower(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  function getProductData(id) {
    let productData = flower.find((product) => product.id === id);

    if (productData === undefined) {
      console.log("Product data does not exist for ID:" + id);
      return undefined;
    }
    return productData;
  }
  return { getProductData, flower };
};
