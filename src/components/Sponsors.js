import React, {useContext} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

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
];

//This seems overengineered, but it's the only 100% reliable way I found to change the button
function ContextAwareToggle({ eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <button
            type="button"
            style={{border:"none", background:"none", fontSize:"1.2em",margin:"1em"}}
            onClick={decoratedOnClick}
        >
            {isCurrentEventKey ? 'Show Less' : 'Show More'}
        </button>
    );
}

export default function Sponsors() {
	const cutoff = 4; //The number of sponsors to always show up top

	return (
		<div className="sponsors">
			<div className="container" style={{ paddingTop: '2em', paddingBottom: '2em' }}>
				<h2 className="sponsors-title text-center">
					<span>Sponsors</span>
				</h2>

				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
					{sponsors.slice(0, cutoff).map((sponsor, index) => (
						<div className="col sponsor-col p-4 text-center" key={index}>
							<img src={sponsor.img} className={`sponsor-img ${sponsor.className}`} alt=""></img>
						</div>
					))}
				</div>

				<Accordion className="text-center">
					<ContextAwareToggle eventKey="0"></ContextAwareToggle>
					<Accordion.Collapse eventKey="0">
						<>
						<div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-4">
							{sponsors.slice(cutoff, sponsors.length).map((sponsor, index) => (
								<div className="col sponsor-col p-4" key={index}>
									<img src={sponsor.img} className={`sponsor-img-collapsed ${sponsor.className}`} alt=""></img>
								</div>
							))}
						</div>
						<Accordion.Toggle className="show-less" as="button" eventKey="0" style={{fontSize:"1.1em",marginTop:"1em", border:"none", background:"none"}}>
							Show Less
                    	</Accordion.Toggle>
						</>
					</Accordion.Collapse>
				</Accordion>
			</div>
		</div>
	);
}
