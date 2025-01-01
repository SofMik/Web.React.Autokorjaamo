import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

export default function NavSection() {
  const location = useLocation();

  return (
    <div className='nav_section'>
      <nav className={`nav ${location.pathname === '/' ? 'active' : ''}`}>
        <Link to="/">Etusivu</Link>
      </nav>
      {/*//Если текущий путь URL (location.pathname) равен '/specials', то к классу nav добавляется ещё и класс active.*/}
      <nav className={`nav ${location.pathname === '/specials' ? 'active' : ''}`}>
        <Link to="/specials">Ajankohtaista</Link>
      </nav>
      <nav className={`nav ${location.pathname === '/services' ? 'active' : ''}`}>
        <Link to="/services">Palvelut</Link>
      </nav>
      <nav className={`nav ${location.pathname === '/gallery' ? 'active' : ''}`}>
        <Link to="/gallery">Galleria</Link>
      </nav>
      <nav className={`nav ${location.pathname === '/contact' ? 'active' : ''}`}>
        <Link to="/contact">Ota yhteyttä</Link>
      </nav>
    </div>
  );
}