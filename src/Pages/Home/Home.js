import React from 'react';
import { Carousel } from 'react-bootstrap';
import Services from '../Services/Services';
import Teams from './Teams/Teams';
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jfif'
import banner3 from '../../images/banner3.jpg'
import Footer from '../Shared/Footer/Footer';
import Pricing from '../Pricing/Pricing';
import Contact from '../Contact/Contact';
import Allreviews from '../Allreviews/Allreviews';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div id="home">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Using high tech for you</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Guranteed professional treament for everyone</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>We hear to patients with patience </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Services></Services>
            <Teams></Teams>
            <Pricing></Pricing>
            <Contact></Contact>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;