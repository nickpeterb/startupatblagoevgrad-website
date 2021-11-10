import React, {useEffect} from 'react';
import poster from './poster.JPG';
//import Countdown from 'react-countdown';
import Countdown from './Countdown'

export default function Conf2021() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
            <div style={{background:"#000f1b", height: "100vh", color: "white"}}>
                <img src={poster} style={{width:"100%"}} alt=""></img>
                <Countdown timeTillDate="11 21 2021, 14:00 pm" timeFormat="MM DD YYYY, h:mm a" />
            </div>
        </div>
    );
}