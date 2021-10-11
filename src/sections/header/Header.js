import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/1.png';

const Header = () => {
    // States
    const [sitcky, setSticky] = useState(false);

    // Handler
    const stickyHandler = () => {
        if (window.scrollY >= 100) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    window.addEventListener('scroll', stickyHandler);

    return (
        <>
            <nav
                id="home"
                className={
                    sitcky
                        ? 'corona_main_menu active d-md-none d-lg-block d-sm-none d-none'
                        : 'corona_main_menu d-md-none d-lg-block d-sm-none d-none'
                }
            >
                <div className="corona_nav_manu">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="logo">
                                    <Link className="logo_img" to="/" title="corona">
                                        <img src={logo} alt="logo" />
                                    </Link>
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
                                                    <NavLink to="/landing-page">
                                                        Landing Page
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/about"> About</NavLink>
                                        </li>
                                        <li>
                                            <Link to="/prevention"> Prevention</Link>
                                        </li>
                                        <li>
                                            <Link href="/pages"> Pages</Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link to="/about">About</Link>
                                                </li>
                                                <li>
                                                    <Link to="/team-member">Team Member</Link>
                                                </li>
                                                <li>
                                                    <Link to="team-details.html">Team Details</Link>
                                                </li>
                                                <li>
                                                    <Link to="/faq">FAQ</Link>
                                                </li>
                                                <li>
                                                    <Link to="/contact">Contact</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/news">News </Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link to="/blog-grid">Blog Grid</Link>
                                                </li>
                                                <li>
                                                    <Link to="/blog-details">Blog Details</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact</Link>
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
        </>
    );
};

export default Header;
