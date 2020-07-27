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

const sponsorImgs = [
    cocaCola,
    redBull,
    superhosting,
    societeGenerale,
    musalaSoft,
    sutherland,
    ahmadTea,
	nordics,
	pirinGolf
];

export default function Sponsors() {
	return (
		<div className="sponsors">
			<div className="container" style={{ paddingTop: '2em', paddingBottom: '2em' }}>
				<h2 className="sponsors-title">
					<span>Sponsors</span>
				</h2>

				<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
					{sponsorImgs.map((sponsor, index) => (
						<div class="col m-4">
							<img src={sponsor} class="sponsor-img" alt=""></img>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
