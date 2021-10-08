import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ thumb, meta, title, desc }) => (
    <div className="single_blog mb-4">
        <div className="single_blog_inner">
            <div className="single_blog_thumb">
                <img src={thumb} alt="thumbnail" />
            </div>
            <div className="single_blog_content pl-4 pr-4 pb-3">
                <div className="single_blog_meta">
                    <div className="single_blog_meta_date pr-2">
                        <span>{meta}</span>
                    </div>
                </div>
                <div className="single_blog_title pt-2 pb-3">
                    <h4>
                        <Link to="/">{title}</Link>
                    </h4>
                </div>
                <div className="single_blog_text">
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    </div>
);

export default BlogItem;
