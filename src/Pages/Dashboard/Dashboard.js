

import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    const { user, logOut } = useAuth();
    const { admin } = useAuth()
    return (
        <div>
            <nav class="nav nav-pills flex-column flex-sm-row">
                {admin && <div>
                    <Link to="/"><a class="flex-sm-fill text-sm-center nav-link active" href="#">Manage Product</a></Link>
                    <Link to="/manageproducts"><a class="flex-sm-fill text-sm-center nav-link active" href="#">Manage all Product</a></Link>
                    <Link to="/addservice"><a class="flex-sm-fill text-sm-center nav-link active" href="#">Add Products</a></Link>
                    <Link to="/makeadmin"><a class="flex-sm-fill text-sm-center nav-link active" href="#">Makeadmin</a></Link>
                    <Link><button className="btn btn-danger" onClick={logOut}>LogOut</button></Link>
                </div>}

                {!admin &&
                <div style={{marginLeft:'40%'}}>
                    <Link to="/" ><a class="flex-sm-fill text-sm-center nav-link active" style={{margin:'10px'}} href="#">My orders</a></Link>
                    <Link to="/addreviews"><a class="flex-sm-fill text-sm-center nav-link active" style={{margin:'10px'}} href="#">Add reviews</a></Link>
                    <Link to="/"><a class="flex-sm-fill text-sm-center nav-link active" style={{margin:'10px'}} href="#">PAY(coming soon)</a></Link>
                    <Link to="/"><button className="btn btn-danger" style={{margin:'10px'}} onClick={logOut}>LogOut</button></Link>
                </div>}
                




            </nav>
        </div>
    );
};

export default Dashboard;