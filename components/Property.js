import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";

import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import 'swiper/css';

function Property({ data }) {
    console.log(data);
    return (
        <div>
            <div className="flex mt-4">
                <div className="">
                    <Swiper className="rounded-lg h-[200px] w-[300px]" navigation={{ prevEl: '.prev', nextEl: '.next' }} pagination={{ dynamicBullets: true }} modules={[Navigation, Pagination]} loop={true}>
                        {/* {data.photos.map((photo) => {
                            return (
                                <SwiperSlide><img className="object-cover h-60 w-80 rounded-lg" src={photo} /></SwiperSlide>
                            )
                        })} */}
                        <SwiperSlide><img className="object-cover h-60 w-80 rounded-lg" src="/pic01.jpeg" /></SwiperSlide>
                        <SwiperSlide><img className="object-cover h-60 w-80 rounded-lg" src="/pic02.jpeg" /></SwiperSlide>
                        <SwiperSlide><img className="object-cover h-60 w-80 rounded-lg" src="/pic03.jpeg" /></SwiperSlide>
                        <SwiperSlide><img className="object-cover h-60 w-80 rounded-lg" src="/pic04.jpeg" /></SwiperSlide>
                        <SwiperSlide><img className="object-cover h-60 w-80 rounded-lg" src="/pic05.jpeg" /></SwiperSlide>
                        <div className="prev">
                            <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
                        </div>
                        <div className="next">
                            <ChevronRightIcon className="h-6 w-6 text-gray-600" />
                        </div>
                    </Swiper>
                </div>
                <div className="pl-4 font-Sora text-gray-600 text-sm flex flex-col justify-between">
                    <div>
                        <h1 className="text-lg text-black font-bold"></h1>
                        <h4 className="mt-1">Sector-7, Dwarka, Delhi</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs">
                        <p className="p-2 flex-shrink-0 border-gray-400 border rounded-2xl">Private Office</p>
                        <p className="p-2 flex-shrink-0 border-gray-400 border rounded-2xl">Meeting Room</p>
                        <p className="p-2 flex-shrink-0 border-gray-400 border rounded-2xl">Training Room</p>
                        <p className="p-2 flex-shrink-0 border-gray-400 border rounded-2xl">Flexi Seat</p>
                    </div>
                    <p>starting from <span className="inline text-base font-semibold text-black">₹ 999</span> /desk/month *</p>
                    <p>Explore<ChevronRightIcon className="h-5 w-5 inline" /></p>
                </div>
            </div>

        </div>
    )
}

export default Property