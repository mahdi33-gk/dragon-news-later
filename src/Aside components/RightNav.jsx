import React from 'react';
import SocialLogin from '../Components/SocialLogin';
import SocaialLink from '../Components/SocaialLink';
import ImageContainer from '../Components/ImageContainer';

const RightNav = () => {
    return (
        <div className='space-y-6'>
            <SocialLogin></SocialLogin>
            <h2 className='text-left text-[20px] font-semibold'>Find Us On</h2>
            <SocaialLink></SocaialLink>
            <ImageContainer></ImageContainer>
        </div>
    );
};

export default RightNav;