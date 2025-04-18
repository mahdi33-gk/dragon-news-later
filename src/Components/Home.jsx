import React from "react";
import logo from "../images/logo.png";
import moment from "moment";
import Latest from "./Latest";
import Nav from "../Navbar/Nav";
import LeftNav from "../Aside components/LeftNav";
import RightNav from "../Aside components/RightNav";
import MainNews from "./MainNews";
import { Outlet } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <div>
        <header className="flex flex-col gap-2">
          <div className="flex justify-center items-center">
            <img className="w-2/6" src={logo} alt="logo" />
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
        <nav>
            <Nav></Nav>
        </nav>
        <main className="grid md:grid-cols-12 gap-4 mt-10">
            <aside className="left col-span-3">
                <LeftNav></LeftNav>
            </aside>
            <section className="col-span-6">
                <Outlet></Outlet>
            </section>
            <aside className="col-span-3">
                <RightNav></RightNav>
            </aside>
        </main>
      </div>
    </div>
  );
};

export default Home;
