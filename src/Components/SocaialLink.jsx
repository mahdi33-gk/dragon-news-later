import React from 'react';
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

const SocaialLink = () => {
    return (
        <div className='*:bg-base-100'>
            <button className='btn w-full justify-start'><CiFacebook></CiFacebook> Facebook</button>
            <button className='btn w-full justify-start'><CiInstagram></CiInstagram> Instagram</button>
            <button className='btn w-full justify-start'><CiTwitter></CiTwitter> Twitter</button>
        </div>
    );
};

export default SocaialLink;