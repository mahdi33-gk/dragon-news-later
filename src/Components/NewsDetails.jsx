import React from "react";
import Nav from "../Navbar/Nav";
import Header from "./Header";
import RightNav from "../Aside components/RightNav";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  const {_id,image_url
,title,details  } = news;
  return (
    <div>
      <Header></Header>
      <main>
        <section className="grid grid-cols-12">
          <div className="col-span-9">
            <h1 className="text-left text-[20px] font-semibold">
              {" "}
              Dragon News home{" "}
            </h1>
            {/* cards */}
            <div className="card bg-base-100 shadow-sm">
              <figure className="px-10 pt-10">
                <img
                  src={
                    image_url
                  }
                  alt="pic"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body text-left  ">
                <h2 className="card-title text-left text-[20px]">{title}</h2>
                <p>
                  {details}
                </p>
                <div className="card-actions">
                <Link to={`/category/${news?.category_id}`}  className="btn btn-error text-white"> <FaArrowLeft></FaArrowLeft>All news in this category</Link>
                </div>
              </div>
            </div>
            
          </div>
          <aside className="col-span-3">
            <RightNav></RightNav>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
