import React, {useEffect} from 'react';
import poster from './poster.JPG';
import './Panels.css'
import panels from './panelsData'

export default function Conf2021() {
  
    
    return(
        <div className="panels" style={{color:"white"}}>
            <h2 className="speakers"><span>Speakers</span></h2>
            <div className="panel">
                {panels.panel1.map(speaker => 
                   <div>{speaker.speakerName} {speaker.company} {speaker.businessSphere} {speaker.theme} {speaker.duration} {speaker.eventType} {speaker.socialLink}</div>
                )}
            </div>

            <div className="panel">
            {panels.panel2.map(speaker => 
                   <div>{speaker.speakerName} {speaker.company} {speaker.businessSphere} {speaker.theme} {speaker.duration} {speaker.eventType} {speaker.socialLink}</div>
                )}
            </div>

            <div className="panel">
            {panels.panel3.map(speaker => 
                   <div>{speaker.speakerName} {speaker.company} {speaker.businessSphere} {speaker.theme} {speaker.duration} {speaker.eventType} {speaker.socialLink}</div>
                )}
            </div>
        </div>
       
    );
}