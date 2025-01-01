
import React from 'react';
import { createPortal } from 'react-dom';
import { useRef, useEffect } from 'react';
import './Foto.css';

export default function Modal({ children, open }) { 
    const dialog = useRef()

    useEffect(() => {
        if(open) {
            dialog.current.showModal()
            }
        else {
            dialog.current.close()
        }
    }, [open]) 

   return createPortal (
    <dialog 
    ref={dialog} 
    className='dialog'> 
    {children} 
    </dialog>,
    document.getElementById('modal')
   )
}
   
/*export default function Modal({ src, alt, onClose }) { 
    return ( 
         <div className="modal" 
        onClick={onClose}> 
        <div className="modal-content" 
        onClick={e => e.stopPropagation()}> 
        <span className="close" onClick={onClose}>&times;</span> 
        <img src={src} alt={alt} /> 
        </div> 
        </div> ); }
        */