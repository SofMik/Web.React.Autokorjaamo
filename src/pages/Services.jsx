import React from 'react';
import Header from '..//components/Header/Header'
import Article from '..//components/Article/Article'
import PriseList from '..//components/PriseList/PriseList'
import ContactSection from '..//components/ContactSection/ContactSection'
import ContentFoto from '..//components/ContentFoto/ContentFoto';
import Footer from '..//components/Footer/Footer';
import NavButton from '..//components/NavButton/NavButton'

export default function Services() {
  return (
    <>
      <Header name="services" />
      <Article name="services" />
      <PriseList />
      <NavButton />
      <ContactSection />
      <ContentFoto fotoKey="services_page_foto"></ContentFoto>
      <Footer /> 
    </> 
  );
}
