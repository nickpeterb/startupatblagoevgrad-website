import React, {useEffect} from 'react';

import useHubspotForm from '@aaronhayes/react-use-hubspot-form';

import './styles/apply.css';
import './styles/SponsorsForm.css';

export default function SponsorsForm(props) {
    const { error } = useHubspotForm({
        portalId: '2571739',
        formId: '83518f7a-36c5-4366-b73d-342d7ba3b0dd',
        target: '#hubspot-sponsors-form'
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        if(error) console.log("Error: Could not load HubSpot Form");
    });
    
    return (
        <div className="sponsors-form">
            <div className="container text-center">
                <h5 className="title py-4">Sponsorship Department</h5>
                <p class="scroll-down">Scroll Down To Apply</p>

                <div className="row">

                    <div className="col-xl mt-3">
                        <div className="vid-wrapper">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Y4PBoVI13nk" title="sponsors-vid" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                        </div>
                        <p>Head of Sponsorship in 2020</p>

                        <div className="desc-text mt-3">
                            From sending out emails, to ensuring contracts and packages, the Sponsorship departments are the ones who ensure that our events will happen. They too work without rest to provide us with the necessary sponsors that make the events a breeze. Prizes, merchandise, refreshments, the Sponsorship department do it all perfectly. They have been bitten by the money bugs and welcome with open arms those who show the resilience to succeed in their difficult task.
                        </div>
                    </div>


                    <div className="col-sm pt-3 form-col">
                        <h3 style={{fontWeight:"600"}}>Apply Now</h3>

                        <div id="hubspot-sponsors-form" style={{maxWidth:"100%"}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}