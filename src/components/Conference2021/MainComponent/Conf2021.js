import React from "react";
import "./Conf2021.css";
import ParallaxPoster from "../ParallaxPosterComponent/ParallaxPoster";
import Panels from "../PanelsComponent/Panels";
import Titles from "../TitlesComponent/Titles";

export default function Conf2021() {
    return (
        <div className="conf2021">
            <div className="parallax-wrapper">
                <div className="parallax">
                    <Titles />
                    <ParallaxPoster />
                    <div className="cover">
                        <Panels />
                    </div>
                </div>
            </div>
        </div>
    );
}
