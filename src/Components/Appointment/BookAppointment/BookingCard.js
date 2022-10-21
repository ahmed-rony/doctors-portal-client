import React, { useState } from 'react';
import './BookingCard.css'
import BookingModal from './BookingModal/BookingModal';

const BookingCard = ({booking, date}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <div className='col-md-4 gx-3 mb-3'>
            <div className="booking-content">
                <h4 className='brandC'>{booking.name}</h4>
                <p className='mb-0'>{booking.startTime} - {booking.endTime}</p>
                <p><small className='text-secondary'>{booking.space} spaces available</small></p>
                <button onClick={handleOpen} className="btn btn-primary ">Book Appointment</button>
                <BookingModal booking={booking} date={date} open={open} handleClose={handleClose}></BookingModal>
            </div>
        </div>
    );
};

export default BookingCard;