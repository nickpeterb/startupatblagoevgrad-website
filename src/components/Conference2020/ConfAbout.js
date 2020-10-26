import React from 'react';

import './styles/ConfAbout.css';

export default function ConfAbout() {
    return (
        <div className="conf-about">
            <div className="container">
                <h2 className="conf-about-title text-center mb-5"><span>About the Event</span></h2>

                <div className="row align-items-center">
                    <div className="col-xl">
                        <div className="conf-about-text">
                            StartUP Conference is an annual format that brings together entrepreneurs and world-renowned business leaders to share their outlook on the path of success, diving deep into the ups and downs and the dos and don’ts of the journey through the business world.
                            <br />
                            <br />
                            This year, the ninth edition of the conference combines 16 inspiring guests under the topic “Today vs Tomorrow”. Through presentations, discussions, and interviews the conference will explore the innovations and developments of Today and the exciting possibilities that Tomorrow holds.
                            <br />
                            <br />
                            StartUP@Blagoevgrad is a student-run NGO under the patronage of the American University in Bulgaria. Established in 2012, the organization has helped students in the Blagoevgrad region develop their own businesses by conducting multiple competitions, conferences, and workshops.
                            </div>
                    </div>
                    {/*<div className="col-md" >
                        <img src={pepoStage} className="conf-about-img" alt="" />
                    </div>*/}
                </div>


            </div>
        </div>
    );
}