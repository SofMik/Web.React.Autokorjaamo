
import React from 'react';
import { useState } from 'react';
//import List from '../List/List'
import List from '../List/List'
import ButtonFunction from '../ButtonFunction/ButtonFunction'
import './Form.css'

export default function Form() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [isDisabledEmail, setisDisabledEmail] = useState(true); 
    const [isCheckedEmail, setIsCheckedEmail] = useState(false);
    const [phone, setPhone] = useState('')
    const [isDisabledPhone, setisDisabledPhone] = useState(true); 
    const [isCheckedPhone, setIsCheckedPhone] = useState(false);
    const [number, setNumber] = useState('')
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
//  const [selectedItems, setSelectedItems] = useState([]);
    const [selectedDescriptions, setSelectedDescriptions] = useState([]); 
   
    const handleChangeInputEmail = (event) => {
        const value = event.target.value; 
        setEmail(value); 
            if (value.trim() === '') {
                setisDisabledEmail(true); 
            } 
            else { 
                setisDisabledEmail(false); 
            }
    }

    const handleChangeInputPhone = (event) => {
        const value = event.target.value; 
        setPhone(value); 
            if (value.trim() === '') {
                setisDisabledPhone(true); 
            } 
            else { 
                setisDisabledPhone(false); 
           }
    }

    function EmailCheckboxAlert() {
        if (isDisabledEmail) {
            alert('Ilmoita sähköpostisi');
        } 
    }; 
  
    function PhoneCheckboxAlert() {
        if (isDisabledPhone) {
            alert('Ilmoita puhelinumerosi');
        } 
    }; 

    function handleChangeCheckbox (event) {
        const { checked, id } = event.target;
            switch (id) { 
                case 'select_email': 
                    setIsCheckedEmail(checked);
                    break; 
                case 'select_phone': 
                    setIsCheckedPhone(checked);
                    break; 
                default:
                break; 
            }   
    } 

    const handleItemsChange = (updatedItems) => { 
        // setSelectedItems(updatedItems.filter(item => item.checked));
        const selectedDescriptions = updatedItems.filter(item => item.checked).map(item => item.description);
        setSelectedDescriptions(selectedDescriptions);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        if (!isCheckedEmail && !isCheckedPhone) { 
            alert('Valitsethan, miten otamme yhteyttä Sinuun');
        } 
        //checking by consol that is working
        else {
            let contactMethod = ''; 
                if (isCheckedEmail && isCheckedPhone) {
                    contactMethod = 'sähköpostitse, puhelimitse'; 
                } 
                else if (isCheckedEmail) { 
                    contactMethod = 'sähköpostitse'; 
                } 
                else if (isCheckedPhone) { 
                    contactMethod = 'puhelimitse'; 
                }
            console.log('Form submitted:', { 
                name, 
                surname,  
                email, 
                phone, 
                number,
                make,
                model,
                year,
                contactMethod,
             // selectedItems,
                selectedDescriptions
            } ); 
        // Здесь добавить логику для отправки данных формы на сервер или выполнения других действий
        };
    };
    return (
        <section>
            <h2 className="title-form">Täytä lomake ja otamme yhteyttä Sinuun 24 tunnin kuluessa!</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <div><h3 className="title-form-group">Omat tiedot:</h3></div>
                    <div className="form-group">
                        <input 
                            className="input" 
                            type="text" 
                            name="name" 
                            placeholder="Nimi" 
                            id="input_name" 
                            onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <input  
                            className="input"
                            type="text" 
                            name="surname"
                            placeholder="Sukunimi"
                            onChange={(event) => setSurname(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input 
                        className="input" 
                        type="email" 
                        name="email" 
                        placeholder="Sähköposti" 
                        onChange={(event) => handleChangeInputEmail(event, setEmail)}/>
                    </div>
                    <div className="form-group">
                        <input 
                            className="input"
                            type="tel" 
                            name="phone"
                        placeholder="Puhelin" 
                        onChange={(event) => handleChangeInputPhone(event, setPhone)}/>
                    </div>
                    <h3 className="title-form-group">Auton tiedot:</h3>
                    <div className="form-group">
                        <input 
                            className="input" 
                            type="text"
                            name="number" 
                            placeholder="Rekisteritunnus" 
                            onChange={(event) => setNumber(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input 
                            className="input" 
                            type="text" 
                            name="make" 
                            placeholder="Merkki" 
                            onChange={(event) => setMake(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input  
                            className="input" 
                            type="text" 
                            name="model" 
                            placeholder="Malli" 
                            onChange={(event) => setModel(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input  
                            className="input" 
                            type="text" 
                            name="year" 
                            placeholder="Käyttöönottovuosi" 
                            onChange={(event) => setYear(event.target.value)}/>
                    </div>
                    <h3 className="title-form-group">Valitse palvelu:</h3>
                        <List onItemsChange={handleItemsChange} />
                    <div><h3 className="title-form-group">Odotan yhteydenottoa:</h3></div>
                    <div className="form-group_select_section">
                        <div className="form-group_select">
                            <input 
                                type="checkbox" 
                                name="isCheckedEmail" 
                                id="select_email" 
                                onChange={handleChangeCheckbox} 
                                onMouseEnter={EmailCheckboxAlert}
                            />
                            <label htmlFor="select_email">sähköpostitse</label>
                        </div>
                        <div className="form-group_select">
                            <input     
                                type="checkbox"
                                name="isCheckedPhone" 
                                id="select_phone" 
                                onChange={handleChangeCheckbox}
                                onMouseEnter={PhoneCheckboxAlert}
                            />
                            <label htmlFor="select_phone">puhelimitse</label>
                        </div>
                    </div>
               <ButtonFunction onClick={handleSubmit}>Lähetä</ButtonFunction>
                </form>
        </section>
        )
}


