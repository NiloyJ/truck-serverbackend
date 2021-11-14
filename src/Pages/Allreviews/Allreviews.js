import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Allreviews.css'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Allreviews = (props) => {
    
const element = <FontAwesomeIcon icon={faCoffee} />
    console.log(props.review)
    

    return (


        <div className="d-flex justify-content-center">
            <div className="content text-center">
            <h5 className="card-title"></h5>
                <div className="ratings"> <span className="product-rating">4.6</span><span>/5</span>
                    <div className="stars"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                </div>
            </div>
        </div>

    );
};

export default Allreviews;