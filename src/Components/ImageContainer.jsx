import React from 'react';
import { FiSearch } from "react-icons/fi";
import Banner1 from '../images/swimming.png'
import Banner2 from '../images/class.png'
import Banner3 from '../images/playground.png'

const ImageContainer = () => {
    return (
        <div className='bg-base-200 p-2'>
            <h2 className='text-[20px] text-left flex items-center font-semibold'><span><FiSearch></FiSearch></span>-Zone</h2>
            <div className='space-y-3'>
                <img className='border-2 border-dashed' src={Banner1} alt="" />
                <img className='border-2 border-dashed' src={Banner2} alt="" />
                <img className='border-2 border-dashed' src={Banner3} alt="" />
            </div>
        </div>
    );
};

export default ImageContainer;