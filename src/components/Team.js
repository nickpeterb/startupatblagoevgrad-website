import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import MediaQuery from 'react-responsive';

import './styles/Team.css';

import velko from '../images/team/velko.png';
import nick from '../images/team/nick.png';
import fatma from '../images/team/fatma.png';
import boyan from '../images/team/boyan.png';
import emma from '../images/team/emma.png';
import deni from '../images/team/deni.png';
import elito from '../images/team/elito.png';
import flavia from '../images/team/flavia.png';
import ilko from '../images/team/ilko.png';

const board = [
	{ name: 'velko', img: velko },
	{ name: 'emma', img: emma },
	{ name: 'boyan', img: boyan },
	{ name: 'nick', img: nick },
	{ name: 'fatma', img: fatma },
	{ name: 'ilko', img: ilko },
	{ name: 'deni', img: deni },
];
/*const speakersDept = [nick, fatma, ilko];
const sponsorsDept = [deni, flavia, elito];
const marketingDept = [];
const itDept = [];*/

function MembersSlide(props) {
	return (
		<>
			<div className="row top-row">
				{props.slide.map((member, index) => (
					<>
						<div className="col member-img-col text-center" style={{ height: '13em', width: '8em' }} key={index}>
							<img
								src={member.img}
								alt=""
								className="team-img"
								style={{ height: '13em', paddingLeft: "10%" }}
							/>
						</div>
					</>
				))}
			</div>
			<div className="row bot-row">
				{props.slide.map((member, index) => (
					<div className="col member-desc text-center" style={{ height: '13em', width: '8em'}} key={index}>
						<div className="container">
							<div className="member-name">{member.name}</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default function Team() {

	const chunkArray = (array, size) => {
		let result = []
		for (let i = 0; i < array.length; i += size) {
			let chunk = array.slice(i, i + size)
			result.push(chunk)
		}
		return result
	}

	return (
		<div className="team">
			<div className="container" style={{ paddingTop: '2em', paddingBottom: '2em' }} >
				<h2 className="team-title">
					<span>Our Team</span>
				</h2>

				<MediaQuery maxWidth={768}>
					<Carousel interval={null} style={{ marginBottom: '4em' }}>
						{chunkArray(board, 2).map((group, index) => (
							<Carousel.Item key={index}>
								<MembersSlide slide={group} />
							</Carousel.Item>
						))}
					</Carousel>
				</MediaQuery>

				<MediaQuery minWidth={769} maxWidth={999}>
					<Carousel interval={null} style={{ marginBottom: '4em' }}>
						{chunkArray(board, 3).map((group, index) => (
							<Carousel.Item key={index}>
								<MembersSlide slide={group} />
							</Carousel.Item>
						))}
					</Carousel>
				</MediaQuery>

				<MediaQuery minWidth={1000}>
					<Carousel interval={null} style={{ marginBottom: '4em' }}>
						{chunkArray(board, 4).map((group, index) => (
							<Carousel.Item key={index}>
								<MembersSlide slide={group} />
							</Carousel.Item>
						))}
					</Carousel>
				</MediaQuery>
			</div>
		</div>
	);
}
