/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Pagination = () => (
    <div className="row">
        <div className="col-md-12">
            <div className="paginations">
                <ul className="page-numbers">
                    <li>
                        <span aria-current="page" className="page-numbers current">
                            1
                        </span>
                    </li>
                    <li>
                        <a className="page-numbers" href="#">
                            2
                        </a>
                    </li>
                    <li>
                        <a className="next page-numbers" href="#">
                            <FaArrowRight />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default Pagination;
