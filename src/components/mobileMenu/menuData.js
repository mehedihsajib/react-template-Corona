import React from 'react';
import * as RiIcons from 'react-icons/ri';

const menuData = [
    {
        title: 'Home',
        path: '/home',
        // icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Home One',
                path: '/home1',
                // icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Home Two',
                path: '/home2',
                // icon: <IoIcons.IoIosPaper />,
            },
        ],
    },

    {
        title: 'About',
        path: '/about',
        // icon: <FaIcons.FaCartPlus />,
    },
    {
        title: 'Prevention',
        path: '/prevention',
        // icon: <IoIcons.IoMdPeople />,
    },
    {
        title: 'Pages',
        path: '/',
        // icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'About',
                path: '/about',
                // icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav',
            },
            {
                title: 'Team Member',
                path: '/team-member',
                // icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav',
            },
            {
                title: 'Team Details',
                path: '/team-details',
                // icon: <IoIcons.IoIosPaper />,
            },
        ],
    },

    {
        title: 'News',
        path: '/news',
        // icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Blog Grid',
                path: '/blog-grid',
                // icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav',
            },
            {
                title: 'Blog Details',
                path: '/blog-details',
                // icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav',
            },
        ],
    },

    {
        title: 'Contact',
        path: '/contact',
        // icon: <IoIcons.IoMdHelpCircle />,
    },
];

export default menuData;
