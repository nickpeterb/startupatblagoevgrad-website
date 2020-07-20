import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './styles/Testimonials.css';

import tesimonialsImg1 from '../assets/velko.jpg';
import tesimonialsImg2 from '../assets/fatma.jpg';
import tesimonialsImg3 from '../assets/jacobs.png';

const testimonialsText1 =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nunc sem, accumsan in sem vel, imperdiet maximus lorem. Vivamus pulvinar odio id tortor venenatis, id pulvinar nisi convallis. Vivamus sed tortor porttitor, sagittis dolor ut, facilisis ipsum. Aenean lobortis, tellus ut rutrum placerat, ligula leo imperdiet metus, vitae congue lacus orci sed orci. Ut viverra mi in mi egestas semper et a turpis. In egestas est eu dui finibus porttitor.';

export default function Testimonials() {
	return (
		<div className="testimonials">
			<div className="container">
				<h2 className="testimonials-title">
					<span>Testimonials</span>
				</h2>
			</div>

			<Carousel interval={100000}>
				<Carousel.Item>
					<div className="container">
						<div className="row align-items-center mb-5">
						    <div className="col-md">
								<img
									className="testimonials-pic"
									src={tesimonialsImg1}
									alt=""
								/>
							</div>

							<div className="col-md">
								<i class="fa fa-quote-left" aria-hidden="true"></i>
								<blockquote class="blockquote text-center">
									<p class="mb-0">{testimonialsText1}</p>
									<i
										class="fa fa-quote-right"
										aria-hidden="true"
										style={{ float: 'right' }}
									></i>
									<footer class="blockquote-footer">
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
									className="testimonials-pic"
									src={tesimonialsImg2}
									alt=""
								/>
							</div>

							<div className="col-md">
								<i class="fa fa-quote-left" aria-hidden="true"></i>
								<blockquote class="blockquote text-center">
									<p class="mb-0">{testimonialsText1}</p>
									<i
										class="fa fa-quote-right"
										aria-hidden="true"
										style={{ float: 'right' }}
									></i>
									<footer class="blockquote-footer">
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
									className="testimonials-pic"
									src={tesimonialsImg3}
                                    alt=""
								/>
							</div>

							<div className="col-md">
								<i class="fa fa-quote-left" aria-hidden="true"></i>
								<blockquote class="blockquote text-center">
									<p class="mb-0">{testimonialsText1}</p>
									<i
										class="fa fa-quote-right"
										aria-hidden="true"
										style={{ float: 'right' }}
									></i>
									<footer class="blockquote-footer">
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
