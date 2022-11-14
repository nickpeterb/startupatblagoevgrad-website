import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import MediaQuery from "react-responsive";

import "./styles/Team.css";

//The Board
import martySta from "../images/team/Marty Stanchev.png";
import elenaz_1 from "../images/team/Elena Z 1.png";
import toni from "../images/team/Antonia.png";
import kris from "../images/team/kris.png";

//Speakers
import jordan from "../images/team/Dan4o.png";
import martST from "../images/team/Marty Stoilkov.png"
import nicky from "../images/team/Nicky.png";
import alexZ from "../images/team/Alex Z.png";
import aleksandrina from "../images/team/Aleksandrina.png";
import yoana from "../images/team/Yoanna.png";

//Sponsorship
import elenaz_2 from "../images/team/Elena Z 2.png";
import lora from "../images/team/Lora.png";
import tedyN from "../images/team/Tedi N.png";
import ivaylo from "../images/team/Ivaylo.png";
import tedyM from "../images/team/Tedi M.png";
import sofia from "../images/team/Sofia.png";
import tomi from "../images/team/Tomy.png";

//Marketing
import bobi from "../images/team/Bobi.png";
import teddy from "../images/team/Teddy V.png";
import emo from "../images/team/Emilian.png";
import koko from "../images/team/Kaloyan.png";
import nikolValeri from "../images/team/Nikol-Valeri.png";
//import tony from '../images/team/Emily.png';
import sami from "../images/team/Sami.png";


//IT
import denis from "../images/team/Denis.png";
import nick from "../images/team/nick.png";

const teamText = {
	title: {
		en: "Our Team",
		bg: "Екипът Зад Всичко Това",
	},
	board: {
		en: "The Board",
		bg: "Борд",
	},
	speakers: {
		en: "Speakers Department",
		bg: "Отдел Лектори",
	},
	sponsorship: {
		en: "Sponsorship Department",
		bg: "Отдел Спонсори",
	},
	marketing: {
		en: "Marketing Department",
		bg: "Отдел Маркетинг",
	},
	it: {
		en: "IT Department",
		bg: "Отдел IT",
	},
};

const board = [
	{
		name: "Martin Stanchev",
		img: martySta,
		title: { en: "President", bg: "Президент" },
		linkedIn: "",
	},
	{
		name: "Elena Zaharieva",
		img: elenaz_1,
		title: { en: "Vice President", bg: "Вицепрезидент" },
		linkedIn: "",
	},
	{
		name: "Antonia Rusalieva",
		img: toni,
		title: { en: "Vice President", bg: "Вицепрезидент" },
		linkedIn: "",
	},
	{
		name: "Kristian Petrov",
		img: kris,
		title: { en: "Treasurer", bg: "Ковчежник" },
		linkedIn: "",
	},
];

const speakersDept = [
	{
		name: "Antonia Rusalieva",
		img: toni,
		title: { en: "Head of Speakers", bg: "Ръководител на отдел Лектори" },
		linkedIn: "",
	},
	{ name: "Martin Stanchev", img: martySta, linkedIn: "" },
	{ name: "Aleksandrina Andonova", img: aleksandrina, linkedIn: "" },
	{ name: "Aleksandar Zemlyakov", img: alexZ, linkedIn: "" },
	{ name: "Yoana Stoimenova", img: yoana, linkedIn: "" },
	{ name: "Elena Zaharieva", img: elenaz_1, linkedIn: "" },
];

const sponsorsDept = [
	{
		name: "Teodora Nikolova",
		img: tedyN,
		title: {
			en: "Co-Head of Sponsorship",
			bg: "Ръководител на отдел Спонсори",
		},
		linkedIn: "",
	},
	{
		name: "Kris Petrov",
		img: kris,
		title: {
			en: "Co-Head of Sponsorship",
			bg: "Ръководител на отдел Спонсори",
		},
		linkedIn: "",
	},
	{ name: "Martin Stoilkov", img: martST, linkedIn: "" },
	{ name: "Elena Petrova", img: elenaz_2, linkedIn: "" },
	{ name: "Ivaylo Todorov", img: ivaylo, linkedIn: "" },
	{ name: "Lora KLassanova", img: lora, linkedIn: "" },
	{ name: "Teodora Miteva", img: tedyM, linkedIn: "" },
	{ name: "Sofia Boneva", img: sofia, linkedIn: "" },
	{ name: "Tomislav Tomov", img: tomi, linkedIn: "" },
];

const marketingDept = [
	{
		name: "Emilian Pramatarov",
		img: emo,
		title: {
			en: "Head of Marketing",
			bg: "Ръководител на отдел Маркетинг",
		},
		linkedIn: "",
	},
	{
		name: "Nikol-Valeri Dimitrova",
		img: nikolValeri,
		linkedIn: "",
		title: {
			en: "Co-head of Marketing",
			bg: "Ръководител на отдел Маркетинг",
		},
	},
	{ name: "Teodora Vasileva", img: teddy, linkedIn: "" },
	{ name: "Kaloyan Todorov", img: koko, linkedIn: "" },
	{ name: "Boris Yotov", img: bobi, linkedIn: "" },
];

