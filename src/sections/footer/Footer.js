import React from 'react';
import footerLogo from '../../assets/images/1.png';
import shapeIcon1 from '../../assets/images/boy1.png';
import shapeIcon3 from '../../assets/images/boy2.png';
import shapeIcon2 from '../../assets/images/boy3.png';
import shapeIcon4 from '../../assets/images/boy4.png';
import thumb1 from '../../assets/images/recent1.jpg';
import thumb2 from '../../assets/images/recent2.jpg';
import FooterShapes from './FooterShapes';
import ImportantLinks from './ImportantLinks';
import RecentUpdate from './RecentUpdate';
import SocialLinks from './SocialLinks';
import SocialMedia from './SocialMedia';

const Footer = () => (
    <footer className="footer_area bg_color pt-80 pb-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="single_footer">
                        <div className="single_footer_title pb-2">
                            <img src={footerLogo} alt="logo" />
                        </div>
                        <div className="single_footer_text">
                            <p>
                                The point of using Lorem Ipsum is that it has a more-or-less normal
                                distrition of letters, as opposed to using{' '}
                            </p>
                        </div>
                        <SocialLinks fbLink="/" twitterLink="/" instaLink="/" linkedinLink="/" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <ImportantLinks
                        title="Important Link"
                        link1="/"
                        link2="/"
                        link3="/"
                        link4="/"
                        linkText1="App Development"
                        linkText2="App Marketing"
                        linkText3="IOS Development"
                        linkText4="Android Development"
                    />
                </div>
                <div className="col-lg-3 col-md-6">
                    <RecentUpdate
                        title="Recent Update"
                        thumb={thumb1}
                        text="Caring for someone at home"
                        meta="April 11. 2020"
                    />
                    <RecentUpdate
                        thumb={thumb2}
                        text="hat to Do if You are feeling"
                        meta="April 23. 2020"
                    />
                </div>
                <div className="col-lg-3 col-md-6">
                    <SocialMedia
                        title="Social Media"
                        text="Lorem ipsum dolor sit amet, consetur acing."
                        address="20/10 Panthapath, Dhaka."
                        telephone="+323 254 123"
                        email="example@gmail.com"
                    />
                </div>
            </div>
        </div>
        {/* <!-- Footer Shape Image --> */}
        <FooterShapes shapeIcon={shapeIcon1} className="cloud1" />
        <FooterShapes shapeIcon={shapeIcon2} className="cloud2" />
        <FooterShapes shapeIcon={shapeIcon3} className="cloud3" />
        <FooterShapes shapeIcon={shapeIcon4} className="cloud4" />
    </footer>
);

export default Footer;
