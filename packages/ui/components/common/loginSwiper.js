"use client"

import React from "react";

import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const LoginSwiper = () => {
    return (
        <>
            <div className="w-full">
                <Swiper
                    modules={[Navigation, A11y]}
                    slidesPerView={1}
                    navigation
                >
                    <SwiperSlide className="items-end font-medium">
                        “We&apos;ve been using Untitled to kick start every new project and can’t imagine working without it.”
                    </SwiperSlide>
                    <SwiperSlide className="items-end font-medium">
                        “We&apos;ve been using Untitled to kick start every new project and can’t imagine working without it.”
                    </SwiperSlide>
                    <SwiperSlide className="items-end font-medium">
                        “We&apos;ve been using Untitled to kick start every new project and can’t imagine working without it.”
                    </SwiperSlide>
                    <SwiperSlide className="items-end font-medium">
                        “We&apos;ve been using Untitled to kick start every new project and can’t imagine working without it.”
                    </SwiperSlide>
                </Swiper>
                <div className="sliderMainContent">
                    <div className="text-lg font-semibold">
                        Main title of feature
                    </div>
                    <div className="text-base font-medium">
                        Sub title describe feature
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginSwiper;