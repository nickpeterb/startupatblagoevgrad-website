import React from "react";
import "./Panels.css";
import panels from "./panelsData";

export default function Conf2021() {
    return (
        <div className="panels">
            <div className="panel-wrapper">
                <h2>Panel 1</h2>
                <div className="panel">
                    {panels.panel1.map((speaker) => (
                        <Speaker speaker={speaker} />
                    ))}
                </div>
            </div>

            <div className="panel-wrapper">
                <h2>Panel 2</h2>
                <div className="panel">
                    {panels.panel2.map((speaker) => (
                        <Speaker speaker={speaker} />
                    ))}
                </div>
            </div>

            <div className="panel-wrapper">
                <h2>Panel 3</h2>
                <div className="panel">
                    {panels.panel3.map((speaker) => (
                        <Speaker speaker={speaker} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function Speaker({ speaker }) {
    return (
        <div className="speaker">
            <div className="header">
                <div>
                    {speaker.duration} min {speaker.eventType}
                </div>
            </div>
            <div className="name">{speaker.speakerName}</div>
            <div className="footer">
                <i
                    className={
                        "fa fa-" + socialButton(speaker.socialLink) + "-square"
                    }
                    onClick={() => window.open(speaker.socialLink, "_blank")}
                ></i>
                <div className="chip company">{speaker.company}</div>
                <div className="chip businessSphere">
                    {speaker.businessSphere}
                </div>
            </div>
        </div>
    );
}

function socialButton(link) {
    if (link.includes("linkedin")) return "linkedin";
    if (link.includes("facebook")) return "facebook";
}
