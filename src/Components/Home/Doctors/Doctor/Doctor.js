import React from 'react';
// import img from '../../../assets/images/doctor.png';
const Doctor = ({doctor}) => {
    console.log(doctor);
    return (
        <div className="col-md-4 text-center">
            {
                doctor.image 
                ? <img className="img-fluid mb-3" src={`data:image/png;base64,${doctor.image.img}`} alt=""/>
                : <img className="img-fluid mb-3" src={`https://serene-taiga-29892.herokuapp.com/${doctor.img}`} alt=""/>
            }
            <h4>{doctor.name}</h4>
            <p>+880-188-934789</p>
        </div>
    );
};

export default Doctor;