import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404Not.png'
const NotFound = () => {
    return (
        <div>
            <img src={notfound} style={{height: '100vh', width:'100vw'}} alt="" />
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;