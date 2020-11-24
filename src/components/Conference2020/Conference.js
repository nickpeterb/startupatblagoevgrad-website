import React, {useEffect} from 'react';

import ConfAbout from './ConfAbout.js';
import ConfMasthead from './ConfMasthead.js';
import ConfSpeakers from './ConfSpeakers.js';

export default function Conference() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div style={{backgroundColor: "#222", color: "white"}}>
            <ConfMasthead />
            <ConfAbout />
            <ConfSpeakers />
        </div>
    );
}