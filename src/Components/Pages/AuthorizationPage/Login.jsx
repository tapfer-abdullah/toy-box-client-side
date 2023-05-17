/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(email, password)

    }

  return (
    <div>
      <div className="hero bg-base-200">

          <div className="card my-10 w-4/5 md:w-2/5 px-5 md:px-8 shadow-2xl bg-base-100">
            <h3 className="text-3xl font-bold text-center mt-10 text-my-blue">
              Please <span className="text-my-pink">Login</span>
            </h3>
            
            <form onSubmit={handleLogin}>
            <div className="card-body mb-5">
              

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                <label className="label">
                  <p className="mt-2">
                    Don't have an account?{" "}
                    <Link to="/register" className=" text-my-blue hover:text-my-pink">
                      Register
                    </Link>{" "}
                  </p>
                </label>
              </div>

              <div className="form-control mt-6">
                <input className="btn bg-my-blue border-my-blue hover:bg-my-pink hover:border-my-pink" type="submit" value="Log in" />
              </div>
              <div className="divider">OR</div>
              <div>
                <button className="btn bg-my-blue border-my-blue hover:bg-my-pink hover:border-my-pink w-full"
                ><FaGoogle className='mr-1 text-2xl'/> 
                Sing in with Google</button>
              </div>
            </div>
            </form>
          </div>

      </div>
    </div>
  );
};

export default Login;