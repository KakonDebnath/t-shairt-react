import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ route }) => {
    return (
        <li className='py-2 px-3'>
            <NavLink
                to={`${route.path}`}
                className={({ isActive }) =>
                    isActive
                        ? "text-red-500"
                        : ""
                }
            >
                {route.name}
            </NavLink>
        </li>
    );
};

export default Navbar;