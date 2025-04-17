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
            <h1>Left Nav link</h1>
        </div>
    );
};

export default LeftNav;