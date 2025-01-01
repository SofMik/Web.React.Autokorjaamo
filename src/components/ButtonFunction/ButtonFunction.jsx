import React from 'react';
import './ButtonFunction.css';

export default function ButtonFunction( {onClick, children}) {
    return (
       <button 
        className="button" 
        onClick={onClick}> 
        {children} 
       </button> 
       ); 
      }



    

