import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './styles/Testimonials.css';

import kirilImg from '../images/testimonials/kiril-z.png';
import victorImg from '../images/testimonials/victor.jpg';
import miroImg from '../images/testimonials/miroslav.jpg';
import georgiImg from '../images/testimonials/georgi.jpg'
import vladImg from '../images/testimonials/vladi.jpg';
import deniImg from '../images/testimonials/deni.jpg';


const testimonialsText = {
	"title": {
		"en": "Testimonials",
		"bg": "Какво Мислят Нашите Гости"
	}
}

const testimonialsList = [
	{
		name: 'Victor Penev',
		img: victorImg,
		text: "It was a pleasure working with the StartUP Conference 2020 team. The team was very responsive, willing to address challenges right away and find a solution so that the best experience is brought to the audience. I would work with them again in a heartbeat.",
		cite: 'Speaker at StartUP Conference 2020'
	},
	{
		name: 'Miroslav Miroslavov',
		img: miroImg,
		text: "The StartUP Conference 2020 was great, very well organized, especially in such a difficult environment. The team went above and beyond to make it happen and make it really high quality.",
		cite: 'Speaker at StartUP Conference 2020'
	},
	{
		name: 'Vlad Dramaliev',
		img: vladImg,
		text: "One of the most well-organized online conferences I have had the honor to attend. The Blagoevgrad StartUP community is one of the most vibrant ones in the country.",
		cite: 'Speaker at StartUP Conference 2020'
	},
	{
		name: 'Denitsa Simeonova',
		img: deniImg,
		text: "Being part of StartUP Conference 2020 was a very positive experience for me. A startup event organised from students and for students to very high standards is an inspiration to all of us who are part of the entrepreneurial ecosystem and gives us a chance to contribute to its development.",
		cite: 'Speaker at StartUP Conference 2020'
	},
	{
		name: 'Georgi Stoyanov',
		img: georgiImg,
		text: "Every touch with StartUP@Blagoevgrad up to now has brought me much inspiration. I adore this smart and youthful team of people whose passion with entrepreneurship and knowledge is so beautiful. May this enthusiasm be never-ending, StartUP Team!",
		cite: 'Moderator at StartUP Conference 2020'
	},
	{
		name: 'Kiril Zhelyazkov',
		img: kirilImg,
		text: "Big thanks to @StartUPBlagoevgrad for organizing the StartUP Weekend. To me it was an excellent and refreshing opportunity to get away of everyday life and try out what it's like to be one of the creators of a disruptive business idea.",
		cite: "1st Place Winner at StartUP Weekend 2018",
	}, 
]

export default function Testimonials(props) {
	return (
		<div className="testimonials">
			<div className="container">
				<h2 className="testimonials-title text-center">
					<span>{testimonialsText.title[props.lang]}</span>
				</h2>
			</div>

			<Carousel interval={7000} >
			{ testimonialsList.map((testimonial, index) => (
				
				<Carousel.Item key={index}>
					<div className="container">
						<div className="row align-items-center mb-5">
						    <div className="col-md">
								<img
									loading="lazy"
									className="testimonials-pic"
									src={testimonial.img}
									alt=""
								/>
							</div>

							<div className="col-md">
								<i className="fa fa-quote-left" aria-hidden="true"></i>
								<blockquote className="blockquote text-center">
									<p className="testimonials-body">{testimonial.text}</p>
									<i
										className="fa fa-quote-right"
										aria-hidden="true"
										style={{ float: 'right' }}
									></i>
									<footer className="blockquote-footer">
                                        {testimonial.name}
                                        <br/>
										<cite>{testimonial.cite}</cite>
									</footer>
								</blockquote>
							</div>
						</div>
					</div>
				</Carousel.Item>
			
			))}
			</Carousel>
			
		</div>
	);
}
