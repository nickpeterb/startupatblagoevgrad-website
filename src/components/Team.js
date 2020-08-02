import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useMediaQuery } from 'react-responsive';

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
				{props.deptMembers.map((member, index) => (
					<>
						<div className="col" style={{ height: '13em', width: '8em' }} key={index}>
							<img
								src={member.img}
								alt=""
								className="team-img"
								style={{ height: '13em', paddingLeft:"10%"}}
							/>
						</div>
					</>
				))}
			</div>
			<div className="row bot-row">
				{props.deptMembers.map((member, index) => (
					<div className="col" style={{ height: '12em', width: '8em' }} key={index}></div>
				))}
			</div>
		</>
	);
}

function SplitMembers(dept){
    let groups = [], size = 3;
    
    while (dept.length > 0){
        groups.push(dept.splice(0, size));
    }
    
    return groups;
}

export default function Team() {

    //const [size, setSize] = useState(3);
    
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
                    {SplitMembers(board).map((group, index) => (
						<Carousel.Item key={index}>
							<MembersSlide deptMembers={group} />
						</Carousel.Item>
					))}
				</Carousel>
			</div>
		</div>
	);
}
