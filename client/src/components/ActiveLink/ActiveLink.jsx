import React from 'react';
import { NavLink } from "react-router-dom";

const ActiveLink = ({to, children}) => {
    return (

        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "active-link menu-item" : "menu-item"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;