import React, {useEffect} from 'react';

import { Switch, Route, Link } from "react-router-dom";

import SpeakersForm from './SpeakersForm.js';
import SponsorsForm from './SponsorsForm.js';
import MarketingForm from './MarketingForm.js';
import ITForm from './ITForm.js';

import NavBar from './NavBar.js';

import './styles/apply.css';
import './styles/LandingPage.css';

function LandingPage({ match }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="landing-page">
            <div className="container text-center">
                <h5 className="title py-4">Hi, we are StartUP@Blagoevgrad. Welcome!</h5>

                <div className="row">

                    <div className="col-xl mt-3">
                        <div className="vid-wrapper">
                            <iframe height="100%" width="100%" src="https://www.youtube.com/embed/RWCe7z6Wkus" title="board-video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                        </div>

                        <div className="desc-text mt-3">
                            Founded in 2012 with the purpose of bringing together students, enterprisers, &amp; investors through the two biggest entrepreneurial events on campus, we’ve grown to be not just partners in crime, but a family, and our family is looking for new members. <br/><br/> The team of StartUP@Blagoevrgad, much like any team, is made up of different cogs that help the machine work perfectly. In our team, the work of the machine depends on the impeccable work of our four big cogs, also known as our four departments - Speakers, Sponsorship, Marketing, and IT.
                        </div>
                    </div>
                

                    <div className="col-sm pt-3 depts-col">
                        <h3 className="text-left" style={{fontWeight:"600"}}>Apply for...</h3>

                        <ul className="depts-list">
                            <li><Link to={match.path + "/speakers"}>Speakers</Link></li>

                            <li><Link to={match.path + "/sponsorship"}>Sponsorship</Link></li>

                            <li><Link to={match.path + "/marketing"}>Marketing</Link></li>

                            <li><Link to={match.path + "/it"}>IT</Link></li>
                        </ul>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default function Apply({ match }) {
    return (
        <div className="apply">
            <NavBar />
            <Switch>
                <Route path={match.path + "/speakers"} component={SpeakersForm} />
                <Route path={match.path + "/sponsorship"} component={SponsorsForm} />
                <Route path={match.path + "/marketing"} component={MarketingForm} />
                <Route path={match.path + "/it"} component={ITForm} />
                
                <Route exact path={match.path} component={LandingPage} />

                <Route>
                    <div className="container text-center">
                        <div className="row" style={{ height: "100vh" }}>
                            <div className="col-sm my-auto">
                                <h1>Page Not Found :(</h1>
                            </div>
                        </div>
                    </div>
                </Route>
            </Switch>
        </div>

    );
}

