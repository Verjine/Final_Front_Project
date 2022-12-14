import React from "react";
import Menu from "../../components/menu";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // console.log(watch('username'));
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
              {...register("email")}
              placeholder="email"
            />

            <input
              className="input"
              type="text"
              {...register("username")}
              placeholder="username"
            />
            <input
              className="input"
              type="text"
              {...register("password")}
              placeholder="password"
            />
            <button className="btn">Register</button>
            <div className="text">
          <p>
          Already have an account ?<Link to = "/login"> <span> Login</span> </Link></p>
          </div>
          </form>
        </div>
        <div className="col-2">
          <img src="/images/registerflower.jpg" alt="" />
        </div>
        
      </div>
    </section>
  );
}

export default Register;
