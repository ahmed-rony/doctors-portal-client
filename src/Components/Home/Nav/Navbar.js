import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"aria-expanded="false" aria-label="Toggle navigation" >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

            <li class="nav-item">
              <Link to={'/'} class="nav-link me-5  active" aria-current="page" >Home</Link>
            </li>
            
            <li class="nav-item">
              <Link to={'/about'} class="nav-link me-5 " >About</Link>
            </li>

            <li class="nav-item">
              <Link to={'/appointment'} class="nav-link me-5 " >Appointment</Link>
            </li>

            <li class="nav-item">
              <Link to={'/dashboard/appointment'} class="nav-link me-5 " >Dashboard</Link>
            </li>

            <li class="nav-item">
              <Link to={'/blog'} class="nav-link me-5 text-white">Blog</Link>
            </li>

            <li class="nav-item">
              <Link to={'/contact'} class="nav-link me-5 text-white" >Contact Us</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
