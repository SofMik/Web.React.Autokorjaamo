import React from 'react';
import Header from '..//components/Header/Header'
import GallerySection from '..//components/GallerySection/GallerySection'
import Article from '..//components/Article/Article'
import Footer from '..//components/Footer/Footer'

export default function Gallery() {
  return (
    <>
      <Header name="gallery" />
      <Article name="gallery" />
      <GallerySection />
      <Footer /> 
    </> 
  );
}

