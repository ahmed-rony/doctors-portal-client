import React from 'react';
import PatientCard from '../PatientCard/PatientCard';
import '../PatientCard/PatientCard.css';

const AppointmentByDate = ({appointments}) => {
    

    return (
        <div className='patient-field'>
            <h5 className='text-secondary'>appointment: {appointments.length}</h5>
            <div className="fields mb-3">
                <h4 className='text-secondary'>Name</h4>
                <h4 className='text-secondary service-field'>Service</h4>
                
            </div>
            {
                appointments.length 
                ? appointments.map(data => <PatientCard data={data} key={data._id}></PatientCard>)
                : <h3>No Appointments</h3>
            }
        </div>
    );
};

export default AppointmentByDate;