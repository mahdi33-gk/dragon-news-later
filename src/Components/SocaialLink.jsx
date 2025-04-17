import React from 'react';
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

const SocaialLink = () => {
    return (
        <div>
            <button className='btn w-full'><CiFacebook></CiFacebook> Facebook</button>
            <button className='btn w-full'><CiInstagram></CiInstagram> Instagram</button>
            <button className='btn w-full'><CiTwitter></CiTwitter> Twitter</button>
        </div>
    );
};

export default SocaialLink;