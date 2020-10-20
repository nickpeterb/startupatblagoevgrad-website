import React, { useEffect } from 'react';
import Flickity from 'flickity';

//speaker imgs must be cropped to exact squares, to keep the cards the same height
import kirilImg from '../../images/speakers/kiril.jpg';
import justineImg from '../../images/speakers/justine.png';
import cliffordImg from '../../images/speakers/clifford.jpg';
import omarImg from '../../images/speakers/omar.jpg';
import nikiImg from '../../images/speakers/niki.jpg';
import borisImg from '../../images/speakers/boris.png';
import blagovestaImg from '../../images/speakers/blagovesta.png';
import ashImg from '../../images/speakers/ash.jpg';

import './styles/Flickity.css';
import './styles/ConfSpeakers.css';

const KirilPetkov = 'Kiril is the co-founder of the Center for Economic Strategy and Competitiveness where he teaches courses on economic development and enterperneurship, and the CEO and co-founder of the biotech startup ProViotic. Being experienced in investment projects in the field of multi-disciplinary and high-tech innovations in Bulgaria, he has worked for McCain Group. He is also the CEO of the investment company BDC which is focused on investing in tech and science startups from Eastern Europe. Kiril holds a MBA from Harvard Business School where he graduated in the top 10% of his class.';
const JustineToms = 'Justine Toms is an expert in online media and marketing, founder of digital agency ABC Design & Communication, and the  creator of a number of niche online websites, such as Az-jenata.bg and Az-deteto.bg. Justine has also been the idea leader of the competition for best Bulgarian online projects - BG Site since 1999. She is the author of 15 books in the area of online presence, digital media, CSR and communication, entrepreneurship and a lecturer at New Bulgarian University and SoftUni Digital.';
const CliffordHurst = 'Clifford is a professor at Westminster College in Salt Lake City where he teaches entrepreneurship, social entrepreneurship, and a variety of leadership and management courses. For 24 years, he owned and operated an organizational development consulting practice with clients across the US and Canada, as well as the UK, Germany, Dubai, Hong Kong, and Australia. Cliff\'s mission in life is to help people to know themselves, choose themselves, grow themselves, and then give themselves to something greater than themselves.';
const OmarAlBusaidy = 'Omar Al Busaidy is a Fulbright nominee, a best-selling author, entrepreneur and the host of Future Talk, the only radio show dedicated to tech in the UAE. Due to having such various roles and interests, Omar has many different accomplishments ranging from publishing his personal development book "Just Read It" and “Why Jobs are Robots and Life is for People", to investing in startups from all kinds of industries. Al Busaidy’s passion lies in entrepreneurship and futurism, hence, since 2010, he has been invited to mentor students on entrepreneurship and leadership at several universities across the UAE.';
const NikiIliev = 'Niki is an actor who appears in American, Italian, Russian, German, French and Bulgarian movies and TV series. He made his professional debut as a director with the movie “The Foreigner” -- the most watched and highest grossing Bulgarian film for 2012 and 2013. Niki has directed many award-wining movies and TV series among which is his third feature movie as a director/writer/producer “All She Wrote” (2018) which is acclaimed by film festivals in Paris, New York and Rome. Niki Iliev has a Master degree in film directing and acting and since 2015 he has been teaching film directing in The New Bulgarian University.';
const BorisHristov = 'Boris is the founder of the presentation agency 356labs and the only Bulgarian who has been awarded as a PowerPoint MVP (Most Valuable Professional). He has presented in 25+ countries and has been rated as the top speaker numerous times. Boris has years of experience as a trainer, mentor, and consultant who has coached not just students, but also IT, sales, marketing and management professionals on topics ranging from presentation skills and storytelling through the psychology behind slide design.';
const BlagovestaPugyova = 'Blagovesta Pugyova is a social entrepreneur and the founder of one of the most meaningful NGOs in Bulgaria - the "Give a Book" foundation. She is the CEO of the software development company Childish, the executive director of Time Heroes and the Chief Operating Officer of JobTiger. She has been awarded by the Bulgarian Helsinki Committee for "Person of the Year" and named for "30 under 30" by Forbes magazine in 2016.';
const AshKumra = 'Ash is a community builder, global speaker, meditation coach and national radio show host recognized twice by the White House as “an entrepreneur making an impact.” He is the Chairman, and co-founder of digital content distribution agency DesiYou. Ash is also an active angel investor and coach for businesses involved with consumer internet, entertainment and digital media. He is a frequent speaker on entrepreneurship, a professor on entrepreneurship, and the creator of the entrepreneurship movement YOUNGRY for millennials, women and inclusive entrepreneurs.';

