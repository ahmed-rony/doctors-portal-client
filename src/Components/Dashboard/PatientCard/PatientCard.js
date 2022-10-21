import React from 'react';
import './PatientCard.css';

const PatientCard = ({data}) => {
    
    return (
        <div>
            
            <div className="patient-data">
                <p>{data.name}</p>
                <p>{data.service}</p>
                
            </div>
        </div>
    );
};

export default PatientCard;