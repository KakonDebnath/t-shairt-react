import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
    const routes = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "Order Review",
            path: "/review"
        },
        {
            id: 3,
            name: "About",
            path: "/about"
        },
        {
            id: 4,
            name: "Contact",
            path: "/contact"
        },
        {
            id: 5,
            name: "Grandpa",
            path: "/grandpa"
        },
    ]
    return (
        <header className='p-5'>
            <div className='flex justify-between items-center'>
                <Link to={'/'}>Logo</Link>
                <nav>
                    <ul className='flex'>
                        {
                            routes.map((route) => <Navbar key={route.id} route={route}></Navbar>)
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;