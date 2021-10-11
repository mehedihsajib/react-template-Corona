import React, { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import styled from 'styled-components';

const ScrollTopWrapper = styled.div`
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 11111;

    button {
        border: none;
        width: 40px;
        height: 40px;
        background-color: #5fe60e;
        color: #fff;
        border-radius: 50%;
        transition: all 0.3s;
    }

    .visible {
        opacity: 1;
        display: block;
        background-color: red;
        color: #fff;
        transition: opacity 0.3s;
    }

    .invisible {
        opacity: 0;
    }
`;

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Handler
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behaviour: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <ScrollTopWrapper>
            <button
                className={isVisible ? 'd-block' : 'd-none'}
                type="button"
                onClick={scrollToTop}
            >
                <FaChevronUp />
            </button>
        </ScrollTopWrapper>
    );
};

export default ScrollTop;
