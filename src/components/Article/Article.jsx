import React from 'react';
import './Article.css';
import {articles} from '.././../data'

export default function Article({ name }) {
  const article = articles.find((article) => article.name === name);
  const styledDescription = article.description.split('AKO - AutoKorjaamO')
  
  .map((part, index, array) => ( 
  <React.Fragment key={index}> 
    {part} 
    {index < array.length - 1 && <span className="highlight">AKO - AutoKorjaamO</span>} 
  </React.Fragment> 
  ));

  return (
    <> 
      <div className="article" >{styledDescription}</div> 
    </> 
    ); 
   }

/*
  return (
    <>
    <p className="article">{article.description}</p>
    </>
)
}*/