import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

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
    {name:"velko", img: velko},
    {name:"emma", img: emma}, 
    {name:"boyan", img: boyan}
];
const speakersDept = [nick, fatma, ilko];
const sponsorsDept = [deni, flavia, elito];
/*const marketingDept = [];
const itDept = [];*/


export default function Team() {
	return (
		<div className="team">
			<div
				className="container"
				style={{ paddingTop: '2em', paddingBottom: '2em' }}
			>
				<h2 className="team-title">
					<span>Our Team</span>
				</h2>

				<Carousel interval={null} style={{ marginBottom: '4em' }}>
                <Carousel.Item>
		<div className="row top-row">
			<div className="col" style={{ height: '13em', width: '8em' }}>
				<img
					src={velko}
					alt=""
					className="team-img"
					style={{ height: '13em', paddingLeft: '25%' }}
				/>
			</div>
			<div className="col" style={{ height: '13em', width: '8em' }}>
				<img
					src={fatma}
					alt=""
					className="team-img"
					style={{ height: '13em', paddingLeft: '25%' }}
				/>
			</div>
			<div className="col" style={{ height: '13em', width: '8em' }}>
				<img
					src={nick}
					alt=""
					className="team-img"
					style={{ height: '13em', paddingLeft: '25%' }}
				/>
			</div>
		</div>
		<div className="row bot-row" style={{ backgroundColor: '#F3F3F3' }}>
			<div className="col" style={{ height: '12em', width: '8em' }}></div>
			<div className="col" style={{ height: '12em', width: '8em' }}></div>
			<div className="col" style={{ height: '12em', width: '8em' }}></div>
		</div>
	</Carousel.Item>
    <Carousel.Item>
		<div className="row top-row">
			<div className="col" style={{ height: '13em', width: '8em' }}>
				<img
					src={boyan}
					alt=""
					className="team-img"
					style={{ height: '13em', paddingLeft: '25%' }}
				/>
			</div>
			<div className="col" style={{ height: '13em', width: '8em' }}>
				<img
					src={emma}
					alt=""
					className="team-img"
					style={{ height: '13em', paddingLeft: '25%' }}
				/>
			</div>
			<div className="col" style={{ height: '13em', width: '8em' }}>
				<img
					src={elito}
					alt=""
					className="team-img"
					style={{ height: '13em', paddingLeft: '25%' }}
				/>
			</div>
		</div>
		<div className="row bot-row" style={{ backgroundColor: '#F3F3F3' }}>
			<div className="col" style={{ height: '12em', width: '8em' }}></div>
			<div className="col" style={{ height: '12em', width: '8em' }}></div>
			<div className="col" style={{ height: '12em', width: '8em' }}></div>
		</div>
	</Carousel.Item>
    <Carousel.Item>
		<div className="row top-row">
			<div className="col" style={{ height: '13em', width: '8em' }}>
				<img
					src={deni}
					alt=""
					className="team-img"
					style={{ height: '13em', paddingLeft: '25%' }}
				/>
			</div>
			<div className="col" style={{ height: '13em', width: '8em' }}>
				<img
					src={ilko}
					alt=""
					className="team-img"
					style={{ height: '13em', paddingLeft: '25%' }}
				/>
			</div>
			<div className="col" style={{ height: '13em', width: '8em' }}>
				<img
					src={flavia}
					alt=""
					className="team-img"
					style={{ height: '13em', paddingLeft: '25%' }}
				/>
			</div>
		</div>
		<div className="row bot-row" style={{ backgroundColor: '#F3F3F3' }}>
			<div className="col" style={{ height: '12em', width: '8em' }}></div>
			<div className="col" style={{ height: '12em', width: '8em' }}></div>
			<div className="col" style={{ height: '12em', width: '8em' }}></div>
		</div>
	</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
}
