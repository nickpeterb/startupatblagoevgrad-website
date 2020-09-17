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
import bbq from '../images/sponsors/10minbbq.svg';
import cassia from '../images/sponsors/cassia.png';
import chushka from '../images/sponsors/chushka.png';
import dssmith from '../images/sponsors/dssmith.png';
import hp from '../images/sponsors/hp.svg';
import cupffee from '../images/sponsors/cupffee.png';
import nouri from '../images/sponsors/nouri.png';
import logodaj from '../images/sponsors/logodaj.svg';
import office1 from '../images/sponsors/office1.png';
import otvorko from '../images/sponsors/otvorko.png';
import papabear from '../images/sponsors/papabear.png';
import quinbite from '../images/sponsors/quinbite.png';
import sofiatp from '../images/sponsors/stp.svg';

const sponsors = [
	{ className: "musala-soft", img: musalaSoft },
	{ className: "sutherland", img: sutherland },
	{ className: "societe-generale", img: societeGenerale },
	{ className: "superhosting", img: superhosting },
	{ className: "coca-cola", img: cocaCola },
	{ className: "ahmad-tea", img: ahmadTea },
	{ className: "red-bull", img: redBull },
	{ className: "logodaj", img: logodaj },
	{ className: "bbq", img: bbq },
	{ className: "quinbite", img: quinbite },
	{ className: "chushka", img: chushka },
	{ className: "cupffee", img: cupffee },
	{ className: "nouri", img: nouri },
	{ className: "otvorko", img: otvorko },
	{ className: "cassia", img: cassia },
	{ className: "nordics", img: nordics },
	{ className: "papabear", img: papabear },
	{ className: "dssmith", img: dssmith },
	{ className: "pirin-golf", img: pirinGolf },
	{ className: "hp", img: hp },
	{ className: "sofiatp", img: sofiatp },
	{ className: "office1", img: office1 },
];

const sponsorsText = {
	"title":{
		"en": "Our Partners Were",
		"bg": "Наши Партньори Бяха"
	},
	"button": {
		"en": ["Show Less", "Show More"],
		"bg": ["Виж По-mалko", "Виж Повече"]
	}
}

function ContextAwareToggle({ eventKey, callback, lang }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
		<div style={{marginTop:"1em"}}>
        <button
            type="button"
			onClick={decoratedOnClick}
			className="see-button"
        >
            {isCurrentEventKey ? sponsorsText.button[lang][0] : sponsorsText.button[lang][1]}
        </button>
		</div>
    );
}

export default function Sponsors(props) {
	const cutoff = 8; //The number of sponsors to always show up top

	return (
		<div className="sponsors">
			<div className="container" style={{ paddingTop: '2em', paddingBottom: '2em' }}>
				<h2 className="sponsors-title text-center">
					<span>{sponsorsText.title[props.lang]}</span>
				</h2>

				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 top-row">
					{sponsors.slice(0, cutoff).map((sponsor, index) => (
						<div className="col sponsor-col p-4 text-center" key={index} >
							<img 
								loading="lazy" 
								src={sponsor.img} 
								className={`sponsor-img ${sponsor.className}`}
								alt={sponsor.className}
							>
							</img>
						</div>
					))}
				</div>

				<Accordion className="text-center">
					<Accordion.Collapse eventKey="0">
						<>
						<div className="row row-cols-2 row-cols-sm-3 row-cols-md-4">
							{sponsors.slice(cutoff, sponsors.length).map((sponsor, index) => (
								<div className="col sponsor-col p-4" key={index} >
									<img 
										loading="lazy" 
										src={sponsor.img} 
										className={`sponsor-img-collapsed ${sponsor.className}`} 
										alt={sponsor.className}
									>
									</img>
								</div>
							))}
						</div>
						</>
					</Accordion.Collapse>
					<ContextAwareToggle eventKey="0" lang={props.lang}></ContextAwareToggle>
				</Accordion>
			</div>
		</div>
	);
}
