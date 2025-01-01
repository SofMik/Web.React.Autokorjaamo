import React from 'react'; 
import { cards } from '../../data';
import Card from './Card';
import './Card.css';

export default function Content({ title, children }) { 
    const card = cards.find((card) => card.title === title); 
   
    if (!card) { return <p>Not found</p>; } 
    return ( 
       <div>
            <Card 
                videoSrc={card.video} 
                title={card.title} 
                description={card.description} 
                link={card.link} 
                image={card.image} 
            /> 
                {children}
       </div>
    ); 
}
