import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Autoplay } from "swiper";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperUpdates = () => {
    return (
        <Swiper
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            effect={"cards"}
            modules={[EffectCards, Autoplay, Pagination]}
        >
            <SwiperSlide>
                <img
                    src={img1}
                    alt={img1}
                    className="w-full h-full object-cover"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src={img2}
                    alt={img2}
                    className="w-full h-full object-cover"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src={img3}
                    alt={img3}
                    className="w-full h-full object-cover"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src={img4}
                    alt={img4}
                    className="w-full h-full object-cover"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src={img5}
                    alt={img5}
                    className="w-full h-full object-cover"
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperUpdates;
