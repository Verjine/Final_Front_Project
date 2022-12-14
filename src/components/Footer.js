import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram,BsTelephoneFill, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import {GoLocation} from 'react-icons/go'

function Footer() {
  return (
    <footer className="main_content">
      <div className="left_box">
        <h2><span>Flower</span>Shop</h2>
        <div className="content">
          <p>
    
            McQueens is an upmarket and innovative florists founded by Kally
            Ellis and based in central London. The globally recognised company
            provides flowers for weddings, restaurants, business events and even
            for television. 
          </p>
        
        </div>
      </div>
      <div className="center_box">
        <h2>Links</h2>
        <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Login</li>
        </ul>
      </div>
      
      <div className="social">
        <h2>Follow Us</h2>
        <div className="social_links">
            <Link to="">
              <BsInstagram  color="#ff8f52" size= "25px"/>
            </Link>
            <Link to="">
              <BsFacebook   color="#ff8f52" size= "25px"/>
            </Link>
            <Link to="">
              <BsLinkedin  color="#ff8f52" size= "25px" />
            </Link>
            <Link to="">
              <BsTwitter  color="#ff8f52" size= "25px" />
            </Link>
            </div>
          </div>
          <div className="contact">
            <h2>Contact</h2>
            <div className="links">
                <Link className="text" to =''><GoLocation color="#ff8f52" size= "25px"/>Via Pompeo Litta, 5</Link>
                <Link className ="text"to = '' ><BsTelephoneFill color="#ff8f52" size= "25px"/>+39 123-4567-890</Link>
            </div>

          </div>

    </footer>
  );
}

export default Footer;
