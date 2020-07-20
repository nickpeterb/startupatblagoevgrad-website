import React from 'react';
import './App.css';

import StartUPNav from './components/StartUPNav.js';
import Masthead from './components/Masthead.js';
import About from './components/About.js';
import Testimonials from './components/Testimonials.js';
import Events from './components/Events.js';

function App() {
  return (
    <div className="App">
      
    <StartUPNav />

    <Masthead />

    <About />

    <Testimonials />  

    <Events />

    <div className="extra-space" style={{height:"60vh"}}></div>

    </div>
  );
}

export default App;
