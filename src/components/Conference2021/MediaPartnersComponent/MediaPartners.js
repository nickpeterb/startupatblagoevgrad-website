import React from "react";
import styles from "./MediaPartners.module.css";

import launchee from "../media/media-partners/launchee.png";
import nagledno from "../media/media-partners/nagledno.png";
import radio from "../media/media-partners/radio-blagoevgrad.png";
import recursive from "../media/media-partners/recursive.png";

export default function MediaPartners() {
    return (
        <>
            <div className={styles.title}>Our Media Partners</div>
            <div className={styles.mediaPartners}>
                <div>
                    <img className={styles.partnerImg} src={recursive} alt="" />
                </div>
                <div>
                    <img className={styles.partnerImg} src={nagledno} alt="" />
                </div>
                <div>
                    <img
                        className={styles.partnerImg}
                        style={{ width: "30rem", maxWidth: "100%" }}
                        src={launchee}
                        alt=""
                    />
                </div>
                <div>
                    <img
                        className={styles.partnerImg}
                        src={radio}
                        style={{ width: "30rem", maxWidth: "100%" }}
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}
