import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <h1 className="text-[20px] font-semibold">
        All Caterogy ({categories.length})
      </h1>
      {/* category btn */}
      <div className="flex flex-col gap-2 mt-3 text-gray-500">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            className="btn btn-ghost"
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
