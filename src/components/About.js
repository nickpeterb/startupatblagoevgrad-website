import React from 'react';

import './About.css';
import armelaPrizePic from '../assets/armela-prize.png';

const aboutText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nunc sem, accumsan in sem vel, imperdiet maximus lorem. Vivamus pulvinar odio id tortor venenatis, id pulvinar nisi convallis. Vivamus sed tortor porttitor, sagittis dolor ut, facilisis ipsum. Aenean lobortis, tellus ut rutrum placerat, ligula leo imperdiet metus, vitae congue lacus orci sed orci. Ut viverra mi in mi egestas semper et a turpis. In egestas est eu dui finibus porttitor.";

export default function About() {
    return (
        <div className="about" >
            <div className="container" style={{marginTop:"2em", marginBottom:"2em"}}>
                <div className="row align-items-center">
                    <div className="col-sm">
                        <h2><span className="about-title">Who We Are</span></h2>
                        <p>{aboutText}</p>

                        <div className="row" style={{margin:"auto"}}>
                            <div className="col">
                                <h1>15</h1>
                                <h3>events</h3>
                            </div>

                            <div className="col">
                                <h1>40</h1>
                                <h3>bla bla</h3>
                            </div>

                            <div className="col">
                                <h1>150</h1>
                                <h3>bla bla</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <img className="about-pic" src={armelaPrizePic} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    );
}