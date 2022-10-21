import React from 'react';
import BannerMain from '../BannerMain/BannerMain';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Navbar from '../Nav/Navbar';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <div className='banner-bg'>
                {/* =====  bannner section  ====== */}
                <Navbar></Navbar>
                <BannerMain></BannerMain>
                <BusinessInfo></BusinessInfo>
            </div>
           
        </>
    );
};

export default Banner;