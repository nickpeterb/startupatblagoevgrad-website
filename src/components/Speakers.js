import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

import './styles/Speakers.css';

//speaker imgs must be cropped to exact squares, to keep the cards the same height
import bruhnevImg from '../images/speakers/bruhnev.jpg';
import xhafaImg from '../images/speakers/xhafa.jpg';
import galvinkovImg from '../images/speakers/glavinkov.jpg';
import tsenovImg from '../images/speakers/tsenov.jpg';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nunc sem, accumsan in sem vel, imperdiet maximus lorem. Vivamus pulvinar odio id tortor venenatis, id pulvinar nisi convallis. Vivamus sed tortor porttitor, sagittis dolor ut, facilisis ipsum. Aenean lobortis, tellus ut rutrum placerat, ligula leo imperdiet metus, vitae congue lacus orci sed orci. Ut viverra mi in mi egestas semper et a turpis. In egestas est eu dui finibus porttitor.';

export default function Speakers() {
    /* this should eventually be moved to its own file, or imported from a db */
	const speakersList = [
		{ name: 'Nick Bruhnev', tagline: 'Professional Procrastinator',img: bruhnevImg, bio: lorem},
		{ name: 'Fatma Xhafa', tagline: 'Health Guru', img: xhafaImg, bio: lorem },
		{ name: 'Mitko Mitko', tagline: 'Hackerman', img: galvinkovImg, bio: lorem },
		{ name: 'Velislav Velisav', tagline: 'Mr. President', img: tsenovImg, bio: lorem },
		{ name: 'Nick Bruhnev', tagline: 'Professional Procrastinator',img: bruhnevImg, bio: lorem },
		{ name: 'Fatma Xhafa', tagline: 'Health Guru', img: xhafaImg, bio: lorem },
		{ name: 'Mitko Mitko', tagline: 'Hackerman', img: galvinkovImg, bio: lorem },
		{ name: 'Velislav Velisav', tagline: 'Mr. President', img: tsenovImg, bio: lorem },
	];

	/* keeps track of which speaker to display in the modal */
	const [activeSpeaker, setActiveSpeaker] = useState({
		name: String,
		tagline: String,
        img: Image,
        bio: String
	});

	/* handles opening and closing the modal */
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = (item) => {
		setActiveSpeaker(item);
		setShow(true);
	};

	return (
		<>
			<Modal size="lg" scrollable={true} background="true" show={show} onHide={handleClose}>
				<Modal.Header closeButton>
                    <div style={{display:"block"}}>
					<Modal.Title><span>{activeSpeaker.name}</span></Modal.Title>
                    <div>{activeSpeaker.tagline}, 2019 Conference Speaker</div>
                    </div>
				</Modal.Header>
				<Modal.Body>
                    <div className="row">
                        <div className="col-xs mx-auto">
                            <img src={activeSpeaker.img} className="modal-img" alt=""></img>
                        </div>
                        <div className="col-lg speaker-bio">
                            {activeSpeaker.bio}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="mx-auto">
                    <Button>Their Website</Button>
                    <Button>Other Link</Button>
                </Modal.Footer>
			</Modal>

			<div className="speakers">
				<div
					className="container"
					style={{ paddingTop: '2em', paddingBottom: '2em' }}
				>
					<h2 className="speakers-title">
						<span>Speakers</span>
					</h2>

					<div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
						{speakersList.map((speaker, index) => (
							<div key={index}>
								<div className="col mb-4" >
									<div className="speaker-card">
										<div className="card-top-wrapper">
											<div
												className="arrow-overlay"
												onClick={() => handleShow(speaker)}
											>
												<i className="fa fa-arrow-right" aria-hidden="true"></i>
											</div>

											<div
												className="speaker-border"
												onClick={() => handleShow(speaker)}
											>
												<img
													src={speaker.img}
													className="card-img-top"
													alt=""
												></img>
											</div>
										</div>

										<div className="card-body">
											<h5 className="card-title">{speaker.name}</h5>
											<p className="card-text">{speaker.tagline}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
