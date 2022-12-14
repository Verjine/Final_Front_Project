import Menu from "../../components/menu";
import React from "react";
import Bestseller from "../../components/Bestseller";
import LatestPosts from "../../components/LatestPosts";
import Footer from "../../components/Footer";
import './Home.css';


const Home = () => {
  return (
    <>
      <div>
        <Menu />
      </div>
      <div className="hero">
        <div className="text">
          <h1> Flowers, 🌻
what the world needs </h1>
        </div>
        <div className="grid_container">
          <img className="single_image" src="/images/Rectangle 3.jpg" alt="img"></img>
          <img className="single_image" src="/images/Rectangle 5.jpg"alt="img"></img>
          <img className="single_image" src="/images/Rectangle 7.jpg" alt="img"></img>
          <img className="single_image" src="/images/Rectangle 25.jpg" alt="img"></img>
          <img className="single_image" src="/images/Rectangle 26.jpg" alt="img"></img>
          <img className="single_image" src="/images/Rectangle 4.jpg" alt="img"></img>
       
        </div>
      </div>
      <Bestseller/>
      <LatestPosts/>
      <Footer/>
    </>
  );
};

export default Home;
