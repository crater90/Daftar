import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";

import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import 'swiper/css';
import Link from "next/link";

import { kebabCase } from 'lodash';

import { Jelly } from '@uiball/loaders'

function PropertyCard({ data, id }) {

    return (
        <div>
            <div className="flex flex-col md:flex-row mt-4">
                <div className="p-2">
                    <Swiper className="rounded-lg h-[200px] w-full md:w-[300px]" navigation={{ prevEl: '.prev', nextEl: '.next' }} pagination={{ dynamicBullets: true }} modules={[Navigation, Pagination]} loop={true}>

                        {data?.photos?.map((photo) => {
                            return (
                                <SwiperSlide key={photo}> <img className="object-cover h-60 w-full md:w-80 rounded-lg" src={photo} /></SwiperSlide>
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
                <Link href={`/coworking-space/${encodeURIComponent(kebabCase(data.address.city))}/${encodeURIComponent(kebabCase(data.address.micromarket))}/${encodeURIComponent(id)}`}>
                    <a target="_blank">
                        <div className="p-2 lg:pl-4 font-Sora text-gray-600 text-sm flex flex-col justify-between cursor-pointer">
                            <div>
                                <h1 className="text-lg text-black font-bold">{data.uniqueId}</h1>
                                <h4 className=''>{data.address.landmark}, {data.address.micromarket}</h4>
                            </div>
                            <div className="flex flex-wrap gap-2 text-xs pt-2">
                                {data.privateOffice && <p className="p-2 flex-shrink-0 border-slate-300 border rounded-lg">Private Office</p>}
                                {data.meetingRoom && <p className="p-2 flex-shrink-0 border-slate-300 border rounded-lg">Meeting Room</p>}
                                {data.trainingRoom && <p className="p-2 flex-shrink-0 border-slate-300 border rounded-lg">Training Room</p>}
                                <p className="p-2 flex-shrink-0 border-slate-300 border rounded-lg">Flexi Seat</p>
                            </div>
                            <p className="pt-1">starting from <span className="inline text-base font-semibold text-black">₹ {data.coworkingSpace.pricePerPerson}</span> /desk/month *</p>
                            <p className="cursor-pointer hover:underline">Explore<ChevronRightIcon className="h-5 w-5 inline" /></p>
                        </div>
                    </a>
                </Link>
            </div>

        </div >
    )
}

export default PropertyCard