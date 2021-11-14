import React, { useState } from 'react';

const AddReviews = () => {
    const [name, setName] = useState("")
    const [rating, setRating] = useState("");

    const handleName = e => {
        setName(e.target.value)
    }

    const handleRating = e => {
        if(e.target.value <=5){
            setRating(e.target.value)
        }
        else{
            
            setRating(5)
            alert('Since you added more than 5 we will added it as 5')
        }
        
    }

    const handleAddUser = () => {
        const data ={name,rating};
        fetch("https://pure-garden-58524.herokuapp.com/addreviews",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
    }


    return (
        <div>
            <h2>Add review here</h2>
            <div>
                <div>
                    <input onChange={handleName} type="text" placeholder="Your review" className="p-2 mt-3" required></input>
                    <br />

                    <input onChange={handleRating} type="text"
                        placeholder="your rating" className="p-2 mt-3" />
                    <br />


                    <button onClick={handleAddUser} className="btn btn-success mt-3">Add user</button>
                </div>
            </div>
        </div>
    );
};

export default AddReviews;