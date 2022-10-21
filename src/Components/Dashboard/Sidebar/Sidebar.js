import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook_Context/useAuth';
import './Sidebar.css';

const Sidebar = () => {
    const [loggedIn, setLoggedIn] = useAuth();
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('https://serene-taiga-29892.herokuapp.com/isDoctor', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email: loggedIn.email }),
        })
        .then((res) => res.json())
        .then((data) => setIsDoctor(data));
    }, []);

    return (
        <div className='sidebar-bg'>
            <div>
                <Link to={'/dashboard/appointment'} className='sidebar-op'>DashBoard</Link>
                <Link to={'/'} className='sidebar-op'>Home</Link>
                <Link to={'/appointment'} className='sidebar-op'>Appointments</Link>
                { isDoctor && <div>
                    <Link to={'/patient'} className='sidebar-op'>Patients</Link>
                    <Link to={'/prescription'} className='sidebar-op'>Prescriptions</Link>
                    <Link to={'/addDoctor'} className='sidebar-op'>Add Doctors</Link>
                    <Link to={'/setting'} className='sidebar-op'>Settings</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Sidebar;