import React from "react";
import "./ParallaxPoster.css";
import backLayer from "../media/back.svg";
import middleLayer from "../media/middle.svg";
import frontLayer from "../media/front.svg";

export default function ParallaxPoster() {
    return (
        <>
            <div className="parallax_layer parallax_layer-back">
                <div className="layer back">
                    <img src={backLayer} alt="" />
                </div>
            </div>
            <div className="parallax_layer parallax_layer-middle">
                <div className="layer middle">
                    <img src={middleLayer} alt="" />
                </div>
            </div>
            <div className="parallax_layer parallax_layer-front">
                <div className="layer front">
                    <img src={frontLayer} alt="" />
                </div>
            </div>
        </>
    );
}
