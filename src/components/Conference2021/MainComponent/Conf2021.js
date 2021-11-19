import React from "react";
import "./Conf2021.css";
import ParallaxPoster from "../ParallaxPosterComponent/ParallaxPoster";
import Panels from "../PanelsComponent/Panels";
import Titles from "../TitlesComponent/Titles";
import MediaPartners from "../MediaPartnersComponent/MediaPartners";

export default function Conf2021() {
    return (
        <div className="conf2021">
            {/*<div
                className="confButton"
                onClick={() => window.open("", "_blank")}
            >
                Register Now
            </div>*/}
            <div className="parallax-wrapper">
                <div className="parallax">
                    <Titles />
                    <ParallaxPoster />
                    <div className="cover">
                        <Panels />
                        <MediaPartners />
                    </div>
                </div>
            </div>
        </div>
    );
}
