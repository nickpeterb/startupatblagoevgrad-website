import React, { useState } from 'react';
import OnImagesLoaded from 'react-on-images-loaded';

import Modal from 'react-bootstrap/Modal';

import './styles/Speakers.css';

//speaker imgs must be cropped to exact squares, to keep the cards the same height
import kirilImg from '../images/speakers/justine.jpg';
import justineImg from '../images/speakers/justine.png';
import cliffordImg from '../images/speakers/clifford.jpg';
import omarImg from '../images/speakers/omar.jpg';
import nikiImg from '../images/speakers/niki.jpg';
import borisImg from '../images/speakers/boris.png';
import blagovestaImg from '../images/speakers/blagovesta.png';
import ashImg from '../images/speakers/ash.jpg';

const KirilPetkov = 'Kiril is the co-founder of the Center for Economic Strategy and Competitiveness where he teaches courses on economic development and enterperneurship, and the CEO and co-founder of the biotech startup ProViotic. Being experienced in investment projects in the field of multi-disciplinary and high-tech innovations in Bulgaria, he has worked for McCain Group. He is also the CEO of the investment company BDC which is focused on investing in tech and science startups from Eastern Europe. Kiril holds a MBA from Harvard Business School where he graduated in the top 10% of his class.';
const KirilPetkovBG = 'Кирил е съосновател на Центъра за икономически стратегии и конкурентоспособност, където преподава икономическо развитие и предприемачество, както и главен изпълнителен директор и съосновател на биотехнологичния стартъп ProViotic. С богат опит в инвестирането в мултидисциплинарни и високотехнологични иновации в България, той е работил за McCain Group. Кирил е също главен изпълнителен директор на инвестиционната компания BDC, която инвестира предимно в технологични и научни стартъпи от Източна Европа. Завършил магистратурата си по бизнес администрация в Harvard Business School, където е бил в топ 10% на най-добрите в неговия клас.';

const JustineToms = 'Justine Toms is an expert in online media and marketing, founder of digital agency ABC Design & Communication, and the  creator of a number of niche online websites, such as Az-jenata.bg and Az-deteto.bg. Justine has also been the idea leader of the competition for best Bulgarian online projects - BG Site since 1999. She is the author of 15 books in the area of online presence, digital media, CSR and communication, entrepreneurship and a lecturer at New Bulgarian University and SoftUni Digital.';
const JustineTomsBG = 'Жюстин Томс е експерт в сферата на дигиталните медии и маркетинг, основателка на дигиталната агенция BC Design & Communication и създателка на няколко нишови уебсайтове, сред които  Az-jenata.bg и Az-deteto.bg. Жюстин е също идейният лидер на състезанието за най-добрите български онлайн проекти – BG Site от 1999. Тя е автор на 15 книги на теми вариращи от онлайн присъствие, дигитални медии, корпоративна социална отговорност, комуникации и предприемачество, както и лектор в Ноб Български Университет и СофтУни.';

const CliffordHurst = 'Clifford is a professor at Westminster College in Salt Lake City where he teaches entrepreneurship, social entrepreneurship, and a variety of leadership and management courses. For 24 years, he owned and operated an organizational development consulting practice with clients across the US and Canada, as well as the UK, Germany, Dubai, Hong Kong, and Australia. Cliff\'s mission in life is to help people to know themselves, choose themselves, grow themselves, and then give themselves to something greater than themselves.';
const CliffordHurstBG = 'Клифорд е професор в Уестминстърския колеж в  Солт Лейк Сити, където преподава социално предприемачество, лидерство и мениджмънт. В продължение на 24 години той е управлявал консултантска агенция по организационно развитие с клиенти от САЩ, Канада, Англия, Германия, Дубай, Хонг Конг и Австралия. Мисията, която Клиф си е поставил, е да помага на хората да се самоопознаят, препокрият и развиват като личности.';

const OmarAlBusaidy = 'Omar Al Busaidy is a Fulbright nominee, a best-selling author, entrepreneur and the host of Future Talk, the only radio show dedicated to tech in the UAE. Due to having such various roles and interests, Omar has many different accomplishments ranging from publishing his personal development book "Just Read It" and “Why Jobs are Robots and Life is for People", to investing in startups from all kinds of industries. Al Busaidy’s passion lies in entrepreneurship and futurism, hence, since 2010, he has been invited to mentor students on entrepreneurship and leadership at several universities across the UAE.';
const OmarAlBusaidyBG = 'Омар ал Бусайди е стипендиант по програма „Фулбрайт“, както и автор на бестселър, предприемач и водещ на единственото радио предаване, посветено на технологии в ОАЕ. Поради разнообразните си роли, Омар има много различни постижения: от издаването на книга за личностно развитие „Just Read It“ и  „Why Jobs are Robots and Life is for People“ до инвестирането в стартъпи от най-различни индустрии.  Ал Бусайди е канен като ментор по предприемачество и лидерство от множество университети в ОАЕ, а страстта му, освен в предприемачеството, се крие и във футуризма.';

