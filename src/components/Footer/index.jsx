import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import CarA123 from '../assets/CarA123.png';
import fb from '../assets/fb1.png';
import intar from '../assets/inster.png';
import whatsapp from '../assets/whatsapp.png';
import linkdin from '../assets/linkdin.png';
import twitter from '../assets/twitter.png';


const Footer = () => {
    return (
        <footer>
            <div className="footer-wrap">
                <div className="container first_class">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <h3>About CaR_CRaFt</h3>
                            <p>Welcome to CaR_CRaFt, your premier destination for high-quality cars and automotive services.Stay updated with the latest news, events, and job opportunities in the automotive industry by subscribing to our newsletter today.</p>
                        </div>
                        <div className="input-group mb-3">
                          <input 
                              type="text" 
                             className="form-control" 
                              placeholder="Email Address" 
                               aria-label="Email Address" 
                             aria-describedby="basic-addon2" 
                            />
                             <span className="input-group-text" id="basic-addon2">Login</span>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="col-md-12">
                                <div className="standard_social_links">
                                    <div>
                                        <li>
                                            <a> <img id="fbb"src={fb}/></a>
                                        </li>
                                        <li >
                                            <a><img id="fbb"src={intar}/></a>
                                        </li>
                                        <li >
                                            <a><img id="fbb"src={whatsapp}/></a>
                                        </li>
                                        <li >
                                            <a><img id="fbb"src={linkdin}/></a>
                                        </li>
                                        <li >
                                            <a><img id="fbb"src={twitter}/></a>
                                        </li>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-md-12">
                                <h3 className="text-right">Stay Connected with CaR_CRaFt</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second_class">
                    <div className="container second_class_bdr">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="footer-logo">
                                    <a href="/home">
                                    <img src={CarA123} alt="CaR_CRaFt Logo" /></a>
                                </div>
                                <p>Your trusted partner for top-notch cars, car accessories, and automotive solutions. Find the perfect ride and services at CaR_CRaFt.</p>
                            </div>
                            <div className="col-md-2 col-sm-6">
                                <h3>Quick Links</h3>
                                <ul className="list-unstyled footer-links">
                                    <li><a id="flink" href="/home">Home</a></li>
                                    <li><a id="flink"href="/About">About Us</a></li>
                                    <li><a id="flink"href="#">Services</a></li>
                                    <li><a id="flink"href="#">Contact Us</a></li>
                                    <li><a id="flink"href="#" target="_blank">Terms &amp; Conditions</a></li>
                                    <li><a id="flink"href="#" target="_blank">Privacy Policy</a></li>
                                    <li><a id="flink"href="#">Sitemap</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <h3>Our Services</h3>
                                <ul className="list-unstyled footer-category">
                                    <li><a id="flink" href="#">New Cars</a></li>
                                    <li><a id="flink" href="#">Used Cars</a></li>
                                    <li><a id="flink" href="#">Car Accessories</a></li>
                                    <li><a id="flink" href="#">Car Maintenance</a></li>
                                    <li><a id="flink" href="#">Car Financing</a></li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <h3>CaR_CRaFt Events</h3>
                                <ul className="list-unstyled footer-links">
                                    <li><a id="flink" href="#">Upcoming Events</a></li>
                                    <li><a id="flink" href="#">Car Shows</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container-fluid">
                        <div className="copyright"> Copyright © 2023 CaR_CRaFt | All Rights Reserved by CaR_CRaFt, Inc.</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;