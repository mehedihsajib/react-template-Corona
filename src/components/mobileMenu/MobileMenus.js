/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import menuData from './menuData';
import SubMenu from './SubMenu';

const Nav = styled.div`
    background-color: #003569;
    color: #fff;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavLogo = styled.div`
    font-size: 25px;
    color: #fff;
    margin-left: 30px;

    .logo {
        font-weight: 600;
    }
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 30px;
`;

const SidebarNav = styled.nav`
    background-color: #003569;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    right: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const MobileMenu = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav className="d-lg-none">
                    <NavLogo>
                        <Link className="logo" to="/">
                            Corona
                        </Link>
                    </NavLogo>
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to="#">
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </NavIcon>
                        {menuData.map((item, index) => (
                            <SubMenu item={item} key={index} />
                        ))}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default MobileMenu;
