import React from 'react';
import './App.css';

import StartUPNav from './components/StartUPNav.js';
import Masthead from './components/Masthead.js';
import About from './components/About.js';

function App() {
  return (
    <div className="App">
      
    <StartUPNav />

    <Masthead />

    <About />

    <div className="testimonials" style={{height:"60vh"}}></div>

    </div>
  );
}

export default App;
