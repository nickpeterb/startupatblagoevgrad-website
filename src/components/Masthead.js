import React from 'react';

import './styles/Masthead.css';

export default function Masthead() {
    return (
        <div className="masthead">
        <div className="container" style={{height:"100vh"}}>
          <div className="row h-100 align-items-center">
            <div className="col text-center title-wrapper">
              <h1 className="masthead-title">
               STARTUP.<br/>BUILD.<br/>SUSTAIN.
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
}