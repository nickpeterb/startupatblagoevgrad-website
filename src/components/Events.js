import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './styles/Events.css';

import speaker from '../images/events/speaker.jpg';
import crowd from '../images/events/crowd.jpg';
import joshua from '../images/events/joshua.jpg';
import weekend2019 from '../images/events/weekend-2019.jpg';
import lightbulb from '../images/events/lightbulb.jpg';
import ferrosWin from '../images/events/ferros-win.jpg';
import groupDiscussion from '../images/events/group-discussion.jpg';

const eventsText1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nunc sem, accumsan in sem vel, imperdiet maximus lorem. Vivamus pulvinar odio id tortor venenatis, id pulvinar nisi convallis. Vivamus sed tortor porttitor, sagittis dolor ut, facilisis ipsum. Aenean lobortis, tellus ut rutrum placerat, ligula leo imperdiet metus, vitae congue lacus orci sed orci. Ut viverra mi in mi egestas semper et a turpis.";

function Slides(props) {
    return (
        <Carousel interval={null}>
            {props.imgs.map((img, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={img}
                    alt={`Slide Number ${index+1}`}
                  />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default function Events() {
    return (
        <div className="events">
            <h1 className="events-title text-center"><span>Events</span></h1>

            <section>
                <div className="bg-wrap">
                    <div className="bg" style={{ backgroundImage: `url(${crowd})` }}></div>
                </div>
            </section>

            {/*<div className="bg" style={{ backgroundImage: `url(${crowd})` }}></div>*/}

            <div className="flex-container">
                <div className="row">
                    <div className="col-sm">
                        <h2 style={{ fontWeight: "400" }}>StartUP <span style={{ color: "#ec7510" }}>Conference</span></h2>
                        <div className="events-body">{eventsText1}</div>
                    </div>
                    <div className="col-xs relative-lg m-auto">
                        <img src={lightbulb} alt="" className="conf-img" />
                    </div>
                </div>
            </div>

            <section>
                <div className="bg-wrap">
                    <div className="bg" style={{ backgroundImage: `url(${speaker})` }}></div>
                </div>
            </section>

            <div className="flex-container" >
                <div className="row">
                    <div className="col-xs relative-lg m-auto">
                        <div className="video-wrapper">
                            <iframe title="video-weekend2019" className="video-weekend2019" width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/rwtviNEwc4Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                        </div>
                    </div>
                    <div className="col-md">
                        <h2 style={{ fontWeight: "400" }}>StartUP <span style={{ color: "#ce1c63" }}>Weekend</span></h2>
                        <div className="events-body">{eventsText1}</div>
                    </div>

                </div>

            </div>

            <section>
                <div className="bg-wrap">
                    <div className="bg" style={{ backgroundImage: `url(${joshua})` }}></div>
                </div>
            </section>

            <div className="flex-container">
                <div className="row">
                    <div className="col-md">
                        <h2 style={{ fontWeight: "400" }}>Още Нещо <span style={{ color: "#2cb3ab" }}>Яко</span></h2>
                        <div className="events-body">{eventsText1}</div>
                    </div>

                    <div className="col-xs relative-lg m-auto">
                        <div className="slides">
                            <Slides imgs={[ferrosWin, groupDiscussion]} />
                        </div>   
                    </div>
                </div>
            </div>

            <section>
                <div className="bg-wrap">
                    <div className="bg" style={{ backgroundImage: `url(${weekend2019})` }}></div>
                </div>
            </section>
        </div>
    );
}