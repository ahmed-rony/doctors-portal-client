import React from 'react';
import { Link } from 'react-router-dom';
import './BannerMain.css';

const BannerMain = () => {
    return (
        <main className='container'>
            <div className="row contents">
                <div className="col-md-4 offset-md-1">
                    <h1>Your New Smile Starts Here</h1>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptate ipsam temporibus perferendis accusantium molestiae.</p>
                    <Link to='/appointment'>
                        <button className="btn btn-primary">Get Appointment</button>
                    </Link>
                </div>
                <div className="col-md-6">
                    <img src={require('../../assets/images/chair.png')} alt="" className="img-fluid" />
                </div>
            </div>
        </main>
    );
};

export default BannerMain;