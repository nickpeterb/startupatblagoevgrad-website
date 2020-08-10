import React, { Suspense } from 'react';
import './App.css';

import NavBar from './components/NavBar.js';
import Masthead from './components/Masthead.js';
import About from './components/About.js';
import Testimonials from './components/Testimonials.js';
import Events from './components/Events.js';
//import Speakers from './components/Speakers.js';
import Sponsors from './components/Sponsors.js';
//import Team from './components/Team.js';
import Contact from './components/Contact.js';

const Speakers = React.lazy(() => import('./components/Speakers.js'));
const Team = React.lazy(() => import('./components/Team.js'));
/*
function Loading() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}*/

function App() {
  return (
    <div className="App">
      
      <NavBar />
    
      <Masthead />
    
      <About />
    
      <Testimonials />  
    
      <Events />
    
      <Suspense fallback={<div>Loading...</div>}>
        <Speakers />
      </Suspense>
    
      <Sponsors />
      
      <Suspense fallback={<div>Loading...</div>}>
        <Team />
      </Suspense>

      <Contact />

    </div>
  );
}

export default App;
