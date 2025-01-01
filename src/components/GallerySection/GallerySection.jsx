import React from 'react';
import Modal from './Modal'
import {useState} from 'react'
import Foto from './Foto'; 
import './Foto.css';
import { images } from '../../data'

export default function GallerySection() {
   const [ modal, setModal ] = useState(false)
   const [selectedImage, setSelectedImage] = useState(null);

    function openModal (image){
        setSelectedImage(image)
        setModal(true)
    }

    return (
        <section >
            <h5 >Galleria</h5>
            <ul className='fotos_section' >
                {images.map((image, index) => (  
                <li key={index}> 
                <Foto 
                src={image.image} 
                date={image.date} 
                onClick={() => openModal(image)} />
                </li>
                ))}
            </ul>
            <Modal open={modal}>
            <button className="close-button" onClick={() => setModal(false)} >x</button>
            {/* Отображение выбранного изображения */}
            <div className="modal-foto" >{selectedImage && <img src={selectedImage.image} alt="Selected" />}  </div> 
            </Modal>
         </section>
 )
}



