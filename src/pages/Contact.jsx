import React from 'react';
import Header from '..//components/Header/Header'
import Article from '..//components/Article/Article'
import ContentFoto from '..//components/ContentFoto/ContentFoto';
import Form from '..//components/Form/Form'

import Footer from '..//components/Footer/Footer';

export default function Contact() {
  return (
    <>
      <Header name="contact" />
      <Article name="contact" />
      <Form />
      <ContentFoto fotoKey="contact_page_foto">
        <div className="content_foto_img"></div>
      </ContentFoto>
      <Footer /> 
    </> 
  );
}

