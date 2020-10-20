import React from 'react';

import { Link } from "react-scroll";

import './styles/ConfMasthead.css'
export default function ConfMasthead() {
    return (
        <>
            <div className="conf-title-wrapper">
                <div className="container" style={{ height: "100vh" }}>
                    <div className="row h-100 align-items-center">
                        <div className="col text-center title-wrapper">
                            <h2 className="conf-masthead-title">StartUP@Blagoevgrad Conference 2020</h2>
                            <h1 className="conf-masthead-title2">TODAY VS. TOMORROW</h1>

                            <button
                                className="btn btn-primary btn-lg reg-button"
                                onClick={() => window.open('https://hopin.to/events/startup-blagoevgrad-online-conference-today-vs-tomorrow/', '_blank')}
                            >Register NOW
                            </button>

                            <Link
                                activeClass="active"
                                to="conf-about"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                className="btn btn-primary btn-lg reg-button"
                                style={{backgroundColor:"grey", borderColor:"grey", fontSize:"0.5em"}}
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="conf-masthead text-center"></div>
        </>
    );
}