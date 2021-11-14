import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser,user,isLoading, authError } = useAuth();
   
    console.log(registerUser)
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)

        console.log(newLoginData)
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('didnt match');
            return
        }
        registerUser(loginData.email, loginData.password)
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleLoginSubmit}>
                <div class="form-group container-fluid">
                    <label for="exampleInputEmail1">Email address</label>
                    <input name="email" onChange={handleOnChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group container-fluid">
                    <label for="exampleInputPassword1">Password</label>
                    <input name="password" onChange={handleOnChange} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-group container-fluid">
                    <label for="exampleInputPassword1">RetypePassword</label>
                    <input name="password2" onChange={handleOnChange} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            {user?.email && <p style={{color:'green'}}>user is created</p>}
            {authError && <h2>{authError}</h2>}
        </div>
    );
};

export default Register;