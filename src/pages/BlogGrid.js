/* eslint-disable no-unused-vars */
import React from 'react';
import blogGrid from '../assets/data/blogGrid';
import PageBanner from '../components/pageBanner/PageBanner';
import Pagination from '../components/pagination/Pagination';
import BlogItem from '../sections/blog/BlogItem';

const BlogGrid = () => (
    <>
        <PageBanner heading="Blog" currentPage="Blog Grid" />
        <div className="blog-grid-wraper pt-80 pb-80">
            <div className="container">
                <div className="row">
                    {blogGrid.map((item, index) => (
                        <div className="col-lg-4 col-md-6">
                            <BlogItem
                                thumb={item.thumb}
                                meta={item.meta}
                                title={item.title}
                                desc={item.desc}
                            />
                        </div>
                    ))}
                </div>
                <Pagination />
            </div>
        </div>
    </>
);

export default BlogGrid;
