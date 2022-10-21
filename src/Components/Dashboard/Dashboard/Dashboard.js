import React, { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import AppointmentByDate from "../AppointmentByDate/AppointmentByDate";
import Sidebar from "../Sidebar/Sidebar";
import "react-calendar/dist/Calendar.css";
import useAuth from '../../Hook_Context/useAuth';

const Dashboard = () => {
  const [loggedIn, setLoggedIn] = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const handleCalender = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    fetch("https://serene-taiga-29892.herokuapp.com/appointmentByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date: selectedDate, email: loggedIn.email }),
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [selectedDate]);
  return (
    <section>
      <div>
        <div className="row">
          <div className="col-md-3">
            <Sidebar></Sidebar>
          </div>

          <div className="col-md-3 mt-5">
            <Calendar onChange={handleCalender} value={new Date()} />
          </div>

          <div className="col-md-5">
            <AppointmentByDate appointments={appointments}></AppointmentByDate>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
