import React from 'react';
import './InfoCard.css';

const InfoCard = ({info}) => {
    return (
        <div className='col-md-4 gx-3 text-white'>
            <div className={` d-flex info-container info-${info.background}`}>
                <div>
                    <span className='info-icon'>{info.icon}</span>
                </div>
                <div>
                    <h5 style={{fontSize: '22px'}}>{info.title}</h5>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;