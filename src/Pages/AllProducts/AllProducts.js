import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AllProducts = (props) => {
    let history = useHistory()
    const [products, setProducts] = useState([]);
    const { user, logOut } = useAuth();
    // const { name, _id, price, description, index, picture, password, email } = props.service;
    const [getAllServices, setAllServices] = useState([]);
    const [getDeleteCount, setDeleteCount] = useState([]);

    useEffect(() => {
        fetch('https://pure-garden-58524.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // const handleAddToCart = (id) => {
    //     const data = getAllServices[index];
    //     data.email = user.email
    //     fetch("http://localhost:5000/addOrder",{
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(user.email)
    //     })
    //     console.log(id,user.email)
    // }



    const handleDelete = id =>{
        alert('Are you sure want to delete?')
        history.push('/services')
        fetch(`https://pure-garden-58524.herokuapp.com/deleteUser/${id}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(result => setDeleteCount(result))
    }

    return (
        <div>
            <h2>This is all product page</h2>
            {
                products.map(product => <div className="service">
                    <img src={product.email} style={{ height: '30vh' }} alt="" />
                    <h2>{product.name}</h2>
                    <h4>Price: {product.password} USD</h4>
                    <p>{product.description}</p>
                    <Link to={`booking/${product._id}`}><button className="btn btn-primary">Details of {product.name.toUpperCase()}</button></Link>
                    <br />
    
                    <Link to={`booking/${product._id}`}><button id="addToCart" className="btn btn-warning mt-2">Purchase this</button></Link>
                </div>)
            }
        </div>
    );
};

export default AllProducts;