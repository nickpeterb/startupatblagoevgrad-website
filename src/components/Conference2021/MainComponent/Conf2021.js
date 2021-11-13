import React from "react";
import "./Conf2021.css";
import Header from "../HeaderComponent/Header";

import Panels from "../PanelsComponent/Panels";
const Countdown = React.lazy(() => import("../CountdownComponent/Countdown"));

const Loader = () => {
    return (
        <div class="spinner">
            <div class="lds-dual-ring"></div>
        </div>
    );
};

export default function Conf2021() {
    return (
        <div class="conf2021">
            <div className="parallax-wrapper">
                <div class="parallax">
                    <div className="titles">
                        <div style={{ position: "relative", width: "100vw" }}>
                            <div className="presents">
                                StartUP@Blagoevgrad Presents
                            </div>
                            <div className="glimpse">A glimpse into</div>
                            <div className="future">The Future</div>

                            <React.Suspense fallback={<Loader />}>
                                <Countdown
                                    timeTillDate="11 21 2021, 14:00 pm"
                                    timeFormat="MM DD YYYY, h:mm a"
                                />
                            </React.Suspense>
                        </div>
                    </div>
                    <Header />
                    <div class="cover">
                        <Panels />
                    </div>
                </div>
            </div>
        </div>
    );
}
