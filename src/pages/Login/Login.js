import React, { useState } from "react";
import Menu from "../../components/Menu";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
  // const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>
    fetch("http://localhost:5000/user/login", {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle data
        localStorage.setItem("username", data.username);
        localStorage.setItem("token", data.token);
        setStatus("Logged in");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        setStatus("Something went wrong");
      });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(email,pass);

  // };

  return (
    <div>
      <div>
        <Menu />
      </div>
      <div className="login">
        <div className="col-1">
          <h2>Login</h2>
          <span className="lg_span">Login and have more fun</span>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="input"
              type="email"
              {...register("email")}
              placeholder="email"
            />

            <input
              className="input"
              type="password"
              {...register("password")}
              placeholder="password"
            />
            <button className="btn">Log in</button>
            <p>{status}</p>
            {/* <div className="text">
              <p>
                Already have an account ?
                <Link to="/login">
                  {" "}
                  <span> Login</span>{" "}
                </Link>
              </p>
            </div> */}
          </form>
          {/* <form className="login_form" onSubmit={onSubmit}>
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
        </form> */}
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
