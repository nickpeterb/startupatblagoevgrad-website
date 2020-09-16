import React from 'react';

import './styles/Masthead.css';

export default function Masthead() {
    return (
        <div className="masthead">
        <div className="container" style={{height:"100vh"}}>
          <div className="row h-100 align-items-center">
            <div className="col text-center title-wrapper">
              <h1 className="masthead-title">
               <span style={{color:"#aa1638"}}>STARTUP.</span>
               <br/>
               <span style={{color:"#e45315"}}>BUILD.</span>
               <br/>
               <span style={{color:"#2cb3ab"}}>SUSTAIN.</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
}