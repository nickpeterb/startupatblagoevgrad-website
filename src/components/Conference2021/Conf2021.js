import React, {useEffect} from 'react';
import poster from './poster.JPG';

export default function Conf2021() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div style={{background:"#000f1b", height: "100vh"}}>
            <img src={poster} style={{width:"100%"}} alt=""></img>
        </div>
    );
}