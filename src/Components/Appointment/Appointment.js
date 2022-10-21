import React, { useState } from 'react';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Nav/Navbar';
import useAuth from '../Hook_Context/useAuth';
import AppointmentPage from './AppointmentPage';
import BookAppointment from './BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleCalender = date => {
        setSelectedDate(date);
    }
    
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentPage handleCalender={handleCalender}></AppointmentPage> 
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;