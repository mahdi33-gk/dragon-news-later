import React from 'react';
import Nav from '../Navbar/Nav';
import Header from './Header';
import RightNav from '../Aside components/RightNav';

const NewsDetails = () => {
    return (
        <div>
            <Header></Header>
            <main>
                <section className='grid grid-cols-12'>
                    <div className='col-span-9'></div>
                    <aside className='col-span-3'>
                        <RightNav></RightNav>
                    </aside>
                </section>
            </main>
        </div>
    );
};

export default NewsDetails;