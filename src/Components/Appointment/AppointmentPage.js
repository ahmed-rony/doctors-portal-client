import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentPage = ({handleCalender}) => {
    
  return (
    <main className="container">
      <div className="row contents">
        <div className="col-md-4 offset-md-1">
          <h1>Appointment</h1>
          <Calendar
            onChange={handleCalender}
            value={new Date()}
          />
        </div>
        <div className="col-md-6">
          <img
            src={require("../assets/images/chair.png")}
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </main>
  );
};

export default AppointmentPage;
