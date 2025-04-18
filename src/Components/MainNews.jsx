import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MainNews = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h1> {data?.data?.length}News found in this section </h1>
        </div>
    );
};

export default MainNews;