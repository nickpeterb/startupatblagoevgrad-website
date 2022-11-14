import React, { useEffect } from 'react';

import { Switch, Route, Link } from "react-router-dom";

//import NavBar from './NavBar.js';

//import './apply.css';
import './LandingPage.css';

function LandingPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="landing-page">
            <div className="container text-center">
                <h5 className="title py-4">Hi, we are StartUP@Blagoevgrad. Welcome!</h5>

                <div className="row">

                    <div className="col-sm pt-3 depts-col">
                        <h3 className="text-left" style={{ fontWeight: "600" }}>Apply for...</h3>

                        <ul className="depts-list">
                            <li><Link to={"/speakers"}>Speakers</Link></li>

                            <li><Link to={"/sponsorship"}>Sponsorship</Link></li>

                            <li><Link to={"/marketing"}>Marketing</Link></li>

                            <li><Link to={"/it"}>IT</Link></li>
                        </ul>
                    </div>

                    <div className="col-xl mt-3">
                        <div className="desc-text mt-3">
                            Founded in 2012 with the purpose of bringing together students, enterprisers, &amp; investors through the two biggest entrepreneurial events on campus, we've grown to be not just partners in crime, but a family, and our family is looking for new members. <br /><br /> The team of StartUP@Blagoevrgad, much like any team, is made up of different cogs that help the machine work perfectly. In our team, the work of the machine depends on the impeccable work of our four big cogs, also known as our four departments - Speakers, Sponsorship, Marketing, and IT.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LandingPage;

