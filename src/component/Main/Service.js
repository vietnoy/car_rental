import React from 'react';
import { data } from '../../data';

const Service = () => {
    const serviceJSX = data.service.map(({ name, info, path},index) => (
        <div className='service' key={index}>
            <img src={path} alt='logo'></img>
            <p className='heading font-bold'>{name}</p>
            <p className='offer'>{info}</p>
        </div>
    ));

    return (
        <div className='services'>
            <p className='services_heading1'>Plan your trip now</p>
            <h1 className='services_heading2'>Quick & easy car rental</h1>
            <div className='service-area'>
                {serviceJSX}
            </div>
        </div>
    );
}

export default Service;

