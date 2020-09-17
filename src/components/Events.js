import React from 'react';

import './styles/Events.css';

import speaker from '../images/events/speaker.jpg';
import crowd from '../images/events/crowd.jpg';
import weekend2019 from '../images/events/weekend-2019.jpg';
import lightbulb from '../images/events/lightbulb.jpg';

const eventsText = {
    "title":{
        "en": "How We Do It",
        "bg": "Какво Правим"
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
        "bg": "Най-голямото събитие, което StartUP@Blagoevgrad организира през академичната година е StartUP Конференцията. В продължението на един ден, събитието представя множество обучителни и мотивационни лекции под формата на презентации, както и бизнес „работилници“ (т.нар. workshops). По време на конферентната част, публиката може да посети лекциите, водени от установени експерти в различни сфери и вдъхновяващи предприемачи в началото на своето развитие, за да научи от първо лице повече за висините и падежите в бизнеса. По време на работилниците, участниците имат възможността да работят по практически бизнес казуси и да научат детайли за различни концепции и добри бизнес практики."
    },
    "weekendText": {
        "en": "The second big event that the club organizes is the StartUP Weekend. It is a 3-day-long event, taking place from Friday until Sunday, in which the participants are posed with the challenge to come up with an idea or a start-up. The participants, divided into teams, have to come up with an original business idea, polish it out and present it in front of a professional jury, who then decide on which 3 ideas and executions are the best. Throughout the duration of the weekend, the teams have mentors, who are there to help them and ensure that their idea is more than ready to be seen by the judges.",
        "bg": "Второто събитие, което клубът организира, е StartUP Уикенд. Събитието се състои в рамките на три дни, от петък до неделя, в които участниците, разделени в отбори, измислят оригинални стартъп идеи, усъвършенстват ги и ги презентират пред експертно жури. По време на Уикенда, видни ментори от българската и международна бизнес среда помагат на участниците чрез напътствия в различни аспекти в разработката на проектите им, за да гарантират качествено развитие на идеята и практическо предаване на знание."
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