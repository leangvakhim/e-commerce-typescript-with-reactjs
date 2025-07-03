// import React from 'react'
import Person from '../asset/images/person-1.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const AboutTestimonial = () => {
    const testimonials = [
        {
            text: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
            author: "Maria Jones",
            position: "CEO, Co-Founder, XYZ Inc.",
            image: Person
        },
        {
            text: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
            author: "Maria Jones",
            position: "CEO, Co-Founder, XYZ Inc.",
            image: Person
        },
        {
            text: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
            author: "Maria Jones",
            position: "CEO, Co-Founder, XYZ Inc.",
            image: Person
        }
      ];
    return (
        <div className="testimonial-section before-footer-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 mx-auto text-center mb-4">
						<h2 className="section-title">Testimonials</h2>
					</div>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-12">
						<div className="testimonial-slider-wrap text-center">

							<div id="testimonial-nav">
								<span className="prev" data-controls="prev"><span className="fa fa-chevron-left"></span></span>
								<span className="next" data-controls="next"><span className="fa fa-chevron-right"></span></span>
							</div>

							<Swiper
                                modules={[Navigation, Autoplay]}
                                navigation={{
                                  nextEl: '.next',
                                  prevEl: '.prev',
                                }}
                                autoplay={{ delay: 5000, disableOnInteraction: false }}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true}
                                className="testimonial-slider"
                            >
                                {testimonials.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8 mx-auto">
                                                <div className="testimonial-block text-center">
                                                    <blockquote className="mb-5">
                                                        <p>&ldquo;{item.text}&rdquo;</p>
                                                    </blockquote>
                                                    <div className="author-info">
                                                        <div className="author-pic">
                                                            <img style={{height:'60px', width: '60px', borderRadius: '50%'}} src={item.image} alt={item.author} className="img-fluid"/>
                                                        </div>
                                                        <h3 className="font-weight-bold">{item.author}</h3>
                                                        <span className="position d-block mb-3">{item.position}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default AboutTestimonial