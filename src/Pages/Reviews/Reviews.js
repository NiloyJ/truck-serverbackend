import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Allreviews from '../Allreviews/Allreviews';



const Reviews = () => {
    
const element = <FontAwesomeIcon icon={faStar} />
    const [reviews, setReviews] = useState([]);
    const { user, logOut } = useAuth()
    useEffect(() => {
        fetch("https://pure-garden-58524.herokuapp.com/reviews")
            .then(res => res.json())
            .then(result => setReviews(result))
    }, []);



    return (
        <div>
            <h1 class="display-2">OUR REVIEWS</h1>
            {
                
                reviews.map(review => <div className="d-flex justify-content-center">
                    <div className="content text-center">
                        <h2>{user?.displayName}</h2>
                        <div className="ratings"> <span className="product-rating"> {review.rating}{element}</span><span style={{fontSize:'50px'}}>/5{element}</span>
                            <h5 className="card-title">{review.name}</h5>
                            <div className="stars">  <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                            
                        </div>
                    </div>
                </div>)
            }

            
            {/* <Allreviews></Allreviews> */}

        </div>
    );
};

export default Reviews;