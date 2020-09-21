import React, {useEffect} from 'react';

import useHubspotForm from '@aaronhayes/react-use-hubspot-form';

import './styles/apply.css';
import './styles/SpeakersForm.css';

export default function SpeakersForm(props) {
    const { error } = useHubspotForm({
        portalId: '2571739',
        formId: '4a91c225-c380-4902-87b4-0e9341b72839',
        target: '#hubspot-speakers-form'
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        if(error) console.log("Error: Could not load HubSpot Form");
    });

    return (
        <div className="speakers-form">
            <div className="container text-center">
                <h5 className="title py-4">Speakers Department</h5>

                <div className="row">

                    <div className="col-xl mt-3">
                        <div className="vid-wrapper">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/NRNVsoUYoKM" title="speakers-vid" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                        </div>

                        <div className="desc-text mt-3">
                            If you are good with people and enjoy finding interesting and exceptional people, then the Speakers department is for you. The Speakers department works tirelessly to find inspiring people to come and share their experiences and their hardships. Тhe Speakers department are the ones who provide our events with the most ideal lecturers, who have achieved truly extraordinary things in their careers. Those with the confidence to reach out to people of all walks of life, the speakers’ department is a perfect option for you.
                        </div>
                    </div>


                    <div className="col-sm pt-3 form-col">
                        <h3 style={{ fontWeight: "600" }}>Apply Now</h3>

                        <div id="hubspot-speakers-form" style={{maxWidth:"100%", color:"white"}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}