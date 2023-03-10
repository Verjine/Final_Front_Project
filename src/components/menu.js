import React from "react";
import { Link } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";

const Menu = () => {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  
  const logout = () => {
    localStorage.clear();
  };
  //   const [username , setUsername] = useState("")

  //   if (localdata != null &&  localdata.length > 0)
  // {
  //   setUsername(localdata)

  // }
  // console.log(localdata, 1245)

  // const cart = useContext(CartContext);
  // const [openModal, setOpenModal] = useState(false)

  // const productsCount = cart.items.reduce(
  //   (sum, product) => sum + product.quantity,
  //   0
  // );
  return(
  
      <div className="navbar">
        <h1>
          <Link to="/" className="shop">
            <span>Flower</span>Shop
          </Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {token ?
        <div className="tkn">
           <p className="p">{username}</p>
        
          <Link to="/" onClick={logout}>
            <CiLogout size="25px" color="FF8F52" />
          </Link>
        </div>
        :  <div className="icons">
        <Link to="/register">
          <BsPersonFill size="25px" color="FF8F52" />
        </Link>
        </div>
      } 

        
          

       
        </div>
   
  )
};

export default Menu;
