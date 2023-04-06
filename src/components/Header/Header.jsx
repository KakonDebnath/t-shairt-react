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
    ]
    return (
        <header className='bg-red-300 mb-10'>
            <div>
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