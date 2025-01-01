import React, { useState, useEffect } from 'react'; 
import './List.css'; 
import { items as initialItems } from '.././../data';

export default function List ({ onItemsChange }) {
  const [items, setItems] = useState([]);
  
  useEffect(() => { 
  setItems(initialItems); 
  }, []); //Пустой массив зависимостей означает, 
          // что этот useEffect вызывается только один раз 
          // после монтирования компонента
  const handleCheck = (event, id) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, checked: event.target.checked } : item
    );
    setItems(updatedItems);
    onItemsChange(updatedItems)
  };
    
  return (
    <>
      <section className='list_section'>
        <div className='list'>
          <ul>
            {/*Метод map для перебора массива items и рендеринга каждого элемента списка.*/ }
            {items.map(item => (
              <li key={item.id}>
                <input 
                  type="checkbox"
                  checked={item.checked} 
                  onChange={(event) => handleCheck(event, item.id)} 
                /> 
                {item.description} 
              </li>
            ))} 
            </ul>
        </div>
      </section>
          
          </>
  );
}

   