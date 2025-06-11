"use client"

import {useSwiper} from "swiper/react"
import {PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi";

const WorkSliderBtn = () => {
    const swiper = useSwiper();

    return (
        <div
            className="flex gap-2 absolute left-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"
        >
            <button
                className="bg-accent hover:bg-accent/90 rounded-sm text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500"
                onClick={() => swiper.slidePrev()}
            >
                <PiCaretRightBold/>
            </button>
            <button
                className="bg-accent hover:bg-accent/90 rounded-sm text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500"
                onClick={() => swiper.slideNext()}
            >
                <PiCaretLeftBold/>
            </button>
        </div>
    );
};

export default WorkSliderBtn;