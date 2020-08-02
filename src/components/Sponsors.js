import React from 'react';

import './styles/Sponsors.css';

import ahmadTea from '../images/sponsors/ahmad-tea.png';
import cocaCola from '../images/sponsors/coca-cola.png';
import musalaSoft from '../images/sponsors/musala-soft.png';
import nordics from '../images/sponsors/nordics.png';
import pirinGolf from '../images/sponsors/pirin-golf.png';
import redBull from '../images/sponsors/red-bull.png';
import societeGenerale from '../images/sponsors/societe-generale.png';
import superhosting from '../images/sponsors/superhosting.png';
import sutherland from '../images/sponsors/sutherland.png';

const sponsors = [
    { className: "coca-cola", img: cocaCola },
    { className: "red-bull", img: redBull },
    { className: "superhosting", img: superhosting },
    { className: "societe-generale", img: societeGenerale },
    { className: "musala-soft", img: musalaSoft },
    { className: "sutherland", img: sutherland },
    { className: "nordics", img: nordics },
    { className: "ahmad-tea", img: ahmadTea },
    { className: "pirin-golf", img: pirinGolf }
]

export default function Sponsors() {
	return (
		<div className="sponsors">
			<div className="container" style={{ paddingTop: '2em', paddingBottom: '2em' }}>
				<h2 className="sponsors-title">
					<span>Sponsors</span>
				</h2>

				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
					{sponsors.map((sponsor, index) => (
						<div className="col m-4" key={index}>
							<img src={sponsor.img} className={`sponsor-img ${sponsor.className}`} alt=""></img>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
