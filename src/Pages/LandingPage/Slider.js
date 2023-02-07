import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import sl1 from './sl1.png'
import sl2 from './sl2.png'
import sl3 from './sl3.png'

export default function Slider() {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                freeMode={true}
            >
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96 hidden md:block"
                        src="https://img-c.udemycdn.com/notices/web_banner/slide_2_image_udlite/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg"
                        alt="image slide 1"
                    />
                    <img
                        className="object-fill w-full h-96 md:hidden"
                        src={sl1}
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96 hidden md:block"
                        src="https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/bf1bd00b-e65c-4d18-8b3a-0176cfbb3601.jpg"
                        alt="image slide 2"
                    />
                    <img
                        className="object-fill w-full h-96 md:hidden"
                        src={sl2}
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96 hidden md:block"
                        src="https://img-c.udemycdn.com/notices/web_banner/slide_2_image_udlite/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg"
                        alt="image slide 3"
                    />
                    <img
                        className="object-fill w-full h-96 md:hidden"
                        src={sl2}
                        alt="image slide 1"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}