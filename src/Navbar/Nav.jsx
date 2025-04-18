import React from "react";
import { Link, NavLink } from "react-router-dom";
import profileIcon from '../images/user.png'

const Nav = () => {
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
                <img src={profileIcon} alt="" />
            </div>
            <div>
                <Link to={'/auth'} className="btn btn-neutral px-6">Log in</Link>
            </div>
        </div>
    </div>
  );
};

export default Nav;
