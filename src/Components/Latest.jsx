import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Latest = () => {
    return (
        <div className='flex gap-2 px-4 py-2 mt-5 bg-base-300'>
            <button className='btn btn-sm bg-rose-600 text-white'>Latest</button>
    
            <Marquee pauseOnHover={true}>
            <Link to={'/news'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quas sequi dolore reprehenderit, id assumenda velit nesciunt mollitia quidem, quisquam autem quo perferendis deleniti tenetur molestias saepe animi itaque!
            </Link>
            </Marquee>
        </div>
    );
};

export default Latest;