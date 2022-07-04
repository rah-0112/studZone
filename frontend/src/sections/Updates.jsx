import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCards, Pagination, Autoplay } from "swiper";
import { motion } from "framer-motion";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import { useScroll } from "../components/useScroll";

const Updates = () => {
    const [element, animation] = useScroll();
    const reveal = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };
    return (
        <div className="pt-5 sm:pt-0 pl-10 pr-10 pb-5 md:pb-14">
            <motion.h2
                className={`font-bold leading-tight md:text-2xl sm:text-xl mt-0 mb-2 flex flex-row items-center w-full md:pl-20 md:pr-20 lg:pl-28 lg:pr-28`}
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                    delay: 4,
                }}
            >
                Latest updates
                <div className="w-1.5 h-5 sm:w-2 sm:h-6 ml-3 bg-[#FF844B]"></div>
            </motion.h2>
            <motion.div
                className="w-full h-full flex flex-wrap justify-evenly md:mt-40  mb-10 items-center mt-10 gap-8 lg:gap-0"
                ref={element}
                animate={animation}
                variants={reveal}
                transition={{ duration: 1 }}
            >
                <motion.div className="flex w-[22rem] sm:w-[22rem] xl:w-[25rem]">
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
                </motion.div>
                <motion.div className="flex">
                    <div className="w-full xl:max-w-xl md:max-w-md lg:max-w-lg rounded shadow-lg hover:shadow-2xl  duration-500  text-gray-700">
                        <div className="px-6 py-4 flex flex-col gap-5">
                            <p className="sm:indent-16 indent-10  text-base">
                                <span className=" text-6xl font-bold ">T</span>
                                he thesis and reasearch papers of students are
                                going to be in sumbitted in various
                                international conferences. The IT department is
                                going to host the largest international ICAS
                                conference on 6 th July 2022. Two days national
                                workshop on computer vision and image
                                processing.
                            </p>
                            <p className="text-base">
                                The Research Conclave that was held a few days
                                ago was a huge success. All the PHD students and
                                PG students in the college were made to present
                                their papers infront of the conference. It had
                                happened from 3rd June 2022 to 4th June 2022.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #research
                            </span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #conference
                            </span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #students
                            </span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Updates;