const itDept = [
	{
		name: "Denis Milanov",
		img: denis,
		title: { en: "Head of IT", bg: "Ръководител на IT" },
		linkedIn: "",
	},
	{ name: "Lora KLassanova", img: lora, linkedIn: "" },
	{ name: "Nick Bruhnev", img: nick, linkedIn: "" },
];

function MembersSlide(props) {
	return (
		<div className="members-slide">
			<div
				className="row top-row"
				style={{
					background: `linear-gradient(to top, ${props.bgColor} 75%, transparent 25%)`,
				}}
			>
				{props.slide.map((member, index) => (
					<div
						className="col member-img-col text-center"
						style={{ height: "13em" }}
						key={index}
					>
						<img
							loading="lazy"
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
						<span className="member-title">
							{member.title?.[props.lang]}
						</span>
						<div
							className="line"
							style={{ borderColor: props.bgColor }}
						></div>
						{member.linkedIn !== "" ? (
							<i
								className="fa fa-linkedin-square"
								onClick={() =>
									window.open(member.linkedIn, "_blank")
								}
							></i>
						) : (
							<i
								className="fa fa-linkedin-square"
								style={{ color: "#F3F3F3" }}
							></i>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

function Dept(props) {
	const membersLgDevice = 5; //How many members to show on big screens

	/* Hide controls when carousel shows all members */
	const [hideCarousel, setHideCarousel] = useState("");
	const toggleHideCarousel = () => {
		if (props.members.length <= membersLgDevice)
			setHideCarousel("hide-carousel");
		else setHideCarousel("");
	};

	useEffect(() => {
		toggleHideCarousel();
	});

	const chunkArray = (array, size) => {
		let result = [];
		for (let i = 0; i < array.length; i += size) {
			let chunk = array.slice(i, i + size);
			result.push(chunk);
		}
		return result;
	};

	return (
		<>
			<h3 className="text-center">{props.teamName}</h3>

			<MediaQuery maxWidth={360}>
				<Carousel interval={null}>
					{chunkArray(props.members, 1).map((group, index) => (
						<Carousel.Item key={index}>
							<MembersSlide
								slide={group}
								bgColor={props.bgColor}
								lang={props.lang}
							/>
						</Carousel.Item>
					))}
				</Carousel>
			</MediaQuery>

			<MediaQuery minWidth={361} maxWidth={768}>
				<Carousel interval={null}>
					{chunkArray(props.members, 2).map((group, index) => (
						<Carousel.Item key={index}>
							<MembersSlide
								slide={group}
								bgColor={props.bgColor}
								lang={props.lang}
							/>
						</Carousel.Item>
					))}
				</Carousel>
			</MediaQuery>

			<MediaQuery minWidth={769} maxWidth={999}>
				<Carousel interval={null}>
					{chunkArray(props.members, 3).map((group, index) => (
						<Carousel.Item key={index}>
							<MembersSlide
								slide={group}
								bgColor={props.bgColor}
								lang={props.lang}
							/>
						</Carousel.Item>
					))}
				</Carousel>
			</MediaQuery>

			<MediaQuery minWidth={1000} onChange={toggleHideCarousel}>
				<Carousel className={hideCarousel} interval={null}>
					{chunkArray(props.members, membersLgDevice).map(
						(group, index) => (
							<Carousel.Item key={index}>
								<MembersSlide
									slide={group}
									bgColor={props.bgColor}
									hideIndicators={true}
									lang={props.lang}
								/>
							</Carousel.Item>
						)
					)}
				</Carousel>
			</MediaQuery>
		</>
	);
}

export default function Team(props) {
	return (
		<div className="team">
			<div
				className="container-fluid"
				style={{ paddingTop: "2em", paddingBottom: "2em" }}
			>
				<h2 className="team-title text-center">
					<span>{teamText.title[props.lang]}</span>
				</h2>

				<Dept
					teamName={teamText.board[props.lang]}
					members={board}
					bgColor="#fbbb06"
					lang={props.lang}
				/>

				<Dept
					teamName={teamText.speakers[props.lang]}
					members={speakersDept}
					bgColor="#aa1638"
					lang={props.lang}
				/>

				<Dept
					teamName={teamText.sponsorship[props.lang]}
					members={sponsorsDept}
					bgColor="#579ccb"
					lang={props.lang}
				/>

				<Dept
					teamName={teamText.marketing[props.lang]}
					members={marketingDept}
					bgColor="#731c64"
					lang={props.lang}
				/>

				<Dept
					teamName={teamText.it[props.lang]}
					members={itDept}
					bgColor="#2ECC40"
					lang={props.lang}
				/>
			</div>
		</div>
	);
}
