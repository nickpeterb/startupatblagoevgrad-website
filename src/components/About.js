import React from 'react';

import './styles/About.css';

const aboutText = {
    "title": {
        "en": "About Us",
        "bg": "За Нас"
    },
    "body": {
        "en": "StartUP@Blagoevgrad is a student club in the American University in Bulgaria, that specializes in the organization of different entrepreneurial events. The focus of these events is to bring together both up-and-coming entrepreneurs and experts in the respective fields, and ambitious students, who want to know how challenging the journey to have a reputable business actually is. We try our best to provide our attendees with a clear idea of the challenges and wins that follow those who have set course on the entrepreneurial path.",
        "bg": "StartUP@Blagoevgrad е студентски клуб в Американския Университет в България, който специализита в организацията на различни предпиемачески събития. Фокуса на тези събития е да събере игряващи предприемачи, както и експрети в определените сфери, и амбициозни студенти, които искат да знаят колко всъщност е труден пътя към това, да създадеш успяващ бизнес. Екипът на StartUP@Blagoevgrad се старае да предостави на присъстващите ясна идея за трудностите и победите на тези, които са тръгнали по пътя към предприемачеството."
    }
}

export default function About(props) {
    return (
        <div className="about" >
            <div className="container" style={{paddingTop:"2em", paddingBottom:"2em"}}>
                <div className="row align-items-center">
                    <div className="col-md">
                        <h2 className="about-title text-center"><span>{aboutText.title[props.lang]}</span></h2>

                        <p className="about-body">{aboutText.body[props.lang]}</p>

                        {/*<div className="row text-center" >
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
                        </div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}