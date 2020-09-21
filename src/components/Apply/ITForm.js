import React, {useEffect} from 'react';

import useHubspotForm from '@aaronhayes/react-use-hubspot-form';

import './styles/apply.css';
import './styles/ITForm.css';

export default function ITForm(props) {
    const { error } = useHubspotForm({
        portalId: '2571739',
        formId: '876fe06c-1571-4b4f-9a8e-a3ee325220f1',
        target: '#hubspot-it-form'
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        if(error) console.log("Error: Could not load HubSpot Form");
    });
    
    return (
        <div className="it-form">
            <div className="container text-center">
                <h5 className="title py-4">IT Department</h5>

                <div className="row">

                    <div className="col-xl mt-3">
                        <div className="vid-wrapper">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/4OwtyvICiw8" title="it-vid" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                        </div>

                        <div className="desc-text mt-3">
                            Numbers, codes, websites and apps, the IT department is what has brought to you this website to begin with. The people behind the computers that deal with all the technical issues and unexpected crashes without anyone even knowing that something happened to begin with. The tech wizards that solve problems before they are even problems. If this dynamic team of people is what draws you in, a try for the IT department is what would be the best for you.
                        </div>
                    </div>


                    <div className="col-sm pt-3 form-col">
                        <h3 style={{fontWeight:"600"}}>Apply Now</h3>

                        <div id="hubspot-it-form" style={{maxWidth:"100%"}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}