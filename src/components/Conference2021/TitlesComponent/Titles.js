import React from "react";
import style from "./Titles.module.css";

const Countdown = React.lazy(() => import("../CountdownComponent/Countdown"));

export default function Titles() {
    return (
        <div className={style.titles}>
            <div style={{ position: "relative", width: "100vw" }}>
                <div className={style.presents}>
                    StartUP@Blagoevgrad Presents
                </div>
                <div className={style.glimpse}>A glimpse into</div>
                <div className={style.future}>The Future</div>

                <React.Suspense fallback={<></>}>
                    <Countdown
                        timeTillDate="11 21 2021, 14:00 pm"
                        timeFormat="MM DD YYYY, h:mm a"
                    />
                </React.Suspense>
            </div>
        </div>
    );
}
