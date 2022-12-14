const flower = [
  {
    id: "1",
    title: "Daisy",
    price: 5,
    imgUrl: "images/Rectangle 58.jpg",
  },
  {
    id: "2",
    title: "Sun flower",
    price: 7,
    imgUrl: "images/Rectangle 58 (1).jpg",
  },
  {  id:'3',
    title: "White Rose",
    price: 10,
    imgUrl: "images/Rectangle 58 (2).jpg",
  },
  { id:'4',
    title: "Periwinkle",
    price: 7,
    imgUrl: "images/Rectangle 58 (3).jpg",
  },
  { id:'5',
    title: "Peony",
    price: 5,
    imgUrl: "images/peony.jpeg",
  },
  { id:'6',
    title: "Gerbera",
    price: 7,
    imgUrl: "images/gerbera.jpg",
  },
  { id:'7',
    title: "Freesia",
    price: 6,
    imgUrl: "images/freesia.jfif",
  },
  { id:'8',
    title: "Water Lily",
    price: 16,
    imgUrl: "images/waterlili.jpg",
  },
  { id:'9',
    title: "Daffodil",
    price: 7,
    imgUrl: "images/daffodil.jpg",
  },
  { id:'10',
    title: "Carnation",
    price: 7,
    imgUrl: "images/Rectangle 58 (3).jpg",
  },
  { id:'11',
    title: "Lisianthus",
    price: 7,
    imgUrl: "images/lisianthus.jpg",
  },
  { id:'12',
    title: "Tulip",
    price: 7,
    imgUrl: "images/tulip.jpg",
  },
];


function getProductData(id) {
    let productData = flower.find(product => product.id === id);

    if (productData === undefined) {
        console.log('Product data does not exist for ID:' + id);
        return undefined;
    }
    return productData;
}
export { flower, getProductData };

