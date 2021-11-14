import React from 'react';
import './Team.css'


const Team = (props) => {

    const { name, price, profession, picture } = props.team
    return (
        // <div>
        //     <div class="card-group d-flex">
        //         <div class="card">
        //             <img src={picture} class="card-img-top" alt="..."></img>
        //         </div>
        //         <div class="card cardinfo">
        //             <div class="card-body mt-25">
        //                 <h1 class="card-title">{name}</h1>
        //                 <p class="card-text">{profession}</p>
        //                 <p class="card-text">{price}</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div class="row">
            <div class="column">
                <div class="card">
                    <div>
                        <img src={picture} alt="Jane" style={{ height: '50%' }}></img>
                    </div>
                    <div class="container">
                        <h2>{name}</h2>
                        <p class="title">CEO &amp; Founder</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>example @example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Team;