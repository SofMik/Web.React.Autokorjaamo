import React from 'react';
import './Footer.css';
import iconImage from './sm_icon.jpg'
export default function Footer() {
    return (
        <>
        <footer className="footer">
            <span>Y-tunnus 1234567-8</span>
            <span>©AKO - AutoKorjaamO 2024</span>
            <span>Website created by</span>
            <span>  <img  src= { iconImage } alt=  { 'SofMik' }   /> </span>
        </footer>
        </>
    )
}