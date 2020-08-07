import React from 'react';
import './App.css';

import NavBar from './components/NavBar.js';
import Masthead from './components/Masthead.js';
import About from './components/About.js';
import Testimonials from './components/Testimonials.js';
import Events from './components/Events.js';
import Speakers from './components/Speakers.js';
import Sponsors from './components/Sponsors.js';
import Team from './components/Team.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      
      <NavBar />
    
      <Masthead />
    
      <About />
    
      <Testimonials />  
    
      <Events />
    
      <Speakers />
    
      <Sponsors />
      
      <Team />

      <Contact />

    </div>
  );
}

export default App;
