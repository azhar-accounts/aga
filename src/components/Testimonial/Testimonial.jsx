import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import _config from '../../constants/index.js';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonial() {
    return (
        <section
            className="py-16 px-4 scroll-mt-40"
            id="testimonials"
            data-aos="fade-up"
        >
            <div className="responsive__container text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    What Our Clients Say
                </h2>
                <p className="text-seconday mb-12">
                    Hear from some of our happy customers using our services and
                    platform.
                </p>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1.2}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{ delay: 2500 }}
                    pagination={{ clickable: true }}
                    loop={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 2.5,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="pb-12"
                >
                    {_config.TESTIMONIALS?.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="bg-white  border-t-soft-blue border-t-4  w-full shadow-md rounded-2xl min-h-[200px] p-8 h-full mx-4 text-left space-y-3 flex flex-col justify-between">
                                <p className="text-black">“{item.feedback}”</p>
                                <p className="font-semibold text-black">
                                    - {item.author}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
