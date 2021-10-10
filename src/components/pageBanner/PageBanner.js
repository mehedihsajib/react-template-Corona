import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PageBanner = ({ heading, currentPage }) => (
    <div className="breatcome_area d-flex align-items-center">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breatcome_title pt-50">
                        <div className="breatcome_title_inner pb-2">
                            <h2>{heading}</h2>
                        </div>
                        <div className="breatcome_content">
                            <ul>
                                <li>
                                    <Link to="/">
                                        Home
                                        <FaChevronRight className="icon" />
                                    </Link>
                                    <i className="fa fa-angle-right" />{' '}
                                    <Link href="/pages">
                                        Pages
                                        <span>
                                            <FaChevronRight className="icon" />
                                        </span>
                                    </Link>
                                    <i className="fa fa-angle-right" /> <span>{currentPage}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default PageBanner;
