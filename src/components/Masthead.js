import React from 'react';
import './Masthead.css';

import { Link } from "react-scroll";

export default function Masthead() {
    return (
        <div className="masthead">
        <div className="container" style={{height:"100vh"}}>
          <div className="row h-100 align-items-center">
            <div className="col text-center title-wrapper">
              <h1 className="masthead-title">
               STARTUP.<br/>BUILD.<br/>SUSTAIN.
              </h1>
              <button type="primary" className="btn btn-light">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Learn More
              </Link>
                
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}