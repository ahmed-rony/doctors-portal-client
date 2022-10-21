import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <div>
            {/* ======= seections ======= */}
            <Banner></Banner>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Doctors></Doctors>
            <Footer></Footer>
        </div>
    );
};

export default Home;