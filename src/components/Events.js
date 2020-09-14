import React from 'react';

import './styles/Events.css';

import speaker from '../images/events/speaker.jpg';
import crowd from '../images/events/crowd.jpg';
import weekend2019 from '../images/events/weekend-2019.jpg';
import lightbulb from '../images/events/lightbulb.jpg';

const eventsText = {
    "title":{
        "en": "Events",
        "bg": "Събития"
    },
    "conf": {
        "en": "Conference",
        "bg": "Конференция"
    },
    "weekend": {
        "en": "Weekend",
        "bg": "Уикенд"
    },
    "confText": {
        "en": "The biggest event that StartUP@Blagoevgrad hosts throughout the duration of the academic year is the StartUP Conference. The conference is a one-day-long conference, packed full of interesting lectures and workshops. The students are welcome to attend lectures given by a number of speakers, both up-and-coming and wildly experienced, to accumulate knowledge from the speakers’ experience.  Another aspect of the conference is the workshops, where the attendees are given the opportunity to put the knowledge that they were given throughout the day to use and to get a vague idea of how different fields of business.",
        "bg": "Най-голямото събитие, което StartUP@Blagoevgrad организира през академичната година е StartUP Конференцията. Конференцията трае един ден и е пълна с интересни лекии и уъркшопове.Студентите могат да подетят лекции проведени от няколко говорителя, експерти и все още изгряващи, за да съберат знания от преживяваниета на говорителите. Друг аспект на конференцията са уъркшоповете, където посетителите имат върможността да използват знанията, които са събрани през деня, и да получат малка представа от това как работят различните сфери в бизнеса."
    },
    "weekendText": {
        "en": "The second big event that the club organizes is the StartUP Weekend. It is a 3-day-long event starting on Friday, where the participants are given 3 days to come up with an idea for a start-up idea and prepare everything to be presented by Sunday. The participants, divided into teams, have to come up with an original idea for a start-up, polish it out and present it in front of our jury, who then decide on who the 3 best ideas were. Throughout the duration of the weekend, the teams have mentors, who are there to help them and ensure that their idea is more than ready to be seen by the judges.",
        "bg": "Второто събитие, което клуба организира, е StartUp Уикенд. Това е тридневно събитие, започващо в петък, в което участниците разполагат с 3 дни да създадат идея за старт-ъп, както и да се приготвят да презентират идеята си в неделя. Участниците, разделени в отбори, трябва да измислят оригинална идея, да я осъвършенстват и да я презентират пред жури, което избира трите най-добри идеи. По време на уикенда, отборите имат ментори, които да им асистират, за да може идеите на отборите да са повече от готови да бъдат представени пред журито.                                                                                                                                                       "
    }
}

export default function Events(props) {
    return (
        <div className="events">
            <h1 className="events-title text-center"><span>{eventsText.title[props.lang]}</span></h1>

            <section>
                <div className="bg-wrap">
                    <div className="bg" style={{ backgroundImage: `url(${crowd})` }}></div>
                </div>
            </section>

            <div className="flex-container">
                <div className="row">
                    <div className="col-md">
                        <h2 style={{ fontWeight: "400" }}>StartUP <span style={{ color: "#ec7510" }}>{eventsText.conf[props.lang]}</span></h2>
                        <div className="events-body">{eventsText.confText[props.lang]}</div>
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
                        <h2 style={{ fontWeight: "400" }}>StartUP <span style={{ color: "#ce1c63" }}>{eventsText.weekend[props.lang]}</span></h2>
                        <div className="events-body">{eventsText.weekendText[props.lang]}</div>
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