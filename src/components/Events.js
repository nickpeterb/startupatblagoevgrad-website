import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './styles/Events.css';

import confImg1 from '../assets/speaker.jpg';
import confImg2 from '../assets/stock-speaker.jpg';
import confImg3 from '../assets/stock-speaker2.jpg';

const eventsText1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nunc sem, accumsan in sem vel, imperdiet maximus lorem. Vivamus pulvinar odio id tortor venenatis, id pulvinar nisi convallis. Vivamus sed tortor porttitor, sagittis dolor ut, facilisis ipsum. Aenean lobortis, tellus ut rutrum placerat, ligula leo imperdiet metus, vitae congue lacus orci sed orci. Ut viverra mi in mi egestas semper et a turpis. In egestas est eu dui finibus porttitor.";

function Slides(props) {
    return (
        <Carousel interval={null}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={props.img1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={props.img2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={props.img3}
                alt="Third slide"
              />
            </Carousel.Item>
        </Carousel>
    );
}

export default function Events() {
    return (
        <div className="events">
            <div className="container" style={{paddingTop:"2em", paddingBottom:"2em"}}>

                <h2 className="events-title"><span>Events</span></h2>

                <div className="row align-items-center mb-5">
                    <div className="col-md">
                        <h2>StartUP <span style={{color:"#ec7510"}}>Conference</span></h2>
                        <p className="events-body">{eventsText1}</p>
                    </div>
                    <div className="col-md">
                        {/*<img className="events-pic" src={confImg1} alt=""></img>*/}
                        <div className="events-slides">
                            <Slides img1={confImg1} img2={confImg2} img3={confImg3}/>
                        </div>
                        
                    </div>
                </div>

                <div className="row align-items-center mb-5">
                    <div className="col-md order-2 order-md-1">
                        <div className="events-slides">
                            <Slides img1={confImg1} img2={confImg2} img3={confImg3}/>
                        </div>
                    </div>
                    <div className="col-md order-1 order-md-2">
                        <h2>StartUP <span style={{color:"#ce1c63"}}>Weekend</span></h2>
                        <p className="events-body">{eventsText1}</p>
                    </div>
                </div>

                <div className="row align-items-center mb-5">
                    <div className="col-md">
                        <h2>Още Нещо <span style={{color:"#2cb3ab"}}>Яко</span></h2>
                        <p className="events-body">{eventsText1}</p>
                    </div>
                    <div className="col-md">
                        <div className="events-slides">
                            <Slides img1={confImg1} img2={confImg2} img3={confImg3}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}