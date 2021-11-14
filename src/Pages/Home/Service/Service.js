import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from "react-router-dom";
import './Service.css'
const Service = (props) => {
    let history = useHistory()
    const { user, logOut } = useAuth();
    const { name, _id, price, description, index, picture, password, email } = props.service;
    const [getAllServices, setAllServices] = useState([]);
    const [getDeleteCount, setDeleteCount] = useState([]);

    useEffect(() => {
        fetch('https://pure-garden-58524.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, []);

    const handleAddToCart = (id) => {
        const data = getAllServices[index];
        data.email = user.email
        fetch("https://pure-garden-58524.herokuapp.com/addOrder",{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        console.log(id,user.email)
    }

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
        <div className="service">
            <img src={email} style={{ height: '30vh' }} alt="" />
            <h2>{name}</h2>
            <h4>Price: {password} USD</h4>
            <p>{description}</p>
            <Link to={`booking/${_id}`}><button className="btn btn-primary">Details of {name.toUpperCase()}</button></Link>
            <br />
            <Link to={`update/${_id}`}><button className="btn btn-success mt-2">UPDATE</button></Link>
            <button onClick={()=>handleDelete(_id)} className="btn btn-danger mt-2">DELETE</button>
            <Link to={`booking/${_id}`}><button id="addToCart" onClick={()=>handleAddToCart(index)} className="btn btn-warning mt-2">BOOK NOW</button></Link>
        </div>

    );
};

export default Service;