import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './styles/Testimonials.css';

import kirilImg from '../images/testimonials/kiril-z.png';

const testimonialsText = {
	"title": {
		"en": "Testimonials",
		"bg": "Какво Мислят Нашите Гости"
	}
}

const testimonialsList = [
	{
		name: 'Kiril Zhelyazkov',
		img: kirilImg,
		text: "Big thanks to @StartUPBlagoevgrad for organizig the StartUp Weekend. To me it was an excellent and refreshing opportunity to get away of everyday life and try out what’s like to be one of the creators of a disruptive business idea.",
		cite: {"en": "1st Place Winner at StartUP Weekend 2018", "bg": "1во Място в StartUP Уикенд 2018"}
	}
]

export default function Testimonials(props) {
	return (
		<div className="testimonials">
			<div className="container">
				<h2 className="testimonials-title text-center">
					<span>{testimonialsText.title[props.lang]}</span>
				</h2>
			</div>

			{ testimonialsList.map((testimonial, index) => (
				<Carousel interval={7000} key={index}>
				<Carousel.Item>
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
										<cite>{testimonial.cite[props.lang]}</cite>
									</footer>
								</blockquote>
							</div>
						</div>
					</div>
				</Carousel.Item>
			</Carousel>
			))}
			
		</div>
	);
}
