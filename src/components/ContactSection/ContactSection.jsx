import React  from "react";
import './ContactSection.css'

export default function ContactSection() { 
  /*    
const e = React.createElement
return e(
    'section',
    { className: 'contact_section' },
     null, 
     [
        e('p', {className: 'p-contact' }, 'Y-tunnus 1234567-8'),
        e('p', {className: 'p-contact', style: {color: 'red'} }, 
            'Email: ',
            e('a', {className: 'link', href: 'mailto:info@ako.fi' }, 'info@ako.fi'),
         ),
        e('p', {className: 'p-contact'},
            'Puhelin: ',
           e('a', {className: 'link', href: 'tel:+3580000000'}, '+358 000 000'),
        ),
        e('p', {className: 'p-contact' }, 'Osoite: Rengaskatu 3,'),
        e('p', {className: 'p-contact' }, '00970 HELSINKI'),
        e('p', {className: 'p-contact' }, 'Ma-Pe 9.00-18.00'),
        e('p', {className: 'p-contact' }, 'La 10.00-16.00'),
     ]
    )
}
*/
   return (
    <>
        <section className="contact_section">
            <span><h2 className="span">AKO - AutoKorjaamO</h2></span>
            <p className="p-contact">Y-tunnus 1234567-8</p> 
            <p className="p-contact">Email:<a className='link' href="mailto:info@ako.fi"> info@ako.fi</a></p> 
            <p className="p-contact">Puhelin:<a className='link' href="tel:+3580000000"> +358 000 000</a></p> 
            <p className="p-contact">Osoite: Rengaskatu 3,</p>  
            <p className="p-contact"> 00970 HELSINKI</p> 
            <p className="p-contact">Ma-Pe 9.00-18.00</p> 
            <p className="p-contact">La 10.00-16.00</p>
        </section>
        </>
     )
}
