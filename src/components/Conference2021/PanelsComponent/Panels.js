import React, { useState } from "react";
import "./Panels.css";
import panels from "./panelsData";

export default function Conf2021() {
    return (
        <div className="panels">
            <div className="panel-wrapper">
                <h2>Panel 1</h2>
                <div className="panel">
                    {panels.panel1.map((speaker, index) => (
                        <Speaker speaker={speaker} key={index} />
                    ))}
                </div>
            </div>

            <div className="panel-wrapper">
                <h2>Panel 2</h2>
                <div className="panel">
                    {panels.panel2.map((speaker, index) => (
                        <Speaker speaker={speaker} key={index} />
                    ))}
                </div>
            </div>

            <div className="panel-wrapper">
                <h2>Panel 3</h2>
                <div className="panel">
                    {panels.panel3.map((speaker, index) => (
                        <Speaker speaker={speaker} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function Speaker({ speaker }) {
    const [showBio, setShowBio] = useState(false);
    const showHideBio = () => {
        setShowBio(!showBio);
    };

    return (
        <div className="speaker" onClick={showHideBio}>
            <div className="main">
                <img className="speaker-thumb" src={speaker.img} alt="" />
                <div>
                    <div className="header">
                        <div>
                            {speaker.duration} min {speaker.eventType}
                        </div>
                    </div>
                    <div className="body">
                        <div className="name">{speaker.speakerName}</div>
                        {/*{showBio ? (
                            <i className="fa fa-caret-up"></i>
                        ) : (
                            <i className="fa fa-caret-down"></i>
                        )}*/}
                    </div>
                    <div className="footer">
                        <i
                            className={
                                "fa fa-" +
                                socialButton(speaker.socialLink) +
                                "-square"
                            }
                            onClick={() =>
                                window.open(speaker.socialLink, "_blank")
                            }
                        ></i>
                        <div className="chip company">{speaker.company}</div>
                        <div className="chip businessSphere">
                            {speaker.businessSphere}
                        </div>
                    </div>
                </div>
            </div>
            {/*{showBio && (
                <div className="bio">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content. Lorem ipsum may be used as a placeholder
                    before final copy is available.
                </div>
            )}*/}
        </div>
    );
}

function socialButton(link) {
    if (link.includes("linkedin")) return "linkedin";
    if (link.includes("facebook")) return "facebook";
}
