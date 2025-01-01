import React from 'react'; 
import './Foto.css'; 

export default function Foto({ src, date, onClick }) { 
    return (
     <div className="foto" onClick={onClick}> 
        <img src={src} alt='foto' />
        <p>{date}</p>
     </div>
    ); 
}