import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import SearchBox from './SearchBox';

function Hero() {

    return (
        <>
            <div className="relative">
                <Swiper className="-mt-14 h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]" autoplay loop>
                    <SwiperSlide>
                        <img className="h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full object-cover" src="/slide01.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full object-cover" src="/slide02.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className=" h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full object-cover" src="/slide03.jpg" />
                    </SwiperSlide>

                </Swiper>
                <div className="z-50 absolute top-1/2 w-1/2 origin-center transform translate-x-1/2 -pr-20">
                    <div className="relative">
                        {/* <div className="absolute inset-y-0 right-0 pr-2 md:pr-4 lg:pr-10 flex items-center justify-end pointer-events-none">
                            <SearchIcon className="h-5 w-5" />
                        </div>
                        <input className="focus:outline-none w-full pl-2 md:pl-4 lg:pl-10 rounded-md opacity-70 py-2 md:py-3 lg:py-4" type="text" placeholder="Search" /> */}
                        <SearchBox />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
