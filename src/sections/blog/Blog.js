/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import blogGrid from '../../assets/data/blogGrid';
import headerIcon from '../../assets/images/lg.png';
import SectionHeader from '../../components/SectionHeader';
import BlogItem from './BlogItem';

const Blog = () => (
    <div className="blog_area bg_img pb-60 pt-80">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title center mb-5">
                        <SectionHeader
                            icon={headerIcon}
                            smallHeading="POPULAR BLOG"
                            mainHeading="Latest Update Coronavirus"
                            desc="The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Also the symptoms may appear 2-14 days after exposure."
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="blog_list container curosel-style">
                    {/* <!-- Single Blog --> */}
                    <div className="col-md-12">
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            breakpoints={{
                                576: {
                                    slidesPerView: 1,
                                },

                                768: {
                                    slidesPerView: 2,
                                },

                                992: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {blogGrid.map((item, index) => (
                                <SwiperSlide key={item.id}>
                                    <BlogItem
                                        title={item.title}
                                        thumb={item.thumb}
                                        meta={item.meta}
                                        desc={item.desc}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Blog;
