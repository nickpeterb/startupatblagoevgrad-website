import React from "react";

import "./ppl.css";

//speaker imgs must be cropped to exact squares, to keep the cards the same height
import simeonImg from "./images/mentors2022/simeon.jpg";
import miroslavImg from "./images/mentors2022/miroslav.jpg";
import desislavaImg from "./images/mentors2022/desislava.jpg";
import theofilImg from "./images/mentors2022/theofil.jpg";
import stoyanImg from "./images/mentors2022/stoyan.jpeg";
import hristomirImg from "./images/mentors2022/hristomir.jpg";
import dimitarImg from "./images/mentors2022/dimitar.jpg";
import hristinaImg from "./images/mentors2022/hristina.jpg";
import georgiImg from "./images/mentors2022/georgi.jpg";

const SimeonAdanov =
	"Simeon has had his fair share of international influence and experience in both corporate & start-up environments, and is eager to guide future entrepreneurs! Born in Singapore, having grown up in The Netherlands, and studied in Ireland before gaining 5 years of experience in both the consulting & construction industry across Portugal, UK, Italy, Simeon is a proven trailblazer who relies on strong analytical skills and emotional intelligence to find solutions to customer-centric needs. Currently the Chief Commercial Officer at Humans in the Loop, Simeon is passionate about solving modern-day problems with innovative and practical solutions.";

const MiroslavNedyalkov =
	"Entrepreneur and software engineer. Co-founder of OfficeRnD. Passionate about automating boring work and making free time for more creative activities. Has more than 15 years of experience building high-quality software products. Loves to help other people learn new things and be more productive.";

const DesislavaAvdzieva =
	"For more than 13 years Desislava has been the founder and manager of Alternative Advertising EOOD. The agency provides services for brand identity, communication strategies, and events, BTL, etc.Desislava is the Vice President of the Association of Women Entrepreneurs in Bulgaria Selena. She is also a co-founder of the WolfXR Solutions brand, focusing on virtual and augmented reality solutions.Desislava has experience as a PR expert, marketing specialist, personal and corporate brand consultant, event consultant and trainer, and business consultant in creating a business and structuring and optimizing business processes.";

const TheofilShilkov =
	"Teofil (Theo) Shikov is a Founder and CEO of Out2Bound - sales development agency that helps technology companies attract more B2B clients and find new markets around the globe. A true fan of the bootstrapping process, he’s always been fond of starting and scaling organizations from the ground up. Part of Forbes 30 under 30 class of 2018 in Business category, Theo is an AIESEC alumnus, ABLE member and Clean tech startups consultant. Part of the management body of BAIT. He has business experience on 4 continents and personal track record of closed deals for over $1m. Previous experience include: running non-profit; living in Finland and India and working for the ICT giant TCS (part of Tata Group) in their Mumbai HQ.";

const StoyanRahov =
	"Stoyan is a Managing Director at Elevate AUBG Accelerator since 2020. It is an experience and mentorship-based program designed to help AUBG-ers start a business. He also works as an Investment Analyst at Capital Investment Fund. The fund is mainly focused on providing growth capital for the development of the private equity ecosystem in Bulgaria. Being an AUBG alumnus, Stoyan has different interests varying from winter and summer sports to more exotic ones like surviving Underground on a Thursday night. Stoyan’s professional background includes finance and investment positions, while the AUBG Accelerator work gives him insights into the startup environment, which makes him eager and capable of helping every team. ";

const HristomirVitanov =
	"Hristomir Vitanov - Muro is an advertiser, entrepreneur and marketologist with more than 7 years of experience in the area. He graduated with political science, however, later on found his passion in analyzing customer behavior in social media and advertisement production. A large part of the innovations in digital marketing can be traced back to him. His expertise expands from managing advertisement budgets in the global environment which budgets are worth millions, through development of business models for direct sales, all the way to car brand management.Throughout his career Hristomir has been a marketing director in several technological start-ups. In 2018 Muro created ANOMALY - an agency which breaks the already established marketing norms, using bold methods based on the “unexpected, but mutually accepted” principle. The company uses innovative ways to develop the businesses of their customers on a daily basis. Later on he creates GEROI - an agency for Performance Marketing, and Anomaly Studio - One of his newest projects is creating and developing personal brands under ANOMALY.Muro has been a lecturer at a TEDx conference twice and is a laureate in the competition for young manager in the “EVRIKA” Foundation.";

const DimitarBratovanov =
	"Among our mentors this year is Dimitar Bratovanov (Mitko), a Product Manager at Nexo - a lending institution in the digital finance industry that empowers millions of people to harness the value behind their crypto assets, shaping a new, better financial system. As a PM, he is involved in the discovery, development, market launch, and iterations of Nexo’s financial products. We are excited to have Mitko as part of our Mentors this year, as he is also one of our StartUP@Blagoevgrad club alumni, who will be sharing his knowledge and experience with our StartUPWeekend participants.";

const HristinaBalabanova =
	"Hristina is an AUBG alumna. She is currently a Solution Marketing Manager at Atos and a freelance graphic and UX / UI designer. Hristina likes translating complex technical information into customer journeys and easy-to-understand stories, both in writing and visually. She loves combining marketing and design because they complement each other and expand her knowledge of the needs of the customers and how to address them in the best way. Hristina has worked both in startups and in corporate organizations in Bulgaria and in the Netherlands and has experience in various industries, such as software development, IT services and consulting. In her free time, she likes drawing, singing and learning languages.";

const GeorgiKostadinov =
	"Georgi Kostadinov is Co- Founder and CTO of Kelvin Health. A company destined to bring an intelligent solution for detection and monitoring of medical abnormalities using thermal imaging AI. During his career Georgi has been always on track with the most recent innovations in the technological industry. His background includes more than 10 years of experience in research and development of various machine learning algorithms for image and video understanding and over 15 years of experience in developing, deploying and managing complex software architectures. ";

const ppl = [
	{
		name: "Simeon Adanov",
		img: simeonImg,
		bio: SimeonAdanov,
	},
	{
		name: "Miroslav Nedyalkov",
		img: miroslavImg,
		bio: MiroslavNedyalkov,
	},
	{
		name: "Desislava Avdzieva",
		img: desislavaImg,
		bio: DesislavaAvdzieva,
	},
	{
		name: "Theofil Shilkov",
		img: theofilImg,
		bio: TheofilShilkov,
	},
	{
		name: "Stoyan Rahov",
		img: stoyanImg,
		bio: StoyanRahov,
	},
	{
		name: "Hristomir Vitanov",
		img: hristomirImg,
		bio: HristomirVitanov,
	},
	{
		name: "Dimitar Bratovanov",
		img: dimitarImg,
		bio: DimitarBratovanov,
	},
	{
		name: "Hristina Balabanova",
		img: hristinaImg,
		bio: HristinaBalabanova,
	},
	{
		name: "Georgi Kostadinov",
		img: georgiImg,
		bio: GeorgiKostadinov,
	},
];

export default function Mentors2022({ lang }) {
	return (
		<>
			<div class="ppl">
				<h3>The Mentors</h3>
				<div class="cards">
					{ppl.map((person) => (
						<div class="person-card">
							<img src={person.img} alt={person.name} />
							<div class="name">{person.name}</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
