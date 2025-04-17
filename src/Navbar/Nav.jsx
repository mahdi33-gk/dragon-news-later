import React from "react";
import logo from "../images/logo.png";
import moment from "moment";

const Nav = () => {
  return (
    <div>
      <header className="flex flex-col gap-2">
        <div className="flex justify-center items-center">
          <img className="w-2/5" src={logo} alt="logo" />
        </div>
        <p className="text-gray-500">Journalism Without Fear or Favour</p>
        <p className="text-gray-500 font-bold">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
      </header>
      <nav></nav>
      <main></main>
    </div>
  );
};

export default Nav;
