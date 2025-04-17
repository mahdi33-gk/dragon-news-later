import React, { useEffect, useState } from 'react';

const LeftNav = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data.data.news_category))
    },[])
    return (
        <div>
            <h1 className='text-[20px] font-semibold'>All Caterogy ({categories.length})</h1>
{/* category btn */}
            <div>
                {
                    categories.map((category)=> (<button key={category.category_id}>{category.category_name}</button>))
                }
            </div>
        </div>
    );
};

export default LeftNav;