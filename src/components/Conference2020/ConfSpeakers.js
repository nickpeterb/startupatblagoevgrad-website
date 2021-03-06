import React, { useState, useEffect } from 'react';
import Flickity from 'flickity';

import Modal from 'react-bootstrap/Modal';

//speaker imgs must be cropped to exact squares, to keep the cards the same height
import svetlanImg from './images/speakers/svetlan.jpg';
import ivanLambovImg from './images/speakers/ivan-lambov.jpg';
import ivanIllievImg from './images/speakers/ivan-illiev.jpg';
import ekaterinaImg from './images/speakers/ekaterina.jpg';
import miroslavImg from '././images/speakers/miroslav.jpg';
import deniImg from './images/speakers/deni.jpg';
import dimitarImg from './images/speakers/dimitar.jpeg';
import philippeImg from './images/speakers/philippe.jpg';
import victorImg from './images/speakers/victor.jpg';
import martinImg from './images/speakers/martin.jpg';
import vladiImg from './images/speakers/vladi.jpg';
import ninaImg from './images/speakers/nina.jpg';
import elenaImg from './images/speakers/elena.jpg';
import mikeImg from './images/speakers/mike.jpg';
import eliseImg from './images/speakers/elise.jpg';

import './styles/Flickity.css';
import './styles/ConfSpeakers.css';

