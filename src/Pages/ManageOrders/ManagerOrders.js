import React from 'react';
import AllProducts from '../AllProducts/AllProducts';
import Services from '../Services/Services';

const ManagerOrders = () => {
    return (
        <div>
            <h2>Here admin can delete and update any product he/she wants</h2>
            <AllProducts></AllProducts>
        </div>
    );
};

export default ManagerOrders;