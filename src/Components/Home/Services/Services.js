import React from 'react';
import { serviceData } from '../../InfoData.Config';
import ServiceDetail from './ServiceDetail/ServiceDetail';

const Services = () => {
    return (
        <section className='container mb-5'>
            <div className="text-center">
                <h5>OUR SERVICES</h5>
                <h2 className='mb-5'>Servics We Provide</h2>
            </div>
            
            <div className="row">
                {
                    serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }
            </div>
        </section>
    );
};

export default Services;