const speakersList = [
    {
        name: 'Philippe Boulanger', 
        img: philippeImg,
        bio: 'Philippe is an innovation evangelist who began his career as an entrepreneur while still a PhD student in the IBM Research Center in France. Before diving into the world of startups, he has occupied C-level positions in some of the biggest international corporations among which  Apple and Sony. He dedicates a lot of his time to speaking and consulting businesses on internal and open innovation. Moreover, he is a mentor and advisor to few selected startups as well as a partner in a seed stage venture capital fund. One of his most formidable assets is combining knowledge of the ecosystem of startups and that of the corporate world. His specialties and expertise are hot news and he has given inspiring keynotes on innovation, AI, disruption. growth,change and risk management by experimentation, and futurology.',
    },
    {
        name: 'Denitsa Simeonova', 
        img: deniImg,
        bio: 'As Delivery Manager at Farstar, Denitsa is involved in the creation and management of entrepreneurship programmes for some of the most talented innovators in the world. Her mission is to empower researchers turned entrepreneurs in some of the world\'s fastest-changing environments. She has experience supporting European, African, Latin American and South-East Asian founders. She has also served as the CEO of the Association of the Bulgarian Leaders and Entrepreneurs (ABLE) which unites over 300 members who have started more than 50 businesses.',
    },
    {
        name: 'Svetlan Stanoev', 
        img: svetlanImg,
        bio: "Svetlan is the co-founder of the Business Institute and is the author of the business tool \"Business Idea Mandala\" - an instrument for evaluation of new and innovative business ideas. His tool has received recognition and application in a number of start-ups and innovation incubators as well as in companies in Bulgaria and abroad. Being a former CFO at Orbitel, a Corporate Finance Consultant at KPMG, his specialties include strategic and financial management, corporate finance, venture capital, and start-ups.",
    },
    {
        name: 'Ivan Iliev', 
        img: ivanIllievImg,
        bio: 'Ivan is the founder and CEO of Eden Tech Labs - a digital product development company focused on building the next generation of mobile apps. Together with another Bulgarian tech company Imagga, his startup has developed an application which made it to the top 5 of Apple’s best paid apps in 2018. Owned by a US company, Plant Snap is a mobile app which uses AI for plant image recognition and which has generated close morethan $4M in revenues. In Eden Tech Labs Ivan has assembled a team of A players, hungry for new technologies and ready to tackle today’s challenges.',
    },
    {
        name: 'Nina Prodanova-Iozeva', 
        img: ninaImg,
        bio: 'Nina Prodanova-Iozeva is a founder and CEO of ITCE - a company that provides innovative training and consulting solutions to support digital transformation.  Nina is a highly qualified consultant and a leader with more than 20 years of experience in managing highly complex transformations. Her name is well-known in the field of Agile and Enterprise Architecture. She has also been recognized as one of the E&Y Entrepreneurial Winning Women in Europe, a program which identifies high-potential female leaders with growing and innovative businesses. In her personal time, Nina leads an equally active lifestyle by doing a lot of sport activities such as skiing, climbing, and running. She has won the CEO Dash 1000m running completion 3 years in a row.',
    },
    {
        name: 'Victor Penev', 
        img: victorImg,
        bio: 'Victor Penev is a serial entrepreneur, born in Bulgaria but currently residing in the United States. He was a digital technology pioneer and co-founder of Bulgaria’s largest Internet company, NetInfo, in the late nineties. Victor’s latest startup, Edamam, is aiming to organize the world’s food knowledge, so it can help people everywhere eat better and live longer, healthier lives. The company, which has a development team in Bulgaria, has assembled the world\'s largest, deepest and most accurate database of foods, meals and nutrients and it works with companies such as Nestle, Amazon and The Food Network to realize its mission. Victor is passionate about a number of new technologies both in food tech, but also in fields such as longevity, quantum computing and consciousness hacking.',
    },
    {
        name: 'Dimitar Karaivanov', 
        img: dimitarImg,
        bio: 'Dimitar - the CEO and co-founder of Kanbanzie, is a Lean-thinker and a Kanban practitioner with a background in software development and process improvement. Before founding Kanbanize, he has had more than 15 years experience working in corporations such as Johnson Controls, SAP and Software AG. His startup provides Kanban software for agile project management and has more than 700 customers across the world – ranging from SMEs to Fortune 500 companies. Dimitar is a keynote speaker and author of ‘Lean Software Development with Kanban’. He is an active member of the Lean / Kanban community and supporter of initiatives, which aim to promote it. Currently, he is  working with the GarGarage startup accelerator to help more young people develop their startup ideas.',
    },
    {
        name: 'Elena Nikolova', 
        img: elenaImg,
        bio: 'Elena is one of the three co-founders and the CMO of ESCREO - a startup which helps people be more productive and creative at the workplace. For the last four years she has been living and working the deep waters of building the company, creating a strong brand and marketing their innovative product. Elena is passionate about entrepreneurship and actively supports numerous projects and initiatives in the Bulgarian ecosystem - she is a Forbes 30 under 30 fellow and has been a "Teeninovator" mentor. In her free time she writes in her blog, travels, plays tennis and volunteers in various initiatives.',
    },
    {
        name: 'Miroslav Miroslavov', 
        img: miroslavImg,
        bio: 'Miro is an experienced product manager, entrepreneur, and blogger. He is the co-founder and CEO of one of the most innovative tech startups in Bulgaria, OfficeRnD - a platform thanks to which coworking spaces around the world can fully manage their business processes and provide great service to their clients. Software engineer by vocation with a great entrepreneurial mindset and invaluable business experience, Miro vision is to make "Flexible Working the Way of Working."',
    },
    {
        name: 'Ekaterina Stambolieva', 
        img: ekaterinaImg,
        bio: 'Katia is a serial impact entrepreneur, a female space tech founder and a startup mentor. She describes herself as a swiss-army knife, and in 2019 she was the only woman in Portugal who led and implemented a space tech project. Besides having extensive expertise in Machine Learning , Python and Satellite Image Analysis, she is also skilled in managing medium-sized teams, leading tech communities of +1000 members and mentoring impact & tech entrepreneurs. She is driven to use her skill to create impact in the world - to  contribute with tangible and measurable improvements to either the life of people or the environment.',
    },
    {
        name: 'Vladislav Dramaliev', 
        img: vladiImg,
        bio: 'Vlad is a social entrepreneur, communications and marketing expert, and one of the most outspoken cryptocurrency enthusiasts in Bulgaria. Being one of the founders of the Bulgarian Bitcoin Association, founder of the website CoinFixer.com, and a member of the Bitcoin Foundation, he has explained and defended Bitcoin during numerous public events, and has provided an expert opinion regarding cryptocurrencies for various media. Vlad is heavily focused on the community-building and product side of blockchain technology and is passionate about decentralized finance.',
    },
    {
        name: 'Martin Kuvandzhiev', 
        img: martinImg,
        bio: 'Martin is managing two companies - GoStartups and Assetify. He has 8 years experience in Fintech products and is in blockchain technologies since 2017. He is participating as a board member in Bitcoin Gold and also consults innovative startups from around the world.',
    },
    {
        name: 'Ivan Lambov', 
        img: ivanLambovImg,
        bio: 'Ivan Lambov is the Chief Business Development Officer for Quanterall and the founder of Jitterbits LLC (Beijing). He is a visionary and results-driven Senior Executive with demonstrated experience and expertise in building up startup companies or turning around financially troubled companies. Effective leader and team builder, maximizing productivity through incentives, processes and performance measurement.',
    },
    {
        name: 'Elise Mitchell',
        img: eliseImg,
        bio: "Elise's experience encompasses both entrepreneurial and corporate life. She is the founder of three companies -- two in leadership development, one in public relations. Most notably, she is founder of Mitchell Communications Group, one of the top 10 fastest-growing public relations firms globally and a two-time Inc. 500/5000 fastest growing company. The firm has twice been named Agency of the Year by PR Week and PRovoke. Clients include Walmart, Procter & Gamble, Marriott, Mondelez and other well-known brands.",
        video: "https://www.youtube.com/embed/q7S4nmzVkL8",
        featured: true,
    },
    {
        name: 'Mike Diamond', //style={{textDecorationLine: 'underline', color:'lightblue', cursor:'pointer'}} onClick={() => window.open('https://apexgmat.com/','_blank')}
        img: mikeImg,
        bio: <div> Mike Diamond is <a href="https://apexgmat.com/" target="_blank" rel="noopener noreferrer">Apex</a>’s Co-Founder and Director of Curriculum Development.  
        He has a diverse background with deep experience in finance politics and education. Having run successful companies through inception and growth phases his agile business approach has resulted in a deep understanding of how to overcome challenges faced by businesses at any stage. Clients look to Mike for advice in the start-up world, family business succession and new leadership training. With over 20 years of experience he has helped countless clients with business growth plans, risk management and decision making heuristics.</div>
    },
]

