import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const {newUserRegister} = useContext(AuthContext);
    
    const submitHandler = e => {
        e.preventDefault();
    }
  return (
   
    <div>
      <div className=" w-3/5 mx-auto bg-slate-100 mt-5">
        <div className="p-3">
          <h1 className="text-2xl font-semibold">Register your account</h1>
          <form className="card-body max-w-md mx-auto" onSubmit={submitHandler}>
            <fieldset className="fieldset">
              <label className="label text-lg">Your Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter your name"
              />
              <label className="label text-lg">Photo URL</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter photoURL"
              />
              <label className="label text-lg">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
              />
              <label className="label text-lg">Password</label>
              <input
                type="password"
                className="input  w-full"
                placeholder="Password"
              />
              <label className="label">
                <input type="checkbox" defaultChecked className="checkbox" />
                Term & Conditions
              </label>
              <button className="btn btn-neutral rounded-none mt-4">
                Register
              </button>
            </fieldset>
            <h1>
              Already have an account?{" "}
              <Link to={"/auth/login"} className="text-red-400">
                Login
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
