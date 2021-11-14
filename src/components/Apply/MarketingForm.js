import React, { useEffect } from "react";

import useHubspotForm from "@aaronhayes/react-use-hubspot-form";

import "./styles/apply.css";
import "./styles/MarketingForm.css";

export default function MarketingForm(props) {
    const { error } = useHubspotForm({
        portalId: "2571739",
        formId: "2b182f8b-f0ef-4f64-8549-7e0759706345",
        target: "#hubspot-marketing-form",
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        if (error) console.log("Error: Could not load HubSpot Form");
    });

    return (
        <div className="marketing-form">
            <div className="container text-center">
                <h5 className="title py-4">Marketing Department</h5>
                <p className="scroll-down">Scroll Down To Apply</p>

                <div className="row">
                    <div className="col-xl mt-3">
                        <div className="vid-wrapper">
                            <iframe
                                width="100%"
                                height="100%"
                                title="marketing-vid"
                                src="https://www.youtube.com/embed/3b6crUV8gGY"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen={true}
                            ></iframe>
                        </div>
                        <p>Heads of Marketing in 2020</p>

                        <div className="desc-text mt-3">
                            Painters, writers, photographers, the Marketing
                            department houses all the creative souls within
                            itself. Creating and executing different campaigns
                            for events, creating posters, stickers, editing
                            photos and videos, the people in the marketing
                            department try their best to provide a splash of
                            color in people’s otherwise gray everyday lives. If
                            you think you can fit into this colorful crayon box,
                            if you want to be the pop of blue in the sea of
                            gray, the Marketing department will welcome you with
                            open arms.
                        </div>
                    </div>

                    <div className="col-sm pt-3 form-col">
                        <h3 style={{ fontWeight: "600" }}>Apply Now</h3>

                        <div
                            id="hubspot-marketing-form"
                            style={{ maxWidth: "100%" }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
