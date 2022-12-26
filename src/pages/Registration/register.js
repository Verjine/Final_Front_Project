import React, { useState } from "react";
import Menu from "../../components/Menu";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const response = await fetch("http://localhost:5000/user/register", {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    response.status && response.status === 200
      ? toast.success(" Thank you for registration", {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 2000,
        })
      : toast.error("Error Notification!", {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 2000,
        });

    data.target.reset();

    // console.log(response)
    // .then((response) => setSuccess(response))
    // .then(
    //   success.status === 200
    //   ?
    //      toast.success(" Thank you for registration", {
    //         position: toast.POSITION.BOTTOM_RIGHT,
    //         autoClose: 2000,
    //       })
    //     : toast.error("Error Notification!", {
    //         position: toast.POSITION.BOTTOM_RIGHT,
    //         autoClose: 2000,
    //       }),
    // data.target.reset()

    // )
    // .catch((err) => {
    //   console.log(err.message);
  };

  return (
    <section>
      <div>
        <Menu />
      </div>
      <div className="register">
        <div className="col-1">
          <h2>Create Account</h2>
          <span>Register and help us help you</span>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="input"
              type="text"
              {...register("username")}
              placeholder="username"
              required
            />
            <input
              className="input"
              type="email"
              {...register("email")}
              placeholder="email"
              required
            />

            <input
              className="input"
              type="password"
              {...register("password")}
              placeholder="password"
              required
            />
            <button className="btn">Register</button>
            <div className="text">
              <p>
                Already have an account ?
                <Link to="/login">
                  {" "}
                  <span> Login</span>{" "}
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="col-2">
          <img src="/images/registerflower.jpg" alt="" />
        </div>
      </div>
      <div>
        <ToastContainer />
      </div>
    </section>
  );
}

export default Register;
