import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import 'swiper/css';


function propdetails() {
    return (
        <>
            <div className="flex mt-4 mx-4">
                <div className="">
                    <Swiper className="rounded-lg h-[300px] w-[640px]" navigation={{ prevEl: '.prev', nextEl: '.next' }} pagination={{ dynamicBullets: true }} modules={[Navigation, Pagination]} loop={true}>
                        <SwiperSlide><img className="object-cover h-full w-full rounded-lg" src="\propimage1.jpg" /></SwiperSlide>
                        <SwiperSlide><img className="object-cover h-full w-full rounded-lg" src="\propimage2.jpg" /></SwiperSlide>
                        <SwiperSlide><img className="object-cover h-full w-full rounded-lg" src="\propimage3.jpg" /></SwiperSlide>
                        <SwiperSlide><img className="object-cover h-full w-full rounded-lg" src="\propimage4.jpg" /></SwiperSlide>
                        <div className="prev">
                            <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
                        </div>
                        <div className="next">
                            <ChevronRightIcon className="h-6 w-6 text-gray-600" />
                        </div>
                    </Swiper>
                </div>
            </div>

            <div className="mt-4 mx-4 font-Sora text-gray-600 lex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl text-black font-bold">Aura Workplace</h1>
                        <h4 className="mt-1 text-xl">Sector-7, Dwarka, Delhi</h4>
                    </div>
                    </div>
                    <div className=" my-4 ml-4 min-w-lg">
                        <span>This section will give an overview of the building measurements, such as square footage, number of units, and acreage. It should also state what year the property was built, the assessed value, and the tax rate. If it’s an income-producing property, be sure to list net and gross income in this section, as well as operating expenses and perhaps even an overview of the rent roll. These are all figures that serious investors will want to know before moving forward.</span>
                    </div>

            <div className="mt-4 mx-4 h-28 min-w-lg bg-gray-100 rounded-xl shadow-sm ">
                <div className="flex justify-evenly pt-6">
                    <div className=" text-2xl text-black  ">
                        <h>Coworking Spaces</h>
                    </div>
                    <div className="text-xl">
                        <p className="">starting from <span className="inline text-base font-semibold text-black">₹ 6,000</span> /seat/month *</p>
                        <p className="text-blue-600 cursor-pointer">Book Now<ChevronRightIcon className="h-5 w-5 inline" /></p>
                    </div>
                </div>
            </div>

            <div className="mt-4 mx-4 h-40 min-w-lg bg-gray-100 rounded-xl shadow-sm">
                <div className="flex justify-evenly pt-5">
                    <div className="text-2xl sm:text text-black pt-10">
                        <h>Private Office</h>
                    </div>
                    <div className="text-xl">
                        <p> 4 Seater from <span className="inline text-base font-semibold text-black" >₹ 24,000</span> /month</p>
                        <p className="text-blue-600 cursor-pointer">Book Now<ChevronRightIcon className="h-5 w-5 inline" /></p>
                        <hr></hr>
                        <p> 8 Seater from <span className="inline text-base font-semibold text-black" >₹ 54,000</span> /month</p>
                        <p className="text-blue-600 cursor-pointer">Book Now<ChevronRightIcon className="h-5 w-5 inline" /></p>

                    </div>
                </div>
            </div>

            <div className="mt-4 mx-4 h-28 min-w-lg  bg-gray-100 rounded-xl shadow-sm">
                <div className="flex justify-evenly pt-6">
                    <div className=" text-2xl text-black  ">
                        <h>Meeting Room</h>
                    </div>
                    <div className="text-xl">
                        <p className="">8 Seater from <span className="inline text-base font-semibold text-black">₹ 12,000</span> /day *</p>
                        <p className="text-blue-600 cursor-pointer">Book Now<ChevronRightIcon className="h-5 w-5 inline" /></p>
                    </div>
                </div>
            </div>

            <div className="mt-4 mx-4 h-28  min-w-lg  bg-gray-100 rounded-xl shadow-sm">
                <div className="flex justify-evenly pt-6">
                    <div className=" text-2xl text-black  ">
                        <h>Training Room</h>
                    </div>
                    <div className="text-xl">
                        <p className="">15 Seater from <span className="inline text-base font-semibold text-black">₹ 20,000</span> /day *</p>
                        <p className="text-blue-600 cursor-pointer">Book Now<ChevronRightIcon className="h-5 w-5 inline" /></p>
                    </div>
                </div>
            </div>

            <div className="mt-4 mx-4 h-28 min-w-lg  bg-gray-100 rounded-xl shadow-sm">
                <div className="flex justify-evenly pt-6">
                    <div className=" text-2xl text-black  ">
                        <h>Virtual Office</h>
                    </div>
                    <div className="text-xl">
                        <p className="">starting from <span className="inline text-base font-semibold text-black">₹ 20,000</span> /year*</p>
                        <p className="text-blue-600 cursor-pointer">Book Now<ChevronRightIcon className="h-5 w-5 inline" /></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default propdetails