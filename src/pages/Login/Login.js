import React, { useState } from "react";
import Menu from "../../components/menu";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email,pass);
    
  };

  return (
    <div>
      <div>
        <Menu />
      </div>
      <div className="login">
        <div className="col-1">
          <h2>Login</h2>
          <span>Login and have more fun</span>
        <form className="login_form" onSubmit={handleSubmit}>
          <input
            className="lg_input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <input
            className="lg_input"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button className= "lg_btn" type="submit">Log In</button>
        </form>
        </div>
        {/* <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button> */}
      <div className="col-3">
        <img src="/images/loginflower.jpg" alt="" />
      </div>
    </div>
    </div>
  );
}
export default Login;
