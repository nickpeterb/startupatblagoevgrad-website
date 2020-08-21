import React from 'react';

import './styles/Events.css';

import speaker from '../images/events/speaker.jpg';
import crowd from '../images/events/crowd.jpg';
import joshua from '../images/events/joshua.jpg';
import weekend2019 from '../images/events/weekend-2019.jpg';

const eventsText1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nunc sem, accumsan in sem vel, imperdiet maximus lorem. Vivamus pulvinar odio id tortor venenatis, id pulvinar nisi convallis. Vivamus sed tortor porttitor, sagittis dolor ut, facilisis ipsum. Aenean lobortis, tellus ut rutrum placerat, ligula leo imperdiet metus, vitae congue lacus orci sed orci. Ut viverra mi in mi egestas semper et a turpis.";

export default function Events() {
    return (
        <div className="events">
                <h1 className="events-title text-center"><span>Events</span></h1>

                <section>
                    <div className="bg-wrap">
                        <div className="bg" style={{backgroundImage: `url(${crowd})` }}></div>
                    </div>
                </section>

                <div className="container" style={{paddingTop:"2em", paddingBottom:"2em"}}>
                    <h2 style={{ fontWeight: "400" }}>StartUP <span style={{ color: "#ec7510" }}>Conference</span></h2>
                    <p className="events-body">{eventsText1}</p>
                </div>

                <section>
                    <div className="bg-wrap">
                        <div className="bg" style={{backgroundImage: `url(${speaker})` }}></div>
                    </div>
                </section>

                <div className="container" style={{paddingTop:"2em", paddingBottom:"2em"}}>
                    <h2 style={{fontWeight:"400"}}>StartUP <span style={{color:"#ce1c63"}}>Weekend</span></h2>
                    <p className="events-body">{eventsText1}</p>
                </div>

                <section>
                    <div className="bg-wrap">
                        <div className="bg" style={{backgroundImage: `url(${joshua})` }}></div>
                    </div>
                </section>

                <div className="container" style={{paddingTop:"2em", paddingBottom:"2em"}}>
                    <h2 style={{fontWeight:"400"}}>Още Нещо <span style={{color:"#2cb3ab"}}>Яко</span></h2>
                    <p className="events-body">{eventsText1}</p>
                </div>

                <section>
                    <div className="bg-wrap">
                        <div className="bg" style={{backgroundImage: `url(${weekend2019})` }}></div>
                    </div>
                </section>
        </div>
    );
}