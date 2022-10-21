import React from 'react';
import { appointmentData } from '../../InfoData.Config';
import BookingCard from './BookingCard';

const BookAppointment = ({date}) => {
    return (
        <section className='text-center mt-5 mb-5'>
            <h2 className='brandC mb-4'>Available Appointments on {date.toDateString()}</h2>
            <div className="container">
                <div className="row">
                    {
                        appointmentData.map(booking => <BookingCard key={booking.id} booking={booking} date={date}></BookingCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookAppointment;