
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Specials from './pages/Specials'; 
import Services from './pages/Services'; 
import Gallery from './pages/Gallery'; 
import NavSection from './components/NavSection/NavSection';

export default function App() {
  return ( 
    <Router basename="/Web.React.Autokorjaamo">
      <div className="App"> 
        <NavSection /> 
        <main className='main'> 
          <Routes> 
            <Route path="/" element={<Home />} /> {/*way to component */}
            <Route path="/specials" element={<Specials />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> 
        </main> 
      </div> 
    </Router> 
  );
}