const NikiIliev = 'Niki is an actor who appears in American, Italian, Russian, German, French and Bulgarian movies and TV series. He made his professional debut as a director with the movie “The Foreigner” -- the most watched and highest grossing Bulgarian film for 2012 and 2013. Niki has directed many award-wining movies and TV series among which is his third feature movie as a director/writer/producer “All She Wrote” (2018) which is acclaimed by film festivals in Paris, New York and Rome. Niki Iliev has a Master degree in film directing and acting and since 2015 he has been teaching film directing in The New Bulgarian University.';
const NikiIlievBG = 'Ники е актьор, участващ в американски, италиански, руски, германски, френски и български сериали и филми. Неговият професионален дебют е като режисьор на филмът “Чужденецът” – най-гледаният и проходен български филм за 2012 и 2013. Ники е режисирал много други награждавани филми и сериали, сред които неговият трети  дебютен филм като режисьор/композитор и продуцент „Всичко, което тя написа“ (2018), спечелил награди на филмови фестивали в Париж, Ню Йорк и Рим. Ники завършва своята магистърска степен по филмово режисьорство и авторство и от 2015 насам преподава режисиране в Нов Български Университет.';

const BorisHristov = 'Boris is the founder of the presentation agency 356labs and the only Bulgarian who has been awarded as a PowerPoint MVP (Most Valuable Professional). He has presented in 25+ countries and has been rated as the top speaker numerous times. Boris has years of experience as a trainer, mentor, and consultant who has coached not just students, but also IT, sales, marketing and management professionals on topics ranging from presentation skills and storytelling through the psychology behind slide design.';
const BorisHristovBG = 'Борис е основателят на презентационната агенция 356labs и отличен като единственият българин, носител на наградата Power Point MVP (Most Valuable Professional). Той е високо оценен лектор, които е презентирал в повече от 25 държави. Борис има опит като ментор, консултант и инструктор, като е обучавал не само ученици и студенти, а и професионалисти от ИТ, маркетинг, мениджмънт на теми, вариращи от презентационни умения и развиване на бранд история до психологията зад дизайна на слайдовете.';

const BlagovestaPugyova = 'Blagovesta Pugyova is a social entrepreneur and the founder of one of the most meaningful NGOs in Bulgaria - the "Give a Book" foundation. She is the CEO of the software development company Childish, the executive director of Time Heroes and the Chief Operating Officer of JobTiger. She has been awarded by the Bulgarian Helsinki Committee for "Person of the Year" and named for "30 under 30" by Forbes magazine in 2016.';
const BlagovestaPugyovaBG = 'Благовеста Пугьова е социален предприемач и основател на едно от най-значимите НПО-та в България – фондацията „Подари книга“. Тя е главен изпълнителен директор на компанията за софтуерно развитие Childish, изпълнителен директор на платформата за доброволчество TimeHeroes и главен оперативен директор на JobTiger. Награждавана е от Българския Хелзинкски Комитет за „Човек на годината“ и е отличена от списание Форбс като част от класацията „30 под 30“ през 2016.';

const AshKumra = 'Ash is a community builder, global speaker, meditation coach and national radio show host recognized twice by the White House as “an entrepreneur making an impact.” He is the Chairman, and co-founder of digital content distribution agency DesiYou. Ash is also an active angel investor and coach for businesses involved with consumer internet, entertainment and digital media. He is a frequent speaker on entrepreneurship, a professor on entrepreneurship, and the creator of the entrepreneurship movement YOUNGRY for millennials, women and inclusive entrepreneurs.';
const AshKumraBG = 'Аш е световен лектор, инструктор по медитация, радиоводещ и „градител на общества“, отличен два пъти от Белия дом като предприемач, които оставя положителна следа. Той е председател и съосновател на агенцията за дистрибутиране на дигитално съдържание DesiYou. Аш е също активен ангел инвеститор и коуч за бизнеси, които се занимават с потребителски интернет, развлечение и дигитални медии. Той е лектор и професор по предприемачество и създател на предприемаческото движение за младежи YOUNGRY.';

