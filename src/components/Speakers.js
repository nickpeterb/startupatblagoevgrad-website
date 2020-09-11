import React, { useState } from 'react';
import OnImagesLoaded from 'react-on-images-loaded';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

import './styles/Speakers.css';

//speaker imgs must be cropped to exact squares, to keep the cards the same height
import kirilImg from '../images/speakers/kiril.jpg';
import justineImg from '../images/speakers/justine.png';
import cliffordImg from '../images/speakers/clifford.jpg';
import omarImg from '../images/speakers/omar.jpg';
import nikiImg from '../images/speakers/niki.jpg';
import borisImg from '../images/speakers/boris.png';
import blagovestaImg from '../images/speakers/blagovesta.png';
import ashImg from '../images/speakers/ash.jpg';

const KirilPetkov = 'Kiril is a co-founder of the Center for Economic Strategy and Competitiveness, and the owner of Being experienced in investment projects in the field of multi-disciplinary and high-tech innovations in Bulgaria, he has worked for McCain Group. Kiril holds a MBA from Harvard Business School where he graduated in the top 10% of his class.';
const JustineToms = 'Justine Toms is an expert in online media and marketing, founder of digital agency ABC Design & Communication, and the  creator of a number of niche online websites, such as Az-jenata.bg and Az-deteto.bg. Justine has also been the idea leader of the competition for best Bulgarian online projects - BG Site since 1999. She is the author of 15 books in the area of online presence, digital media, CSR and communication, entrepreneurship and a lecturer at New Bulgarian University and SoftUni Digital.';
const CliffordHurst = 'Clifford is a professor at Westminster College in Salt Lake City where he teaches entrepreneurship, social entrepreneurship, and a variety of leadership and management courses. For 24 years, he owned and operated an organizational development consulting practice with clients across the US and Canada, as well as the UK, Germany, Dubai, Hong Kong, and Australia. Cliff\'s mission in life is to help people to know themselves, choose themselves, grow themselves, and then give themselves to something greater than themselves.';
const OmarAlBusaidy = 'Omar Al Busaidy is a Fulbright nominee, as well as a best-selling author, entrepreneur and the host of Future Talk on Pulse 95 radio, the only radio show dedicated to tech in the UAE. 🇦🇪 His multiple roles have allowed him to achieve several accomplishments, from publishing his self-help book "Just Read It" and his upcoming book “Why Jobs are Robots and Life is for People", to investing in startups from technology to trading industries. Al Busaidy’s passion lies in entrepreneurship and futurism, hence, since 2010, he has been invited to mentor students on entrepreneurship and leadership at several universities across the UAE.';
const NikiIliev = 'Niki appears as an actor in several American, Italian, Russian, German, French and Bulgarian movies and TV series. He made his professional debut as a director with the movie “The Foreigner” -- the most watched and highest grossing Bulgarian film for 2012 and 2013 in cinemas, TV and VOD. Niki has directed a lot of TV series and movies which are successful and win awards. All She Wrote 2018 is his third feature film as a director/writer/producer. The movie has won awards at film festivals in Paris, New York and Rome. Niki Iliev received a Master degree in film directing and acting and since 2015 he teaches film directing in The New Bulgarian University.';
const BorisHristov = 'Boris is the Founder of presentation agency 356labs and a PowerPoint MVP. He has presented in 25+ countries and has been rated as the top speaker numerous times. Boris has years of experience as a trainer, mentor, and consultant and has trained and coached not just students, but also people from the IT, sales, marketing and management fields in topics ranging from presentation skills and storytelling through the psychology behind slide design.';
const BlagovestaPugyova = 'Blagovesta Pugyova is a social entrepreneur and the founder of one of the most meaningful NGOs in Bulgaria - the "Give a Book" foundation. She is the CEO of the software development company Childish, the executive director of Time Heroes and the Chief Operating Officer of JobTiger. She has been awarded by the Bulgarian Helsinki Committee for "Person of the Year" and named for "30 under 30" by Forbes magazine in 2016.';
const AshKumra = 'Ash is a community builder, global speaker, meditation coach and national radio show host recognized twice by the White House as “an entrepreneur making an impact.” He is the Chairman, and co-founder of digital content distribution agency DesiYou. Ash is also an active angel investor and coach for businesses involved with consumer internet, entertainment and digital media. He is a frequent speaker on entrepreneurship, a professor on entrepreneurship, and the creator of the entrepreneurship movement YOUNGRY for millennials, women and inclusive entrepreneurs.';


/* this could eventually be moved to its own file, or imported from a db */
const speakersList = [
	{ name: 'Kiril Petkov', tagline: 'Co-Founder, Center for Economic Strategy', img: kirilImg, bio: KirilPetkov },
	{ name: 'Justine Toms', tagline: 'Founder, ABC Design & Communication', img: justineImg, bio: JustineToms },
	{ name: 'Clifford Hurst', tagline: 'Professor of Entrepreneurship at Westminster College', img: cliffordImg, bio: CliffordHurst },
	{ name: 'Omar Al Busaidy', tagline: 'Fulbright Nominee, Entrepreneur, and Futurist', img: omarImg, bio: OmarAlBusaidy },
	{ name: 'Niki Iliev', tagline: 'Director and Actor, "The Foreigner"', img: nikiImg, bio: NikiIliev },
	{ name: 'Boris Hristov', tagline: 'Founder, 365Labs and PowerPoint Specialist', img: borisImg, bio: BorisHristov },
	{ name: 'Blagovesta Pugyova', tagline: 'Founder, Give A Book Foundation', img: blagovestaImg, bio: BlagovestaPugyova },
	{ name: 'Ash Kumra', tagline: 'Tagline', img: ashImg, bio: AshKumra },
];

export default function Speakers() {

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

	const [loading, setLoading] = useState(true);

	return (
		<>
			<Modal size="lg" scrollable={true} background="true" show={show} onHide={handleClose}>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<div className="row">
						<div className="col-xs mx-auto">
							<img loading="lazy" src={activeSpeaker.img} className="modal-img" alt=""></img>
						</div>
						<div className="col-lg speaker-bio text-center">
							<div><span>{activeSpeaker.name}</span></div>
							<div style={{marginTop:"1em"}}>{activeSpeaker.bio}</div>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer className="mx-auto">
					<i className="fa fa-linkedin-square"></i>
				</Modal.Footer>
			</Modal>

			<div className="speakers">
				<div
					className="container"
					style={{ paddingTop: '2em', paddingBottom: '2em' }}
				>
					<h2 className="speakers-title text-center">
						<span>Past Speakers</span>
					</h2>

					{loading && <div className="loader">Loading...</div>}
					
					<OnImagesLoaded onLoaded={() => setLoading(false)}>
					<div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4" style={{display:loading && "none"}}>
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
													loading="lazy"
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
					</OnImagesLoaded>
				</div>
			</div>
		</>
	);
}
