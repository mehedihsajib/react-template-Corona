import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/1.png';

const Header = () => (
    <nav className="corona_main_menu d-md-none d-lg-block d-sm-none d-none">
        <div className="corona_nav_manu">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div className="logo">
                            <Link className="logo_img" to="/" title="corona">
                                <img src={logo} alt="logo" />
                            </Link>
                            {/* <a className="logo_tranalte" href="index.html" title="corona">
                                <img src="assets/images/1.png" alt="" />
                            </a> */}
                        </div>
                    </div>
                    <div className="col-md-9">
                        <nav className="corona_menu">
                            <ul className="nav_scroll">
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                    <ul className="sub-menu">
                                        <li>
                                            <NavLink to="/">Home One</NavLink>
                                        </li>
                                        <li>
                                            <Link to="/home-two">Home Two</Link>
                                        </li>
                                        <li>
                                            <NavLink to="/landing-page">Landing Page</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink to="/about"> About</NavLink>
                                </li>
                                <li>
                                    <a href="prevention.html"> Prevention</a>
                                </li>
                                <li>
                                    <a href="#page"> Pages</a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="about.html">About</a>
                                        </li>
                                        <li>
                                            <a href="team.html">Team Member</a>
                                        </li>
                                        <li>
                                            <a href="team-details.html">Team Details</a>
                                        </li>
                                        <li>
                                            <a href="faq.html">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#news">News </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="blog.html">Blog Grid</a>
                                        </li>
                                        <li>
                                            <a href="blog-details.html">Blog Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="contact.html">Contact</a>
                                </li>
                            </ul>
                            <div className="corona_button ml-5">
                                <a href="/">Donate Now</a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </nav>
);

export default Header;
