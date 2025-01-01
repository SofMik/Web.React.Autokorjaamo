import React from 'react'; 
import './ContentFoto.css';
//import './ContentFotoText'
import {webfotos} from '.././../data'

export default function ContentFoto( {fotoKey, children} ) {
   const fotoSrc = webfotos[fotoKey];
   return (
   <>
       <section className="content_foto"> 
         <div>{children}</div>
         {fotoSrc && <img src={fotoSrc} alt="Content" className="content_foto_img" />}
         </section>
   </> 
   )
}
