import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Singlenews from './Singlenews';

const MainNews = () => {
    const {data: news} = useLoaderData();
    console.log(news)
    
    return (
        <div>
            <h1 className='text-left text-[20px] font-semibold'> Dragon News home </h1>
            {
                news.map(singleNews => <Singlenews key={singleNews._id} singleNews={singleNews}></Singlenews>)
            }
        </div>
    );
};

export default MainNews;