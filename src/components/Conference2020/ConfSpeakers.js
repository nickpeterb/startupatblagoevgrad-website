import React, { useState, useEffect } from 'react';
import Flickity from 'flickity';

import Modal from 'react-bootstrap/Modal';

import { firestore } from '../../firebaseInitApp.js';
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';

import './styles/Flickity.css';
import './styles/ConfSpeakers.css';

export default function ConfSpeakers() {
    const speakersRef = firestore.collection('speakers');
    const query = speakersRef.orderBy('updatedAt', 'desc');
    const [speakersList, loading] = useCollectionDataOnce(query);

    return (
        <>
            { !loading &&
                <Speakers speakersList={speakersList} />
            }
        </>
    );

}

function Speakers({ speakersList }) {
    //makes sure carousel index stays in bounds
    const mod = (x, m) => {
        return (x % m + m) % m;
    }

    /* keeps track of which speaker to display in the modal */
    const [activeSpeaker, setActiveSpeaker] = useState({
        name: "",
        tagline: "",
        img: "",
        bio: "",
    });

    const handleActiveSpeaker = (matchName) => {
        let speaker = speakersList.find(speaker => speaker.name === matchName);
        setActiveSpeaker(speaker);
    }

    useEffect(() => {
        //initialize carousel
        var elem = document.querySelector('.flick-carousel');
        var flkty = new Flickity(elem, {
            selectedAttraction: 0.02,
            friction: 0.2,
            wrapAround: true,
            setGallerySize: false,
            pageDots: false
        });

        var cellElements = flkty.getCellElements();
        //set the 2 cells to the right and left of the selected cell to medium sizes
        cellElements[mod(flkty.selectedIndex + 1, flkty.cells.length)].style.transform = "scale(0.8) translateY(0.01%)";
        cellElements[mod(flkty.selectedIndex - 1, flkty.cells.length)].style.transform = "scale(0.8) translateY(0.01%)";
        cellElements[mod(flkty.selectedIndex + 2, flkty.cells.length)].style.transform = "scale(0.65) translateY(-50%)";
        cellElements[mod(flkty.selectedIndex - 2, flkty.cells.length)].style.transform = "scale(0.65) translateY(-50%)";

        handleActiveSpeaker(cellElements[flkty.selectedIndex].querySelector('.speaker-name').innerText);

        flkty.on('change', function (index) {
            handleActiveSpeaker(cellElements[flkty.selectedIndex].querySelector('.speaker-name').innerText);

            //set all cells to small size and push them up
            for (let i = 0; i < cellElements.length; i++) {
                cellElements[mod(i, flkty.cells.length)].style.transform = "scale(0.5) translateY(-150%)";
            }
            //set the 2 cells to the right and left of the new selected cell to medium sizes
            cellElements[mod(index + 1, flkty.cells.length)].style.transform = "scale(0.8) translateY(0.01%)";
            cellElements[mod(index - 1, flkty.cells.length)].style.transform = "scale(0.8) translateY(0.01%)";
            cellElements[mod(index + 2, flkty.cells.length)].style.transform = "scale(0.65) translateY(-50%)";
            cellElements[mod(index - 2, flkty.cells.length)].style.transform = "scale(0.65) translateY(-50%)";
            //make selected cell full size
            cellElements[index].style.transform = "translateY(35%)";
        });

        flkty.on('staticClick', function (event, pointer, cellElement, cellIndex) {
            flkty.select(cellIndex);
        });

    });

    /* handles opening and closing the modal */
    const [showModal, setShowModal] = useState(false);

    const nina = (name) => {
        // this is because nina prodanova-iozeva has a very long name
        if (name === "Nina Prodanova-Iozeva") return { fontSize: "1.6em" };
        else return { fontSize: "2em" };
    }

    return (
        <>
            <Modal className="conf-speakers-modal" size="lg" scrollable={true} background="true" show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-xs mx-auto align-self-center">
                            <img src={activeSpeaker.img} className="modal-img" alt=""></img>
                        </div>
                        <div className="col-lg speaker-bio text-center">
                            <div><span>{activeSpeaker.name}</span></div>
                            <div style={{ marginTop: "1em" }}>{activeSpeaker.bio}</div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <div className="conf-speakers">
                <h2 className="conf-speakers-title text-center"><span>Speakers</span></h2>
                <div className="flex-container">
                    <div className="flick-carousel">
                        {speakersList && speakersList.map((speaker, index) => (
                            <div className="cell-wrapper" key={index}>
                                <img
                                    src={speaker.img}
                                    className="flick-carousel-cell"
                                    alt={speaker.name}
                                    style={{ willChange: 'transform' }}
                                >
                                </img>
                                <div className="speaker-name" style={nina(speaker.name)}>{speaker.name}</div>
                                <div className="speaker-tagline" onClick={() => setShowModal(speaker)}>Learn More</div>
                            </div>
                        ))}
                    </div>
                </div>
                {activeSpeaker.video &&
                    <div className="speaker2020-video-wrapper">
                        <iframe title="speaker2020-video" className="speaker2020-video" width="100%" height="100%" src={activeSpeaker.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                    </div>
                }
            </div>
        </>
    );
}