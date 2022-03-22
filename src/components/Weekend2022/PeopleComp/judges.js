import React from "react";

//speaker imgs must be cropped to exact squares, to keep the cards the same height
import katyaImg from "./images/judges2022/katya.jpg";
import reneImg from "./images/judges2022/rene.png";
import tihomirImg from "./images/judges2022/tihomir.jpg";

import "./ppl.css";

const KatyaDimitrova =
	"Katya is a co-founder and a managing partner of the renowned communication group in Bulgaria - Interpartners. The group consists of Interpartners - an advertising agency, Interimage - PR and corporate communications agency, and Media Camp - a media agency. In 2022 they will celebrate its 30th corporate birthday. Katya stands out with her bright ideas and communication skills, which she mastered throughout her successful professional career in the marketing industry. Katya believes in young talents and is sure that they can make a difference in the dynamic world of innovations. ";

const ReneTomova =
	"A Design Partner at Eleven Ventures where she leads the corporate innovation efforts of the fund and supports startups with Design Sprints and strategic guidance on topics like positioning, HR, Marketing, Management, Growth, Product Market Fit, etc. She is also actively involved in designing and developing the VISA Fintech program of Eleven Ventures. Rene has 15+ years of experience in the corporate world and is a founding partner of the design thinking and innovation agency Creative Shower which works to help companies transform and innovate for better business results. Rene believes in the power of using non-traditional methods of learning, including learning by analogies and learning from practitioners. She has founded the Masterclass series - Moving Forward by Design, where successful practitioners share their learnings and tips from years of experience. ";

const TihomirDyankov =
	"Tihomir Dyankov is an investment professional with over 10 years of experience in public equity markets, venture capital and private equity. He joined the Empower Capital team in 2015, working on projects in the facility management, retail, technology and mining & waste recycling sectors, including multiple greenfield and startup undertakings. Prior to Empower Capital, Tihomir started his professional career managing the equity portfolio (over €170m) of one of the biggest private pension fund managers in Bulgaria, being responsible for equity/fund long-only exposure, portfolio structure, hedging strategies and implementation of risk mitigation procedures. Tihomir holds an MSc in Financial Economics from The University of Oxford and a BA magna cum laude from the American University in Bulgaria (AUBG) with a double major in Applied Economics and Political Science & International Relations. He has been awarded the Chartered Financial Analyst® designation after successfully completing the CFA Institute program.";

const ppl = [
	{
		name: "Katya Dimitrova",
		img: katyaImg,
		bio: KatyaDimitrova,
	},
	{
		name: "Rene Tomova",
		img: reneImg,
		bio: ReneTomova,
	},
	{
		name: "Tihomir Dyankov",
		img: tihomirImg,
		bio: TihomirDyankov,
	},
];

export default function Judges2022() {
	return (
		<div class="ppl">
			<h3>The Judges</h3>
			<div class="cards">
				{ppl.map((person) => (
					<div class="person-card">
						<img src={person.img} alt={person.name} />
						<div class="name">{person.name}</div>
					</div>
				))}
			</div>
		</div>
	);
}
