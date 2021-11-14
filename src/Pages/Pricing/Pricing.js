import React from 'react';
import './Pricing.css'
const Pricing = () => {
    return (
        <div class="demo">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-6">
                        <div class="pricingTable">
                            <div class="pricingTable-header">
                                <div class="price-value">
                                    <span class="amount">$10.00</span>
                                    <span class="duration">per month</span>
                                </div>
                                <h3 class="title">Standard</h3>
                            </div>
                            <div class="pricing-content">
                                <ul>
                                    <li>Free Travel advise</li>
                                    <li>Free Newsletter</li>
                                    <li>10% special discount on every travel</li>

                                </ul>
                                <div class="pricingTable-signup">
                                    <a href="#">Sign Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="pricingTable yellow">
                            <div class="pricingTable-header">
                                <div class="price-value">
                                    <span class="amount">$30.00</span>
                                    <span class="duration">per month</span>
                                </div>
                                <h3 class="title">Business</h3>
                            </div>
                            <div class="pricing-content">
                                <ul>
                                    <li>Free travel advise</li>
                                    <li>Free newsletter</li>
                                    <li>30% discount on every travel</li>
                                    <li>30% cashback on every refer</li>
                                    <li>10% discount on flight booking</li>
                                    <li>40% discount on booking guides</li>
                                </ul>
                                <div class="pricingTable-signup">
                                    <a href="#">Sign Up</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;