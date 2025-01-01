import React from 'react';
import './Header.css';
import {articles} from '.././../data'

export default function Header( {name}) {
      const article = articles.find((article) => article.name === name);
        return (
            <>
            <header className="header" >
              <img  src= { article.image } alt=  { 'result' }   /> 
              <div>
                <h3 className='h3'> {article.title}</h3>
                <h2 className='h2'>AKO - AutoKorjaamO</h2>
              </div>
            </header>
            </>
        )
    }

/* 
class Header extends React.Component {
    constructor(props) {
        super(props);
        //Определяет начальное состояние компонента, где items инициализируются пустым массивом.
        this.state = { 
            articles: [],
            }
      }
      componentDidMount() {
        this.setState({ articles: articles });
      }

      render() {
        const { name } = this.props;
        const article = articles.find((article) => article.name === name);
         return (
            <>
             <section className='header' style={{backgroundColor:'beige'}}>
            
             <img className='header_img' src= { article.image } alt=  { 'result' }   /> 
        
            <div className='header_text'>
            <h3 className='h3'> {article.title}</h3>
            <h2 className='h2'>AKO - AutoKorjaamO</h2>
            </div>
            </section>
            </>
        )
        } 
     } 
     export default Header;
    */   

