import React from 'react';
//import Carousel from 'react-bootstrap/Carousel';

import './styles/Events.css';

import speaker from '../images/events/speaker.jpg';
import crowd from '../images/events/crowd.jpg';
import weekend2019 from '../images/events/weekend-2019.jpg';
import lightbulb from '../images/events/lightbulb.jpg';
//import joshua from '../images/events/joshua.jpg';
//import ferrosWin from '../images/events/ferros-win.jpg';
//import groupDiscussion from '../images/events/group-discussion.jpg';

const confText = "The biggest event that StartUP@Blagoevgrad hosts throughout the duration of the academic year is the StartUP Conference. The conference is a one-day-long conference, packed full of interesting lectures and workshops. The students are welcome to attend lectures given by a number of speakers, both up-and-coming and wildly experienced, to accumulate knowledge from the speakers’ experience.  Another aspect of the conference is the workshops, where the attendees are given the opportunity to put the knowledge that they were given throughout the day to use and to get a vague idea of how different fields of business.";
const weekendText = "The second big event that the club organizes is the StartUP Weekend. It is a 3-day-long event starting on Friday, where the participants are given 3 days to come up with an idea for a start-up idea and prepare everything to be presented by Sunday. The participants, divided into teams, have to come up with an original idea for a start-up, polish it out and present it in front of our jury, who then decide on who the 3 best ideas were. Throughout the duration of the weekend, the teams have mentors, who are there to help them анд ensure that their idea is more than ready to be seen by the judges."; 

/*function Slides(props) {
    return (
        <Carousel interval={null}>
            {props.imgs.map((img, index) => (
                <Carousel.Item key={index}>
                  <img
                    loading="lazy"
                    className="d-block w-100"
                    src={img}
                    alt={`Slide Number ${index+1}`}
                  />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}*/

export default function Events() {
    return (
        <div className="events">
            <h1 className="events-title text-center"><span>Events</span></h1>

            <section>
                <div className="bg-wrap">
                    <div className="bg" style={{ backgroundImage: `url(${crowd})` }}></div>
                </div>
            </section>

            <div className="flex-container">
                <div className="row">
                    <div className="col-md">
                        <h2 style={{ fontWeight: "400" }}>StartUP <span style={{ color: "#ec7510" }}>Conference</span></h2>
                        <div className="events-body">{confText}</div>
                    </div>
                    <div className="col-xs relative-lg m-auto">
                        <img loading="lazy" src={lightbulb} alt="" className="conf-img" />
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
                            <iframe loading="lazy" title="video-weekend2019" className="video-weekend2019" width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/rwtviNEwc4Q" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                        </div>
                    </div>
                    <div className="col-md">
                        <h2 style={{ fontWeight: "400" }}>StartUP <span style={{ color: "#ce1c63" }}>Weekend</span></h2>
                        <div className="events-body">{weekendText}</div>
                    </div>
                </div>
            </div>
            {/* 
            <section>
                <div className="bg-wrap">
                    <div className="bg" style={{ backgroundImage: `url(${joshua})` }}></div>
                </div>
            </section>

            <div className="flex-container">
                <div className="row">
                    <div className="col-md">
                        <h2 style={{ fontWeight: "400" }}>Още Нещо <span style={{ color: "#2cb3ab" }}>Яко</span></h2>
                        <div className="events-body">{weekendText}</div>
                    </div>

                    <div className="col-xs relative-lg m-auto">
                        <div className="slides">
                            <Slides imgs={[ferrosWin, groupDiscussion]} />
                        </div>   
                    </div>
                </div>
            </div>
            */}
            <section>
                <div className="bg-wrap">
                    <div className="bg" style={{ backgroundImage: `url(${weekend2019})` }}></div>
                </div>
            </section>
        </div>
    );
}