import React from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperComponent = ({ images }) => {
    return (
        <Swiper
            className="swiper"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
        >
            {images.map((img) => {
                return (
                    <SwiperSlide className="swiper__slide">
                        <img src={img} alt="" />
                    </SwiperSlide>
                );
            })}

            {/* <SwiperSlide className="swiper__slide">
                <img src={product2} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper__slide">
                <img src={product3} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper__slide">
                <img src={product4} alt="" />
            </SwiperSlide> */}
        </Swiper>
    );
};

export default SwiperComponent;
