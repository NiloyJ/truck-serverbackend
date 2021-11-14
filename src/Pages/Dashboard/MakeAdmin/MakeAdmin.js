import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button, TextField, Alert } from '@mui/material';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://pure-garden-58524.herokuapp.com/members/admin', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount){
                    console.log(data)
                    setSuccess(true)
                }
                
            })

        e.preventDefault()
    }
    return (
        // <div>
        //     <h2>This is admin</h2>

        //     <form onSubmit={handleAdminSubmit} class="form-inline" style={{ marginLeft: '43%' }}>
        //         <div class="form-group mx-sm-3 mb-2">
        //             <label for="MakeAdmin" class="sr-only">MakeAdmin</label>
        //             <input type="email" onBlur={handleOnBlur} class="form-control" id="inputPassword2" placeholder="enter admin's mail" />
        //         </div>
        //         <button type="submit" class="btn btn-primary mb-2">Make admin</button>
        //     </form>

        // </div>

        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
            
        </div>
    );
};

export default MakeAdmin;