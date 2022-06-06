import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";

import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import 'swiper/css';
import Link from "next/link";

import { camelCase } from 'lodash';

import { Jelly } from '@uiball/loaders'

function Property({ data, id }) {

    return (
        <div>
            <div className="flex mt-4">
                <div className="">
                    <Swiper className="rounded-lg h-[200px] w-[300px]" navigation={{ prevEl: '.prev', nextEl: '.next' }} pagination={{ dynamicBullets: true }} modules={[Navigation, Pagination]} loop={true}>

                        {data.photos.map((photo) => {
                            return (
                                photo ? (
                                    <SwiperSlide> <img className="object-cover h-60 w-80 rounded-lg" src={photo} /></SwiperSlide>
                                ) : (
                                    <Jelly size={50} color='black' speed={0.9} />
                                )

                            )
                        })}

                        <div className="prev">
                            <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
                        </div>
                        <div className="next">
                            <ChevronRightIcon className="h-6 w-6 text-gray-600" />
                        </div>
                    </Swiper>
                </div>
                <Link href={`/${encodeURIComponent(camelCase(data.address.city))}/${encodeURIComponent(id)}`}>
                    <div className="pl-4 font-Sora text-gray-600 text-sm flex flex-col justify-between cursor-pointer">
                        <div>
                            <h1 className="text-lg text-black font-bold">{data.venueName}</h1>
                            <h4 className="mt-1">{data.address.landmark}, {data.address.micromarket}</h4>
                        </div>
                        <div className="flex flex-wrap gap-2 text-xs">
                            {data.privateOffice && <p className="p-2 flex-shrink-0 border-gray-400 border rounded-2xl">Private Office</p>}
                            {data.meetingRoom && <p className="p-2 flex-shrink-0 border-gray-400 border rounded-2xl">Meeting Room</p>}
                            {data.trainingRoom && <p className="p-2 flex-shrink-0 border-gray-400 border rounded-2xl">Training Room</p>}
                            <p className="p-2 flex-shrink-0 border-gray-400 border rounded-2xl">Flexi Seat</p>
                        </div>
                        <p>starting from <span className="inline text-base font-semibold text-black">₹ {data.coworkingSpace.pricePerPerson}</span> /desk/month *</p>
                        <p className="cursor-pointer hover:underline">Explore<ChevronRightIcon className="h-5 w-5 inline" /></p>
                    </div>
                </Link>
            </div>

        </div >
    )
}

export default Property