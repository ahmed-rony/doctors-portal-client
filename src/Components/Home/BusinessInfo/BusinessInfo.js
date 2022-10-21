import React from 'react';
import { infoData } from '../../InfoData.Config';

import InfoCard from './InfoCard/InfoCard';


const BusinessInfo = () => {
    return (
        <section className='container'>
            <div className="row">
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;