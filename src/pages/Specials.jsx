import React from 'react';
import Header from '..//components/Header/Header'
import Article from '..//components/Article/Article'
import ContactSection from '..//components/ContactSection/ContactSection'
import Footer from '..//components/Footer/Footer';
import Content from '..//components/Content/Content'
import ContentFoto from '..//components/ContentFoto/ContentFoto';
import NavButton from '..//components/NavButton/NavButton'

export default function Specials() {
  return (
    <>
      <Header name="specials" />
      <Article name="specials" />
      <Content title="Renkaiden vaihto" /> 
      <Content title="Auton katsastus" /> 
      <Content title="Auton pesu" />
      <NavButton /> 
      <ContactSection />
      <ContentFoto fotoKey="specials_page_foto"></ContentFoto>
      <Footer /> 
    </> 
  );
}
