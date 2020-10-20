import React from 'react';

import ConfAbout from './ConfAbout.js';
import ConfMasthead from './ConfMasthead.js';
import ConfSpeakers from './ConfSpeakers.js';

export default function Conference() {
    return(
        <div style={{backgroundColor: "#222", color: "white"}}>
            <ConfMasthead />
            <ConfAbout />
            <ConfSpeakers />
        </div>
    );
}