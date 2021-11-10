import React, { useEffect } from "react";
import poster from "../media/poster.JPG";
import "./Conf2021.css";

import Countdown from "../CountdownComponent/Countdown";
import Panels from "../PanelsComponent/Panels";

export default function Conf2021() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div class="conf2021">
      <div>
        <img src={poster} style={{ width: "100%" }} alt=""></img>
        <Countdown
          timeTillDate="11 21 2021, 14:00 pm"
          timeFormat="MM DD YYYY, h:mm a"
        />
        <Panels />
      </div>
    </div>
  );
}
