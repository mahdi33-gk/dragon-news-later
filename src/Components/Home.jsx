import React from "react";
import logo from "../images/logo.png";
import moment from "moment";
import Latest from "./Latest";


const Home = () => {
  return (
    <div>
      <div>
        <header className="flex flex-col gap-2">
          <div className="flex justify-center items-center">
            <img className="w-2/5" src={logo} alt="logo" />
          </div>
          <p className="text-gray-500">Journalism Without Fear or Favour</p>
          <p className="text-gray-500 font-bold">
            {moment().format("MMMM Do YYYY, h:mm a")}
          </p>
        </header>
         {/* latest news section*/}
         <section>
            <Latest></Latest>
          </section>
        <nav></nav>
        <main></main>
      </div>
    </div>
  );
};

export default Home;
