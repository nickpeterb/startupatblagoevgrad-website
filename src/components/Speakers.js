import React from 'react';
import Modal from 'react-bootstrap/Modal'

import './styles/Speakers.css';

//speaker imgs must be cropped to exact squares, to keep the cards the same height
import bruhnevImg from "../assets/speakers-imgs/bruhnev.jpg";
import xhafaImg from "../assets/speakers-imgs/xhafa.jpg";
import galvinkovImg from "../assets/speakers-imgs/glavinkov.jpg";
import tsenovImg from "../assets/speakers-imgs/tsenov.jpg";

export default function Speakers() {
    const speakersList = [
        { name: "Nick Bruhnev", tagline: "Professional Procrastinator", img: bruhnevImg },
        { name: "Fatma Xhafa", tagline: "Health Guru", img: xhafaImg },
        { name: "Mitko Mitko", tagline: "Hackerman", img: galvinkovImg },
        { name: "Velislav Velisav", tagline: "Mr. President", img: tsenovImg },
        { name: "Nick Bruhnev", tagline: "Professional Procrastinator", img: bruhnevImg },
        { name: "Fatma Xhafa", tagline: "Health Guru", img: xhafaImg },
        { name: "Mitko Mitko", tagline: "Hackerman", img: galvinkovImg }, 
        { name: "Velislav Velisav", tagline: "Mr. President", img: tsenovImg }
      ]
	return (
        <div className="speakers">
        <div className="container" style={{paddingTop:"2em", paddingBottom:"2em"}}>

        <h2 className="speakers-title"><span>Speakers</span></h2>
        
		<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            {speakersList.map((speaker, index) =>
                <div class="col mb-4">
                    <div className="speaker-card"> 
                        <div className="card-top-wrapper">
                            <div className="arrow-overlay"><i class="fa fa-arrow-right" aria-hidden="true"></i></div>

                            <div className="speaker-border">
                                <img src={speaker.img} class="card-img-top" alt="" >
                                </img>
                            </div>
                        </div>

                        <div class="card-body" > 
                          <h5 class="card-title">{speaker.name}</h5>
                          <p class="card-text">{speaker.tagline}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>

        </div>
        </div>
	);
}