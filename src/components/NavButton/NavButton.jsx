import React from 'react';
import './NavButton.css';
import { NavLink, useLocation } from 'react-router-dom';

export default function NavButton() {
    const location = useLocation();

    const handleClick = () => {
         window.scrollTo(0, 0);
    }

    return (
        <NavLink to="/contact" 
            className={`nav_button ${location.pathname === '/contact' ? 'contact' : ''}`}
            onClick={handleClick}>
            Ota yhteyttä
        </NavLink>
    ); 
}