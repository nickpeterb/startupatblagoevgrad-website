import React from "react";
import "./ParallaxPoster.css";
import backLayer from "../media/back.png";
import middleLayer from "../media/middle.png";
import frontLayer from "../media/front.png";

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
