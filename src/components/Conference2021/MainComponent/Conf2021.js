import React, { useEffect } from "react";
import poster from "../media/poster-header.png";
import "./Conf2021.css";

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
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div class="conf2021">
            <div>
                <img src={poster} alt=""></img>
                <div>
                    <React.Suspense fallback={<Loader />}>
                        <Countdown
                            timeTillDate="11 21 2021, 14:00 pm"
                            timeFormat="MM DD YYYY, h:mm a"
                        />
                    </React.Suspense>
                    <Panels />
                </div>
            </div>
        </div>
    );
}
