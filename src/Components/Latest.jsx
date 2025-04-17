import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
    return (
        <div className='flex gap-2 px-3 py-1 mt-5'>
            <button className='btn btn-sm bg-rose-600 text-white'>Latest</button>
    
            <Marquee>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quas sequi dolore reprehenderit, id assumenda velit nesciunt mollitia quidem, quisquam autem quo perferendis deleniti tenetur molestias saepe animi itaque!
            </Marquee>
        </div>
    );
};

export default Latest;