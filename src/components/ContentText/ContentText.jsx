import React from 'react'; 
import './ContentText.css';

export default function ContentText() {
   return (
         <div className="content_text">
            <h3 className="content_text_title">Tämän päivän tarjous:</h3>
             <ul className="content_text_ul" >
               <li className="content_text_li">Renkaiden vaihto<br></br>Hinta 19,00€</li>
               <li className="content_text_li">Auton vuosihuolto<br></br>Hinta 120,00€</li>
               <li className="content_text_li">Auton pesu<br></br>Hinta 35,00€</li>
            </ul>
         </div>
   )
}