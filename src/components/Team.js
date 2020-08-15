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
import karolina from '../images/team/karolina.png';
import key from '../images/team/key.png';
import nadiaT from '../images/team/nadia-t.png';
import uerda from '../images/team/uerda.png';
import alex from '../images/team/alex.png';

//Sponsorship
import kris from '../images/team/kris.png';
import nadiaD from '../images/team/nadia-d.png';
import preso from '../images/team/preso.png';
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


const board = [
	{ name: 'Velislav Tsenov', img: velko, title: "President" },
	{ name: 'Elena Ivanova', img: elito, title: "Vice President" },
	{ name: 'Armela Gjylsheni', img: armela, title: "Vice President" },
	{ name: 'Stanislav Todorov', img: stan, title: "Treasurer" }
];

const speakersDept = [
	{ name: 'Fatma Xhafa', img: fatma },
	{ name: 'Uerda Muca', img: uerda },
	{ name: 'Darina Stanoilova', img: dari },
	{ name: 'Alexandra Dimcheva', img: alex },
	{ name: 'Nadia Traikova', img: nadiaT },
	{ name: 'Karolina Kostadinova', img: karolina },
	{ name: 'Key Prifti', img: key },
	{ name: 'Aneta Gerginova', img: aneta },
]

const sponsorsDept = [
	{ name: 'Kris Petrov', img: kris },
	{ name: 'Nadia Dimitrova', img: nadiaD },
	{ name: 'Preslav Vachev', img: preso },
	{ name: 'Siel Rien', img: siel },
	{ name: 'Flavia Gançi', img: flavia },
]

const marketingDept = [
	{ name: 'Emma Kerencheva', img: emma },
	{ name: 'Boyan Zlatarski', img: boyan },
	{ name: 'Denislava Angelova', img: deni },
	{ name: 'Ilia Dobrev', img: ilko },
	{ name: 'Nikol Peeva', img: nikol },
	{ name: 'Teddy Vasileva', img: teddy },
	{ name: 'Petar Hristakiev', img: petar },
	{ name: 'Diana Radkova', img: didi },
	{ name: 'Emily Timcheva', img: emily }
]

const itDept = [
	{ name: 'Nick Bruhnev', img: nick },
	{ name: 'Dimitar Glavinkov', img: mitko },
	{ name: 'Andrea Shipkovensky', img: andi },
	{ name: 'Vladin Bonov', img: vladin }
]

function MembersSlide(props) {
	return (
		<div className="members-slide">
			<div className="row top-row" style={{background:`linear-gradient(to top, ${props.bgColor} 75%, transparent 25%)`}}>
				{props.slide.map((member, index) => (
					<div className="col member-img-col text-center" style={{ height: '13em' }} key={index}>
						<img
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
						<span className="member-title">{member?.title}</span>
						<div className="line" style={{borderColor:props.bgColor}}></div>
						<i className="fa fa-linkedin-square"></i>
					</div>
				))}
			</div>
		</div>
	);
}

function Dept(props) {

	/* Hide controls when carousel shows all members */
	const [hideCarousel, setHideCarousel] = useState('');
	const toggleHideCarousel = () => {
		if (props.members.length <= 5) setHideCarousel('hide-carousel');
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
							<MembersSlide slide={group} bgColor={props.bgColor} />
						</Carousel.Item>
					))}
				</Carousel>
			</MediaQuery>

			<MediaQuery minWidth={361} maxWidth={768}>
				<Carousel interval={null} >
					{chunkArray(props.members, 2).map((group, index) => (
						<Carousel.Item key={index}>
							<MembersSlide slide={group} bgColor={props.bgColor} />
						</Carousel.Item>
					))}
				</Carousel>
			</MediaQuery>

			<MediaQuery minWidth={769} maxWidth={999}>
				<Carousel interval={null} >
					{chunkArray(props.members, 3).map((group, index) => (
						<Carousel.Item key={index}>
							<MembersSlide slide={group} bgColor={props.bgColor} />
						</Carousel.Item>
					))}
				</Carousel>
			</MediaQuery>

			<MediaQuery minWidth={1000} onChange={toggleHideCarousel}>
				<Carousel className={hideCarousel} interval={null} >
					{chunkArray(props.members, 5).map((group, index) => (
						<Carousel.Item key={index}>
							<MembersSlide slide={group} bgColor={props.bgColor} hideIndicators={true}/>
						</Carousel.Item>
					))}
				</Carousel>
			</MediaQuery>
		</>
	);
}


export default function Team() {
	return (
		<div className="team">
			<div className="container-fluid" style={{ paddingTop: '2em', paddingBottom: '2em' }}>
				<h2 className="team-title text-center">
					<span>Our Team</span>
				</h2>

				<Dept teamName="The Board" members={board} bgColor="#fbbb06" />

				<Dept teamName="Speakers Department" members={speakersDept} bgColor="#aa1638" />

				<Dept teamName="Sponsorship Department" members={sponsorsDept} bgColor=" #579ccb" />

				<Dept teamName="Marketing Department" members={marketingDept} bgColor="#731c64" />

				<Dept teamName="IT Team" members={itDept} bgColor="#2ECC40" />
			</div>
		</div>
	);
}