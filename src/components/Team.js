import React, {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import MediaQuery from 'react-responsive';

import './styles/Team.css';

//The Board
import velko from '../images/team/velko.png';
import elito from '../images/team/elito.png';
import armela from '../images/team/armela.png';
import stan from '../images/team/stan.png';

//Speakers
import aneta from '../images/team/aneta.png';
import dari from '../images/team/dari.png';
import fatma from '../images/team/fatma.png';
import key from '../images/team/key.png';
import nadiaT from '../images/team/nadia-t.png';
import uerda from '../images/team/uerda.png';
import alex from '../images/team/alex.png';

//Sponsorship
import kris from '../images/team/kris.png';
import nadiaD from '../images/team/nadia-d.png';
import siel from '../images/team/siel.png';
import flavia from '../images/team/flavia.png';

//Marketing
import boyan from '../images/team/boyan.png';
import deni from '../images/team/deni.png';
import didi from '../images/team/didi.png';
import emma from '../images/team/emma.png';
import emily from '../images/team/emily.png';
import ilko from '../images/team/ilko.png';
import nikol from '../images/team/nikol.png';
import petar from '../images/team/petar.png';
import teddy from '../images/team/teddy.png';

//IT 
import nick from '../images/team/nick.png';
import mitko from '../images/team/mitko.png';
import andi from '../images/team/andi.png';
import vladin from '../images/team/vladin.png';

const teamText = {
	"title": {
		"en": "Our Team",
		"bg": "Екипът Зад Всичко Това"
	},
	"board": {
		"en": "The Board",
		"bg": "Борд"
	},
	"speakers": {
		"en": "Speakers Department",
		"bg": "Отдел Лектори"
	},
	"sponsorship": {
		"en": "Sponsorship Department",
		"bg": "Отдел Спонсори",
	},
	"marketing": {
		"en": "Marketing Department",
		"bg": "Отдел Маркетинг",
	},
	"it": {
		"en": "IT Department",
		"bg": "Отдел IT"
	},
}

const board = [
	{ name: 'Velislav Tsenov', img: velko, title: { "en": "President", "bg": "Президент" }, linkedIn: "https://www.linkedin.com/in/velislavtsenov/" },
	{ name: 'Elena Ivanova', img: elito, title: { "en": "Vice President, Head of Speakers", "bg": "Вицепрезидент, Ръководител на Отдел Лектори " }, linkedIn: "https://www.linkedin.com/in/elena-ivanova-636178153/" },
	{ name: 'Armela Gjylsheni', img: armela, title: { "en": "Vice President", "bg": "Вицепрезидент" }, linkedIn: "https://www.linkedin.com/in/armela-gjylsheni-404630153/" },
	{ name: 'Stanislav Todorov', img: stan, title: { "en": "Treasurer", "bg": "Ковчежник" }, linkedIn: "https://www.linkedin.com/in/stanislav-todorov-2a8a78198/" }
];

const speakersDept = [
	{ name: 'Fatma Xhafa', img: fatma, linkedIn: "https://www.linkedin.com/in/fatma-xhafa-79446114b/" },
	{ name: 'Uerda Muca', img: uerda, linkedIn: "https://www.linkedin.com/in/uerda-muca-340140135/" },
	{ name: 'Darina Stanoilova', img: dari, linkedIn: "" },
	{ name: 'Alexandra Dimcheva', img: alex, linkedIn: "https://www.linkedin.com/in/alexandra-dimcheva-b18866172/" },
	{ name: 'Nadia Traikova', img: nadiaT, linkedIn: "https://www.linkedin.com/in/nadia-traykova-124a70147/" },
	{ name: 'Key Prifti', img: key, linkedIn: "" },
	{ name: 'Aneta Gerginova', img: aneta, linkedIn: "" },
]

const sponsorsDept = [
	{ name: 'Nadia Dimitrova', img: nadiaD, title: { "en": "Head of Sponsorship", "bg": "Ръководител на Спонсорството" }, linkedIn: "http://linkedin.com/in/dimitrovani/" },
	{ name: 'Kris Petrov', img: kris, linkedIn: "" },
	{ name: 'Siel Rien', img: siel, linkedIn: "https://www.linkedin.com/in/siel-rien-ab00a4170/" },
	{ name: 'Flavia Gançi', img: flavia, linkedIn: "" },
]

const marketingDept = [
	{ name: 'Emma Kerencheva', img: emma, title: { "en": "Head of Marketing", "bg": "Ръководител на Маркетинг" }, linkedIn: "" },
	{ name: 'Emily Timcheva', img: emily, title: { "en": "Head of Marketing", "bg": "Ръководител на Маркетинг" }, linkedIn: "https://www.linkedin.com/in/emily-timcheva/" },
	{ name: 'Boyan Zlatarski', img: boyan, linkedIn: "http://linkedin.com/in/boyan-zlatarski-5891261a6/" },
	{ name: 'Denislava Angelova', img: deni, linkedIn: "https://www.linkedin.com/in/denislava-angelova/" },
	{ name: 'Ilia Dobrev', img: ilko, linkedIn: "https://www.linkedin.com/in/ilia-dobrev/" },
	{ name: 'Nikol Peeva', img: nikol, linkedIn: "" },
	{ name: 'Teddy Vasileva', img: teddy, linkedIn: "" },
	{ name: 'Petar Hristakiev', img: petar, linkedIn: "" },
	{ name: 'Diana Radkova', img: didi, linkedIn: "" },
]

const itDept = [
	{ name: 'Nick Bruhnev', img: nick, linkedIn: "https://www.linkedin.com/in/nick-bruhnev/" },
	{ name: 'Dimitar Glavinkov', img: mitko, linkedIn: "" },
	{ name: 'Andrea Shipkovensky', img: andi, linkedIn: "" },
	{ name: 'Vladin Bonov', img: vladin, linkedIn: "" }
]

function MembersSlide(props) {
	return (
		<div className="members-slide">
			<div className="row top-row" style={{background:`linear-gradient(to top, ${props.bgColor} 75%, transparent 25%)`}}>
				{props.slide.map((member, index) => (
					<div className="col member-img-col text-center" style={{ height: '13em' }} key={index}>
						<img
							loading="lazy"
							src={member.img}
							alt={member.name}
							className="team-img"
						/>
					</div>
				))}
			</div>
			<div className="row bot-row">
				{props.slide.map((member, index) => (
					<div className="col member-desc text-center" key={index}>
						<div className="member-name">{member.name}</div>
						<span className="member-title">{member.title?.[props.lang]}</span>
						<div className="line" style={{borderColor:props.bgColor}}></div>
						{ member.linkedIn !== "" ?
							<i className="fa fa-linkedin-square" onClick={() => window.open(member.linkedIn,'_blank')}></i>
						:
							<i className="fa fa-linkedin-square" style={{color:"#F3F3F3"}}></i>
						}
							
					</div>
				))}
			</div>
		</div>
	);
}

function Dept(props) {
	
	const membersLgDevice = 4; //How many members to show on big screens

	/* Hide controls when carousel shows all members */
	const [hideCarousel, setHideCarousel] = useState('');
	const toggleHideCarousel = () => {
		if (props.members.length <= membersLgDevice) setHideCarousel('hide-carousel');
		else setHideCarousel('');
	}

	useEffect(() => {
		toggleHideCarousel();
	});

	const chunkArray = (array, size) => {
		let result = []
		for (let i = 0; i < array.length; i += size) {
			let chunk = array.slice(i, i + size)
			result.push(chunk)
		}
		return result
	}

	return (
		<>
			<h3 className="text-center">{props.teamName}</h3>

			<MediaQuery maxWidth={360}>
				<Carousel interval={null} >
					{chunkArray(props.members, 1).map((group, index) => (
						<Carousel.Item key={index}>
							<MembersSlide slide={group} bgColor={props.bgColor} lang={props.lang} />
						</Carousel.Item>
					))}
				</Carousel>
			</MediaQuery>

			<MediaQuery minWidth={361} maxWidth={768}>
				<Carousel interval={null} >
					{chunkArray(props.members, 2).map((group, index) => (
						<Carousel.Item key={index}>
							<MembersSlide slide={group} bgColor={props.bgColor} lang={props.lang}/>
						</Carousel.Item>
					))}
				</Carousel>
			</MediaQuery>

			<MediaQuery minWidth={769} maxWidth={999}>
				<Carousel interval={null} >
					{chunkArray(props.members, 3).map((group, index) => (
						<Carousel.Item key={index}>
							<MembersSlide slide={group} bgColor={props.bgColor} lang={props.lang}/>
						</Carousel.Item>
					))}
				</Carousel>
			</MediaQuery>

			<MediaQuery minWidth={1000} onChange={toggleHideCarousel}>
				<Carousel className={hideCarousel} interval={null} >
					{chunkArray(props.members, membersLgDevice).map((group, index) => (
						<Carousel.Item key={index}>
							<MembersSlide slide={group} bgColor={props.bgColor} hideIndicators={true} lang={props.lang}/>
						</Carousel.Item>
					))}
				</Carousel>
			</MediaQuery>
		</>
	);
}


export default function Team(props) {
	return (
		<div className="team">
			<div className="container-fluid" style={{ paddingTop: '2em', paddingBottom: '2em' }}>
				<h2 className="team-title text-center">
					<span>{teamText.title[props.lang]}</span>
				</h2>
				
				<Dept teamName={teamText.board[props.lang]} members={board} bgColor="#fbbb06" lang={props.lang}/>

				<Dept teamName={teamText.speakers[props.lang]} members={speakersDept} bgColor="#aa1638" lang={props.lang}/>

				<Dept teamName={teamText.sponsorship[props.lang]} members={sponsorsDept} bgColor=" #579ccb" lang={props.lang}/>

				<Dept teamName={teamText.marketing[props.lang]} members={marketingDept} bgColor="#731c64" lang={props.lang}/>

				<Dept teamName={teamText.it[props.lang]} members={itDept} bgColor="#2ECC40" lang={props.lang}/>
			</div>
		</div>
	);
}