export default function ConfSpeakers() {
    //makes sure carousel index stays in bounds
    const mod = (x, m) => {
        return (x % m + m) % m;
    }

    /* keeps track of which speaker to display in the modal */
	const [activeSpeaker, setActiveSpeaker] = useState({
		name: "",
		tagline: "",
		img: "",
		bio: "",
	});

    const handleActiveSpeaker = (matchName) => {
        let speaker = speakersList.find(speaker => speaker.name === matchName);
        setActiveSpeaker(speaker);
    }

    useEffect(() => {
        //initialize carousel
        var elem = document.querySelector('.flick-carousel');
        var flkty = new Flickity(elem, {
            selectedAttraction: 0.02,
            friction: 0.2,
            wrapAround: true,
            setGallerySize: false,
            pageDots: false
        });

        var cellElements = flkty.getCellElements();
        //set the 2 cells to the right and left of the selected cell to medium sizes
        cellElements[mod(flkty.selectedIndex + 1, flkty.cells.length)].style.transform = "scale(0.8) translateY(0.01%)";
        cellElements[mod(flkty.selectedIndex - 1, flkty.cells.length)].style.transform = "scale(0.8) translateY(0.01%)";
        cellElements[mod(flkty.selectedIndex + 2, flkty.cells.length)].style.transform = "scale(0.65) translateY(-50%)";
        cellElements[mod(flkty.selectedIndex - 2, flkty.cells.length)].style.transform = "scale(0.65) translateY(-50%)";

        handleActiveSpeaker(cellElements[flkty.selectedIndex].querySelector('.speaker-name').innerText);
        
        flkty.on('change', function (index) {
            handleActiveSpeaker(cellElements[flkty.selectedIndex].querySelector('.speaker-name').innerText);

            //set all cells to small size and push them up
            for (let i = 0; i < cellElements.length; i++) {
                cellElements[mod(i, flkty.cells.length)].style.transform = "scale(0.5) translateY(-150%)";
            }
            //set the 2 cells to the right and left of the new selected cell to medium sizes
            cellElements[mod(index + 1, flkty.cells.length)].style.transform = "scale(0.8) translateY(0.01%)";
            cellElements[mod(index - 1, flkty.cells.length)].style.transform = "scale(0.8) translateY(0.01%)";
            cellElements[mod(index + 2, flkty.cells.length)].style.transform = "scale(0.65) translateY(-50%)";
            cellElements[mod(index - 2, flkty.cells.length)].style.transform = "scale(0.65) translateY(-50%)";
            //make selected cell full size
            cellElements[index].style.transform = "translateY(35%)";
        });

        flkty.on( 'staticClick', function( event, pointer, cellElement, cellIndex ) {
            flkty.select(cellIndex);
        });
    });

	/* handles opening and closing the modal */
	const [show, setShow] = useState(false);

    const featuredFirst = (x,y) => {
        return (x.featured === y.featured)? 0 : x.featured? -1 : 1;
    }

    return (
        <>
            <Modal className="conf-speakers-modal" size="lg" scrollable={true} background="true" show={show} onHide={() => setShow(false)}>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<div className="row">
						<div className="col-xs mx-auto align-self-center">
							<img src={activeSpeaker.img} className="modal-img" alt=""></img>
						</div>
						<div className="col-lg speaker-bio text-center">
							<div><span>{activeSpeaker.name}</span></div>
							<div style={{marginTop:"1em"}}>{activeSpeaker.bio}</div>
						</div>
					</div>
				</Modal.Body>
			</Modal>
        <div className="conf-speakers">
            <h2 className="conf-speakers-title text-center"><span>Speakers</span></h2>
            <div className="flex-container">
                <div className="flick-carousel">
                        {speakersList.sort(featuredFirst).map((speaker, index) => (
                            <div className="cell-wrapper" key={index}>
                                <img
                                    src={speaker.img} 
                                    className="flick-carousel-cell" 
                                    alt={speaker.name} 
                                    style={{willChange:'transform'}}
                                >
                                </img>
                                <div className="speaker-name">{speaker.name}</div>
                                <div className="speaker-tagline" onClick={() => setShow(speaker)}>Learn More</div>
                            </div>
                        ))}
                </div>
            </div>
            {activeSpeaker.video &&
            <div className="speaker2020-video-wrapper">
                <iframe title="speaker2020-video" className="speaker2020-video" width="100%" height="100%" src={activeSpeaker.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
            </div>
            }
        </div>
        </>
    );
}