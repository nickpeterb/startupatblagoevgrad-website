import React from "react";
import "./Header.css";
import backLayer from "../media/back.svg";
import middleLayer from "../media/middle.svg";
import frontLayer from "../media/front.svg";

export default function Header() {
    return (
        <>
            <div class="parallax_layer parallax_layer-back">
                <div class="layer back">
                    <img src={backLayer} alt="" />
                </div>
            </div>
            <div class="parallax_layer parallax_layer-middle">
                <div class="layer middle">
                    <img src={middleLayer} alt="" />
                </div>
            </div>
            <div class="parallax_layer parallax_layer-front">
                <div class="layer front">
                    <img src={frontLayer} alt="" />
                </div>
            </div>
        </>
    );
}
