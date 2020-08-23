import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './styles/Testimonials.css';

import tesimonialsImg1 from '../images/testimonials/velko.jpg';
import tesimonialsImg2 from '../images/testimonials/fatma.jpg';
import tesimonialsImg3 from '../images/testimonials/jacobs.png';

const testimonialsText1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nunc sem, accumsan in sem vel, imperdiet maximus lorem. Vivamus pulvinar odio id tortor venenatis, id pulvinar nisi convallis. Vivamus sed tortor porttitor, sagittis dolor ut, facilisis ipsum.';

export default function Testimonials() {
	return (
		<div className="testimonials">
			<div className="container">
				<h2 className="testimonials-title text-center">
					<span>Testimonials</span>
				</h2>
			</div>

			<Carousel interval={7000}>
				<Carousel.Item>
					<div className="container">
						<div className="row align-items-center mb-5">
						    <div className="col-md">
								<img
									loading="lazy"
									className="testimonials-pic"
									src={tesimonialsImg1}
									alt=""
								/>
							</div>

							<div className="col-md">
								<i className="fa fa-quote-left" aria-hidden="true"></i>
								<blockquote className="blockquote text-center">
									<p className="testimonials-body">{testimonialsText1}</p>
									<i
										className="fa fa-quote-right"
										aria-hidden="true"
										style={{ float: 'right' }}
									></i>
									<footer className="blockquote-footer">
                                        Velislav Velislav
                                        <br/>
										<cite title="Source Title">1st Place Winner at StartUP Weekend 2019</cite>
									</footer>
								</blockquote>
							</div>
						</div>
					</div>
				</Carousel.Item>

				<Carousel.Item>
					<div className="container">
						<div className="row align-items-center mb-5">
							<div className="col-md">
								<img
									loading="lazy"
									className="testimonials-pic"
									src={tesimonialsImg2}
									alt=""
								/>
							</div>

							<div className="col-md">
								<i className="fa fa-quote-left" aria-hidden="true"></i>
								<blockquote className="blockquote text-center">
									<p className="testimonials-body">{testimonialsText1}</p>
									<i
										className="fa fa-quote-right"
										aria-hidden="true"
										style={{ float: 'right' }}
									></i>
									<footer className="blockquote-footer">
                                        Fatma Xhafa
                                        <br/>
										<cite title="Source Title">StartUP Conference 2019 Speaker</cite>
									</footer>
								</blockquote>
							</div>
						</div>
					</div>
				</Carousel.Item>

				<Carousel.Item>
					<div className="container">
						<div className="row align-items-center mb-5">
							<div className="col-md">
								<img
									loading="lazy"
									className="testimonials-pic"
									src={tesimonialsImg3}
                                    alt=""
								/>
							</div>

							<div className="col-md">
								<i className="fa fa-quote-left" aria-hidden="true"></i>
								<blockquote className="blockquote text-center">
									<p className="testimonials-body">{testimonialsText1}</p>
									<i
										className="fa fa-quote-right"
										aria-hidden="true"
										style={{ float: 'right' }}
									></i>
									<footer className="blockquote-footer">
                                        Jacobs
                                        <br/>
										<cite title="Source Title">Sponsor Since 2018</cite>
									</footer>
								</blockquote>
							</div>
						</div>
					</div>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
