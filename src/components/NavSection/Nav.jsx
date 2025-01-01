import React from 'react';
import './Nav.css';

export default function Nav({ children, isActive, ...props }) {
  return (
    <nav
      className={`nav ${isActive ? 'active' : ''}`} // Добавили базовый класс "nav" и активный класс "active" при необходимости
      {...props}
    >
      {children}
    </nav>
  );
}