const speakersList = [
    {
        name: 'Kiril Petkov', 
        tagline: 'Co-Founder, Center for Economic Strategy',
        img: kirilImg,
        bio: KirilPetkov,
        social: "https://www.linkedin.com/in/kiril-petkov-86381412/"
    },
    {
        name: 'Omar Al Busaidy', 
        tagline: 'Fulbright Nominee, Entrepreneur, and Futurist',
        img: omarImg,
        bio: OmarAlBusaidy,
        social: "https://www.linkedin.com/in/omaralbusaidy/?originalSubdomain=ae"
    },
    {
        name: 'Clifford Hurst',
        tagline: 'Professor of Entrepreneurship at Westminster College',
        img: cliffordImg,
        bio: CliffordHurst,
        social: "https://www.linkedin.com/in/cliffhurst/"
    },
    {
        name: 'Justine Toms',
        tagline: 'Founder, ABC Design & Communication',
        img: justineImg,
        bio: JustineToms,
        social: "https://www.linkedin.com/in/justinetoms/"
    },
    {
        name: 'Niki Iliev',
        tagline: 'Director and Actor, "The Foreigner"',
        img: nikiImg,
        bio: NikiIliev,
        social: "https://www.facebook.com/niki.iliev.official/"
    },
    {
        name: 'Boris Hristov',
        tagline: 'Founder, 365Labs and PowerPoint Specialist',
        img: borisImg,
        bio: BorisHristov,
        social: "https://www.linkedin.com/in/brshristov/"
    },
    {
        name: 'Blagovesta Pugyova',
        tagline: 'Founder, Give A Book Foundation',
        img: blagovestaImg,
        bio: BlagovestaPugyova,
        social: "https://www.linkedin.com/in/blagovesta-pugyova-bb178653/"
    },
    {
        name: 'Ash Kumra',
        tagline: 'Radio Show Host, Community Builder, and Global Speaker',
        img: ashImg,
        bio: AshKumra,
        social: "https://www.linkedin.com/in/ashkumra/"
    },
]

export default function ConfSpeakers() {
    //makes sure carousel index stays in bounds
    const mod = (x, m) => {
        return (x % m + m) % m;
    }

    useEffect(() => {
        //initialize carousel
        var elem = document.querySelector('.flick-carousel');
        var flkty = new Flickity(elem, {
            selectedAttraction: 0.02,
            friction: 0.2,
            wrapAround: true,
            setGallerySize: false
        });

        var cellElements = flkty.getCellElements();
        //set cells to the right and left of the selected cell to medium size
        cellElements[mod(flkty.selectedIndex + 1, flkty.cells.length)].classList.add('offset1');
        cellElements[mod(flkty.selectedIndex - 1, flkty.cells.length)].classList.add('offset1');

        flkty.on('change', function (index) {
            //reset all cells to small size and push them up
            for (let i = 0; i < cellElements.length; i++) {
                cellElements[mod(i, flkty.cells.length)].classList.remove('offset1');
            }
            //set cells to the right and left of the new selected cell to medium size
            cellElements[mod(index + 1, flkty.cells.length)].classList.add('offset1');
            cellElements[mod(index - 1, flkty.cells.length)].classList.add('offset1');
        });
    });

    return (
        <div className="conf-speakers">
            <div className="flex-container">
            <div className="flick-carousel">
                    {speakersList.map((speaker, index) => (
                        <div className="cell-wrapper" key={index} >
                            <img 
                                src={speaker.img} 
                                className="flick-carousel-cell" 
                                alt={speaker.name} 
                                style={{willChange:'transform'}}>
                            </img>
                            <div className="speaker-name">{speaker.name}</div>
                            <div className="speaker-tagline">{speaker.tagline}</div>
                        </div>
                    ))}
            </div>
            </div>

        </div>
    );
}