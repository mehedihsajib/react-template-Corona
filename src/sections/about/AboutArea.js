import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import aboutImg1 from '../../assets/images/about1.jpg';
import aboutImg2 from '../../assets/images/about2.png';
import headerIcon from '../../assets/images/lg.png';

const AboutArea = () => (
    <>
        <div className="about_area bg_color pb-60 pt-80">
            <div className="container">
                <div className="row gy-4 gy-lg-0">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="single_about_thumb mb-4">
                            <img src={aboutImg1} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="section_title left pb-4">
                            <div className="section_title_thumb rotateme">
                                <img src={headerIcon} alt="" />
                            </div>
                            <div className="section_title_content pt-80">
                                <h5>ABOUT CORONA VIRUS</h5>
                                <h2>Corona Virus Is More Dangerous In The All World</h2>
                                <p>
                                    The most common symptoms of COVID-19 are fever, tiredness, and
                                    dry cough. Some patients may have aches and pains, nasal forest
                                    congestion, runny nose, sore throat or diarrhea.{' '}
                                </p>
                            </div>
                        </div>
                        <div className="single_about mb-2">
                            <div className="single_about_icon mr-2">
                                <FaCheckCircle className="icon" />
                            </div>
                            <div className="single_about_text">
                                <p>Once contaminated.</p>
                            </div>
                        </div>
                        <div className="single_about mb-2">
                            <div className="single_about_icon mr-2">
                                <FaCheckCircle className="icon" />
                            </div>
                            <div className="single_about_text">
                                <p>Hands can transfer the virus</p>
                            </div>
                        </div>
                        <div className="single_about mb-2">
                            <div className="single_about_icon mr-2">
                                <FaCheckCircle className="icon" />
                            </div>
                            <div className="single_about_text">
                                <p>The most symptoms COVID-19 fever</p>
                            </div>
                        </div>
                        <div className="about_button pt-3">
                            <div className="button">
                                <a href="/" className="button-round">
                                    More About
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="about_area bg_color pb-60 pt-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="section_title left pb-4">
                            <div className="section_title_thumb rotateme">
                                <img src={headerIcon} alt="" />
                            </div>
                            <div className="section_title_content pt-80">
                                <h5>ABOUT CORONA VIRUS</h5>
                                <h2>Corona Virus Is More Dangerous In The All World</h2>
                                <p>
                                    The most common symptoms of COVID-19 are fever, tiredness, and
                                    dry cough. Some patients may have aches and pains, nasal forest
                                    congestion, runny nose, sore throat or diarrhea.{' '}
                                </p>
                            </div>
                        </div>
                        <div className="single_about mb-2">
                            <div className="single_about_icon mr-2">
                                <FaCheckCircle className="icon" />
                            </div>
                            <div className="single_about_text">
                                <p>Once contaminated.</p>
                            </div>
                        </div>
                        <div className="single_about mb-2">
                            <div className="single_about_icon mr-2">
                                <FaCheckCircle className="icon" />
                            </div>
                            <div className="single_about_text">
                                <p>Hands can transfer the virus</p>
                            </div>
                        </div>
                        <div className="single_about mb-2">
                            <div className="single_about_icon mr-2">
                                <FaCheckCircle className="icon" />
                            </div>
                            <div className="single_about_text">
                                <p>The most symptoms COVID-19 fever</p>
                            </div>
                        </div>
                        <div className="about_button pt-3">
                            <div className="button">
                                <a href="/" className="button-round">
                                    More About
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="single_about_thumb mb-4">
                            <img src={aboutImg2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default AboutArea;
