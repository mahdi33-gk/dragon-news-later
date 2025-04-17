import React from "react";
import logo from "../images/logo.png";

const Nav = () => {
  return (
    <div>
      <header className="flex flex-col">
        <div className="flex justify-center items-center">
          <img className="w-1/4" src={logo} alt="logo" />
        </div>
      </header>
      <main></main>
    </div>
  );
};

export default Nav;
