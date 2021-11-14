import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('https://pure-garden-58524.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);



    return (
        <div id="services" className="service-container">
            {
                services.slice(0,6).map(service => <Service key={service._id} service={service}></Service>)
            }

        </div>
    );
};

export default Services;