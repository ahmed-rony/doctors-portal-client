import React, { useEffect, useState } from 'react';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const [doctor, setDoctor] = useState([]);
    
    useEffect(() =>{
        fetch("https://serene-taiga-29892.herokuapp.com/doctors")
        .then((res) => res.json())
        .then((data) => setDoctor(data));
    }, [])
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    {
                        doctor.map(doc => <Doctor key={doc._id} doctor={doc} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;