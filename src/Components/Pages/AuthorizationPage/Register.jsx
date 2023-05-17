/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        
        console.log(name, email, password, photoURL)

    }

  return (
    <div>
      <div className="hero bg-base-200">

          <div className="card my-10 w-full max-w-sm shadow-2xl bg-base-100">
            <h3 className="text-3xl font-bold text-center mt-10 text-my-blue">
              Please <span className="text-my-pink">Register</span>
            </h3>
            
            <form onSubmit={handleRegister}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
              </div>

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
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                <label className="label">
                  <p className="mt-2">
                    Already have an account?{" "}
                    <Link to="/login" className=" text-my-blue hover:text-my-pink">
                      Login
                    </Link>{" "}
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn bg-my-blue border-my-blue hover:bg-my-pink hover:border-my-pink" type="submit" value="Register" />
              </div>
            </div>
            </form>
          </div>

      </div>
    </div>
  );
};

export default Register;
