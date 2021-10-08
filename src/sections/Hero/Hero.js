import React from 'react';
import CountUp from 'react-countup';
import thumb from '../../assets/images/01.png';

const Hero = () => (
    <>
        <div className="slider_area d-flex align-items-center" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="slider_content">
                            <div className="slider_text">
                                <div className="slider_thumb ">
                                    <div className="slider_thumb_inner rotateme">
                                        <img src={thumb} alt="thumb" />
                                    </div>
                                </div>
                                <div className="slider_text_inner pt-400">
                                    <h1>Prevention of Corona Virus Disease</h1>
                                    <h2>
                                        Confirmed Corona Cases :&#160;
                                        <CountUp end={1067454} className="cass_active" />
                                    </h2>
                                    <ul>
                                        <li>All Cases: 1067454</li>
                                        <li>Recovered cases : 30504</li>
                                        <li>Deaths: 45004</li>
                                    </ul>
                                </div>
                                <div className="Slider_button pt-30">
                                    <div className="button ">
                                        <a href="/" className="button-normal">
                                            Find A Doctor
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Hero;
