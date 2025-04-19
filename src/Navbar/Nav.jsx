import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import profileIcon from '../images/user.png'
import { AuthContext } from "../../Provider/AuthProvider";

const Nav = () => {
    const {user, signoutUser} = useContext(AuthContext);
    const signOutHandler = () => {
        signoutUser()
        .then(()=>{
          setUser(null)
        })
        .catch(err=>{
          setError(err)
        })
      }
  return (
    <div className="flex justify-between mt-5 items-center">
        <div></div>
        <div className="gap-4 flex items-center text-gray-500">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/career'}>Career</NavLink>
            <NavLink to={'/about'}>About</NavLink>
        </div>
        <div className="flex gap-2 ">
            <div>
                {
                  user? <div className="flex flex-col items-center">
                    <img className="w-10 h-10 rounded-full object-cover" src={user?.photoURL} alt="" />
                    <p>{user?.displayName}</p>
                  </div>:<img src={profileIcon} alt="" />
                }
            </div>
            <div>
                
                
                {
                    user? <button onClick={signoutUser} className="btn btn-neutral px-6">Log out</button>:<Link to={'/auth/login'} className="btn btn-neutral px-6">Log in</Link>
                }
            </div>
        </div>
    </div>
  );
};

export default Nav;
