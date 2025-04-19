import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";



const Login = () => {
  const navigate =useNavigate()
  const {setUser,signIn,error,setError} = useContext(AuthContext);
  const loginHandler = (e) => {
    setError(null)
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if(password.length<6){
      setError('password must be 6 character')
      return
    }
    signIn(email,password)
    .then(result=>{
      setUser(result.user)
      navigate('/')
    })
    .catch(err=>{
      setError(err)
    })
    
  }
  return (
    <div>
      <div className=" w-3/5 mx-auto bg-slate-100 mt-5">
        <div className="p-3">
          <h1 className="text-2xl font-semibold">Login your account</h1>
          <form className="card-body max-w-md mx-auto" onSubmit={loginHandler}>
            <fieldset className="fieldset">
              <label className="label text-lg">Email</label>
              <input
                name="email"
                type="email"
                className="input w-full"
                placeholder="Email"
              />
              <label className="label text-lg">Password</label>
              <input
                name="password"
                type="password"
                className="input  w-full"
                placeholder="Password"
              />
              <div>
                {
                  error && <span className="text-red-500">{error}</span>
                }
              </div>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral rounded-none mt-4">
                Login
              </button>
            </fieldset>
            <h1>
              Dont have an account?{" "}
              <Link to={"/auth/register"} className="text-red-400">
                Register
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
