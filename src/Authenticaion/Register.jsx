import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { newUserRegister, user, setUser, error, setError, updateUserinfo } =
    useContext(AuthContext);
  const navigate =useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(user);

    if (password.length < 6) {
      setError("password must be 6 character or longer.");
    }

    // createUserInFirebase
    newUserRegister(email, password)
      .then((result) =>{
        setUser(result.user)
        updateUserinfo({displayName:name,photoURL: photoURL}).then(()=>{
          navigate('/category/01')
        })
        .catch(err=>{
          setError(err)
        })
      })
      .catch((error) => {
        setUser(null);
      });
  };

  return (
    <div>
      <div className=" w-3/5 mx-auto bg-slate-100 mt-5">
        <div className="p-3">
          <h1 className="text-2xl font-semibold">Register your account</h1>
          <form className="card-body max-w-md mx-auto" onSubmit={submitHandler}>
            <fieldset className="fieldset">
              <label className="label text-lg">Your Name</label>
              <input
                name="name"
                type="text"
                className="input w-full"
                placeholder="Enter your name"
              />
              <label className="label text-lg">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input w-full"
                placeholder="Enter photoURL"
              />
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
              <label className="label">
                <input type="checkbox" defaultChecked className="checkbox" />
                Term & Conditions
              </label>
              <div>
                {error && <span className="text-red-500">{error}</span>}
              </div>
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
