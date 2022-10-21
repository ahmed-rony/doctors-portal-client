import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appointment from "../Appointment/Appointment";
import AddDoctor from "../Dashboard/AddDoctor/AddDoctor";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import Home from "../Home/Home/Home";
import { DataProvider } from "../Hook_Context/DataContext";
import Login from "../Login/Login";
import PrivateRoute from "../Login/PrivateRoute/PrivateRoute";
import Page404 from "../Page404/Page404";

const MainPage = () => {
  return (
    <div>
      <DataProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard/appointment" element={<Dashboard />}></Route>
              <Route  path="/addDoctor" element={<AddDoctor />}></Route>
            </Route> 
              <Route path="/appointment" element={<Appointment />}></Route>
            <Route  path="/login" element={<Login />}></Route>
            <Route  path="*" element={<Page404 />}></Route>
          </Routes>
        </Router>
      </DataProvider>
    </div>
  );
};

export default MainPage;
