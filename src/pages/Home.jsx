import React from 'react';
import Header from '..//components/Header/Header'
import Article from '..//components/Article/Article'
import ContentText from '..//components/ContentText/ContentText';
import ContactSection from '..//components/ContactSection/ContactSection'
import ContentFoto from '..//components/ContentFoto/ContentFoto';
import NavButton from '..//components/NavButton/NavButton'

import Footer from '..//components/Footer/Footer';

export default function Home() {
  return (
  <>
    <Header name="home" />
    <Article name="home" />
    <ContentText />
    <NavButton />
    <ContactSection />
    <ContentFoto fotoKey="home_page_foto"></ContentFoto>
    <Footer /> 
  </> 
  );
}
