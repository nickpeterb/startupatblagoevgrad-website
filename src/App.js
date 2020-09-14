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

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function StartUpApp(props) {
  return (
    <>
    <NavBar lang={props.lang}/>
    <Masthead lang={props.lang}/>
    <About lang={props.lang}/>  
    <Events lang={props.lang}/>
    <Speakers lang={props.lang}/>
    <Sponsors lang={props.lang}/>
    <Team lang={props.lang}/>
    <Testimonials lang={props.lang}/>
    <Contact lang={props.lang}/>
    </>
  );
}

function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
          <Route path="/en">
            <StartUpApp lang="en" />
          </Route>
          <Route path="/bg">
            <StartUpApp lang="bg" />
          </Route>
          <Route exact path="/">
            <Redirect to="/en" />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
