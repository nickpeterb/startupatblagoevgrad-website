import React from 'react';

import './styles/About.css';

//import armelaPrizePic from '../images/armela-prize.jpg';

const aboutText = "StartUP@Blagoevgrad is a student club in the American University in Bulgaria, that specializes in the organization of different entrepreneurial events. The focus of these events is to bring together both up-and-coming entrepreneurs and experts in the respective fields, and ambitious students, who want to know how challenging the journey to have a reputable business actually is. We try our best to provide our attendees with a clear idea of the challenges and wins that follow those who have set course on the entrepreneurial path."

export default function About() {
    return (
        <div className="about" >
            <div className="container" style={{paddingTop:"2em", paddingBottom:"2em"}}>
                <div className="row align-items-center">
                    <div className="col-md">
                        <h2 className="about-title text-center"><span>About Us</span></h2>

                        <p className="about-body">{aboutText}</p>

                        <div className="row text-center" >
                            <div className="col">
                                <h1><span style={{color:"#ec7510"}}>15</span></h1>
                                <h3>events</h3>
                            </div>

                            <div className="col">
                                <h1><span style={{color:"#ce1c63"}}>40</span></h1>
                                <h3>bla bla</h3>
                            </div>

                            <div className="col">
                                <h1><span style={{color:"#2cb3ab"}}>150</span></h1>
                                <h3>bla bla</h3>
                            </div>
                        </div>
                    </div>
                    {/*<div className="col-md">
                        <img className="about-pic" src={armelaPrizePic} alt=""></img>
                    </div>*/}
                </div>
            </div>
        </div>
    );
}