const speakersList = [
	{
	   name:{'en': 'Kiril Petkov', 'bg': 'Кирил Петков'},
	   tagline:'Co-Founder, Center for Economic Strategy',
	   img:kirilImg,
	   bio:{en: KirilPetkov, bg: KirilPetkovBG},
	   social:"https://www.linkedin.com/in/kiril-petkov-86381412/"
	},
	{
	   name:{'en': 'Omar Al Busaidy', 'bg': 'Омар ал Бусайди' },
	   tagline:'Fulbright Nominee, Entrepreneur, and Futurist',
	   img:omarImg,
	   bio:{en: OmarAlBusaidy, bg: OmarAlBusaidyBG},
	   social:"https://www.linkedin.com/in/omaralbusaidy/?originalSubdomain=ae"
	},
	{
	   name:{'en':'Clifford Hurst', 'bg':'Клифорд Хърст'},
	   tagline:'Professor of Entrepreneurship at Westminster College',
	   img:cliffordImg,
	   bio:{en: CliffordHurst, bg: CliffordHurstBG},
	   social:"https://www.linkedin.com/in/cliffhurst/"
	},
	{
	   name:{'en':'Justine Toms', 'bg':'Жюстин Томс'},
	   tagline:'Founder, ABC Design & Communication',
	   img:justineImg,
	   bio:{en: JustineToms, bg: JustineTomsBG},
	   social:"https://www.linkedin.com/in/justinetoms/"
	},
	{
	   name:{'en':'Niki Iliev','bg':'Ники Илиев'},
	   tagline:'Director and Actor, "The Foreigner"',
	   img:nikiImg,
	   bio:{en: NikiIliev, bg: NikiIlievBG},
	   social:"https://www.facebook.com/niki.iliev.official/"
	},
	{
	   name:{'en':'Boris Hristov', 'bg':'Борис Христов'},
	   tagline:'Founder, 365Labs and PowerPoint Specialist',
	   img:borisImg,
	   bio:{en: BorisHristov, bg: BorisHristovBG},
	   social:"https://www.linkedin.com/in/brshristov/"
	},
	{
	   name:{'en':'Blagovesta Pugyova', 'bg':'Благовеста Пугьова'},
	   tagline:'Founder, Give A Book Foundation',
	   img:blagovestaImg,
	   bio:{en: BlagovestaPugyova, bg: BlagovestaPugyovaBG},
	   social:"https://www.linkedin.com/in/blagovesta-pugyova-bb178653/"
	},
	{
	   name:{'en':'Ash Kumra', 'bg':'Аш Кумра'},
	   tagline:'Radio Show Host, Community Builder, and Global Speaker',
	   img:ashImg,
	   bio:{en: AshKumra, bg: AshKumraBG},
	   social:"https://www.linkedin.com/in/ashkumra/"
	},
 ]

export default function Speakers({lang}) {

	const speakersText = {
		"title":{
			"en": "Our Guests",
			"bg": "Наши Гости"
		}
	}

	/* keeps track of which speaker to display in the modal */
	const [activeSpeaker, setActiveSpeaker] = useState({
		name: "",
		tagline: "",
		img: "",
		bio: "",
		social: ""
	});

	/* handles opening and closing the modal */
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = (item) => {
		setActiveSpeaker(item);
		setShow(true);
	};

	const [loading, setLoading] = useState(true);

	const socialButton = (link) => {
		if(link.includes("linkedin")) return "linkedin";
		if(link.includes("facebook")) return "facebook";
	}

	return (
		<>
			<Modal size="lg" scrollable={true} background="true" show={show} onHide={handleClose}>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<div className="row">
						<div className="col-xs mx-auto align-self-center">
							<img src={activeSpeaker.img} className="modal-img" alt=""></img>
						</div>
						<div className="col-lg speaker-bio text-center">
							<div><span>{activeSpeaker.name[lang]}</span></div>
							<div style={{marginTop:"1em"}}>{activeSpeaker.bio[lang]}</div>
							
							<i 
								className={"fa fa-" + socialButton(activeSpeaker.social) + "-square"} 
								onClick={() => window.open(activeSpeaker.social,'_blank')}
								style={{ padding: "0.3em", margin:"0.2em", borderTop: "1px solid lightgrey"}}
							></i>
							
						</div>
					</div>
					
				</Modal.Body>
				
			</Modal>

			<div className="speakers">
				<div
					className="container"
					style={{ paddingTop: '2em', paddingBottom: '2em' }}
				>
					<h2 className="speakers-title text-center">
						<span>{speakersText.title[lang]}</span>
					</h2>

					{loading && <div className="loader">Loading...</div>}
					
					<OnImagesLoaded onLoaded={() => setLoading(false)}>
					<div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4" style={{display:loading && "none"}}>
						{speakersList.map((speaker, index) => (
							<div key={index}>
								<div className="col mb-4" >
									<div className="speaker-card">
										<div className="card-top-wrapper">
											<div
												className="arrow-overlay"
												onClick={() => handleShow(speaker)}
											>
												<i className="fa fa-arrow-right" aria-hidden="true"></i>
											</div>

											<div
												className="speaker-border"
												onClick={() => handleShow(speaker)}
											>
												<img
													loading="lazy"
													src={speaker.img}
													className="card-img-top"
													alt=""
												></img>
											</div>
										</div>

										<div className="card-body">
											<h5 className="card-title">{speaker.name[lang]}</h5>
											<p className="card-text">{speaker.tagline}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
					</OnImagesLoaded>
				</div>
			</div>
		</>
	);
}
