import React from "react";

import Latest from "./Latest";
import Nav from "../Navbar/Nav";
import LeftNav from "../Aside components/LeftNav";
import RightNav from "../Aside components/RightNav";
import MainNews from "./MainNews";
import { Outlet } from "react-router-dom";
import Header from "./Header";


const Home = () => {
  return (
    <div>
      <div>
        <Header></Header>
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
