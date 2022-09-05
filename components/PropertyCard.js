import { ChevronRightIcon, ChevronLeftIcon, LocationMarkerIcon } from "@heroicons/react/solid";

import { Swiper, SwiperSlide } from "swiper/react"

import { Autoplay, Navigation, Pagination } from "swiper";

import "swiper/css/navigation";
import 'swiper/css';

import Link from "next/link";

import { kebabCase } from 'lodash';

function PropertyCard({ data, id }) {

    return (
        <div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-5 md:flex-row mt-4">
                <div className="">
                    <Swiper className="rounded-lg h-[200px] w-full md:w-[300px]" navigation={{ prevEl: '.prev', nextEl: '.next' }} pagination={{ dynamicBullets: true }} modules={[Navigation, Pagination, Autoplay]} autoplay={{ delay: 3000 }} loop={true}>

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
                        <div className="font-Sora text-gray-600 text-sm flex flex-col justify-between item cursor-pointer group">
                            <div>
                                <h1 className="text-lg text-black font-bold group-hover:text-red-400">{data.uniqueId}</h1>
                                <div className=' flex space-x-1'>
                                    <LocationMarkerIcon className='flex-none h-4 w-4' />
                                    <h4 className=''>{data.address.landmark}, {data.address.micromarket}</h4>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 text-xs pt-2">
                                {data.privateOffice && <p className="p-2 bg-white flex-shrink-0 border-slate-300 border rounded-lg">Private Office</p>}
                                {data.meetingRoom && <p className="p-2 bg-white flex-shrink-0 border-slate-300 border rounded-lg">Meeting Room</p>}
                                {data.trainingRoom && <p className="p-2 bg-white flex-shrink-0 border-slate-300 border rounded-lg">Training Room</p>}
                                <p className="p-2 bg-white flex-shrink-0 border-slate-300 border rounded-lg">Flexi Seat</p>
                            </div>
                            <p className="pt-1">starting from <span className="inline text-base font-semibold text-black">₹ {data.coworkingSpace.pricePerPerson}</span> /desk/month *</p>
                            <p className="cursor-pointer font-semibold underline-offset-2 group-hover:underline">Explore Now<ChevronRightIcon className="h-5 w-5 inline group-hover:translate-x-1 transition" /></p>
                        </div>
                    </a>
                </Link>
            </div>

        </div >
    )
}

export default PropertyCard