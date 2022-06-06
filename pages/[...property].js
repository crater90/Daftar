import { useState, useRef } from 'react';

import Header from '../components/Header';
import CityPageForm from "../components/CityPageForm";

import Breadcrumbs from 'nextjs-breadcrumbs';

import { doc, getDoc, getDocs, collection, where } from "firebase/firestore";
import { db } from "../firebase";

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import 'swiper/css';

import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';

import { camelCase, startCase } from "lodash";
import Footer from '../components/Footer';

function PropertyPage({ propertyData }) {
    console.log(propertyData);

    const [amenitiesShow, setAmenitiesShow] = useState(6);
    const triggerAnimate = useRef(null)

    // I am still figuring out this piece of code but it is working it is flitering object same way as we have array filter.
    Object.filter = (obj, predicate) =>
        Object.keys(obj)
            .filter(key => predicate(obj[key]))
            .reduce((res, key) => (res[key] = obj[key], res), {});

    const amenitiesFetched = propertyData.amenities;

    const filteredAmenities = Object.filter(amenitiesFetched, amentiy => amentiy === true);

    //converting object into array
    const amenitiesArray = Object.keys(filteredAmenities);

    const handleShow = () => setAmenitiesShow(amenitiesArray.length);
    const handleCollapse = () => setAmenitiesShow(6)

    const json = [{
        name: 'AC',
        src: '/ac.svg'
    }, {
        name: 'Cafeteria',
        src: '/cafeteria.svg'
    }, {
        name: 'Car Parking',
        src: '/carParking.svg'
    }, {
        name: 'Front desk',
        src: '/frontDesk.svg'
    }, {
        name: 'Furnished',
        src: 'furnished.svg'
    }, {
        name: '24 hrs',
        src: '/hrs24.svg'
    }, {
        name: 'landline',
        src: '/landline.svg'
    }, {
        name: 'Lift',
        src: '/lift.svg'
    }, {
        name: 'Locker',
        src: '/locker.svg'
    }, {
        name: 'Mailing Address',
        src: '/mailing.svg'
    }, {
        name: 'Night Shift',
        src: '/night.svg'
    }, {
        name: 'Photocopier',
        src: '/photocopy.svg'
    }, {
        name: 'Power Backup',
        src: '/power.svg'
    }, {
        name: 'Printer',
        src: '/printer.svg'
    }, {
        name: 'Visitors Lounge',
        src: '/lounge.svg'
    }, {
        name: 'Wifi',
        src: '/wifi.svg'
    }, {
        name: 'Speaker',
        src: '/speaker.svg'
    }, {
        name: 'Projector',
        src: '/projector.svg'
    }, {
        name: 'Video Conferencing',
        src: '/videoConf.svg'
    }, {
        name: 'Tea Coffee',
        src: '/teaCoffee.svg'
    }, {
        name: 'Recreation Room',
        src: '/recreation.svg'
    }, {
        name: 'Private Meeting Room',
        src: '/meetingRoom.svg'
    }]

    return (
        <div>
            <div className="bg-slate-100 font-Sora h-screen overflow-y-scroll">
                <Header homePage={false} />
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:max-w-3xl lg:max-w-6xl mx-auto">
                    <div className='lg:col-span-5'>
                        <Breadcrumbs containerClassName='flex pt-5 pb-2 font-semibold font-Roboto' listClassName='flex gap-x-2 capitalize' inactiveItemClassName='inline-block hover:underline after:chevron-right' activeItemClassName='text-gray-500' rootLabel="Home" />

                    </div>
                    <div className='pt-2 lg:col-span-3'>
                        <h1 className='py-2 font-Sora text-3xl text-gray-700 font-semibold tracking-wide'>{`Daftar  ${propertyData.uniqueId}`}</h1>
                        <h1 className='pb-2 font-Sora text-xl text-gray-700 font-semibold'>{propertyData.address.micromarket}</h1>
                        <Swiper className='rounded-lg h-[400px] w-auto ' navigation={{ prevEl: '.prev', nextEl: '.next' }} pagination={{ dynamicBullets: true }} modules={[Navigation, Pagination]} loop={true}>

                            {propertyData.photos.map((photo) => {
                                return (
                                    <SwiperSlide><img className="object-cover h-[400px] w-full rounded-lg" src={photo} /></SwiperSlide>
                                )
                            })}

                            <div className="prev">
                                <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
                            </div>
                            <div className="next">
                                <ChevronRightIcon className="h-6 w-6 text-gray-600" />
                            </div>
                        </Swiper>

                        <div className='pt-5'>
                            <h1 className='text-xl font-semibold'>About this Space</h1>
                            <p className='mt-2 bg-transparent font-Roboto tracking-wide leading-6'>{propertyData.description}</p>
                        </div>

                        <div className='mt-5 border rounded-md border-slate-300 bg-white shadow-inner'>
                            <div className={`flex items-center justify-between p-2 ${amenitiesShow ? '' : ''}`}>
                                <h1 className={`text-xl font-semibold`}>Amenities</h1>
                                {amenitiesShow === 6 ?
                                    <ChevronDownIcon className='w-6 h-6 cursor-pointer' onClick={handleShow} /> :
                                    <ChevronUpIcon className='w-6 h-6 cursor-pointer' onClick={handleCollapse} />
                                }
                            </div>

                            {amenitiesShow === 6 ?
                                <div className=' grid grid-cols-2 p-2 gap-y-3 pl-4 pb-4 font-Roboto font-medium text-gray-600'>
                                    {
                                        amenitiesArray.slice(0, 6).map((amenities) => {
                                            return (
                                                <div className='flex items-center justify-start '>
                                                    <img className='h-6 w-6' src={`/${amenities}.svg`} />
                                                    <p className='pl-2 '>{startCase(amenities)}</p>
                                                </div>
                                            )
                                        })
                                    }

                                </div> :
                                <div className=' grid grid-cols-2 p-2 gap-y-3 pl-4 pb-4 font-Roboto font-medium text-gray-600'>
                                    {
                                        amenitiesArray.map((amenities) => {
                                            return (
                                                <div className='flex items-center justify-start '>
                                                    <img className='h-6 w-6' src={`/${amenities}.svg`} />
                                                    <p className='pl-2 '>{startCase(amenities)}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            }

                        </div>

                        <div className='pt-5'>
                            <h1 className='text-xl font-semibold'>Plans and Pricing</h1>

                            {propertyData.privateOffice.length >= 1 &&
                                <div className='mt-3 border-slate-300 border rounded-md shadow-sm p-5 bg-white font-Roboto'>
                                    <h1 className='text-gray-700 font-semibold'>Private Office</h1>
                                    <p className='text-zinc-500'>Private cabins for teams and individuals</p>
                                    <div className='pt-2 flex items-center justify-between'>
                                        <p>starting from <span className="inline text-base font-semibold text-black">₹ 6999</span> /month *</p>
                                        <p onClick={() => triggerAnimate.current()} className='text-gray-500 font-semibold hover:underline cursor-pointer'>Enquire now</p>
                                    </div>
                                </div>
                            }

                            <div className='mt-3 border-slate-300 border rounded-md shadow-sm p-5 bg-white font-Roboto'>
                                <h1 className='text-gray-700 font-semibold'>Dedicated Seats</h1>
                                <p className='text-zinc-500'>Perfect for individuals and teams for instant plugin and requirements.</p>
                                <div className='pt-2 flex items-center justify-between'>
                                    <p>starting from <span className="inline text-base font-semibold text-black">₹ 6999</span> /month *</p>
                                    <p onClick={() => triggerAnimate.current()} className='text-gray-500 font-semibold hover:underline cursor-pointer'>Enquire now</p>
                                </div>
                            </div>

                            <div className='mt-3 border-slate-300 border rounded-md shadow-sm p-5 bg-white font-Roboto'>
                                <h1 className='text-gray-700 font-semibold'>Meeting Room</h1>
                                <p className='text-zinc-500'>Instant availability for Conference Room and Spaces for video shoots.</p>
                                <div className='pt-2 flex items-center justify-between'>
                                    <p>starting from <span className="inline text-base font-semibold text-black">₹ 6999</span> /month *</p>
                                    <p onClick={() => triggerAnimate.current()} className='text-gray-500 font-semibold hover:underline cursor-pointer'>Enquire now</p>
                                </div>
                            </div>

                            <div className='mt-3 border-slate-300 border rounded-md shadow-sm p-5 bg-white font-Roboto'>
                                <h1 className='text-gray-700 font-semibold'>Training Room</h1>
                                <p className='text-zinc-500'>Instant availability for Conference Room and Spaces for video shoots.</p>
                                <div className='pt-2 flex items-center justify-between'>
                                    <p>starting from <span className="inline text-base font-semibold text-black">₹ 6999</span> /month *</p>
                                    <p onClick={() => triggerAnimate.current()} className='text-gray-500 font-semibold hover:underline cursor-pointer'>Enquire now</p>
                                </div>
                            </div>

                            <div className='mt-3 border-slate-300 border rounded-md shadow-sm p-5 bg-white font-Roboto'>
                                <h1 className='text-gray-700 font-semibold'>Virtual Office</h1>
                                <p className='text-zinc-500'>Reach your customers anywhere in India by getting an address for your business.</p>
                                <div className='pt-2 flex items-center justify-between'>
                                    <p>starting from <span className="inline text-base font-semibold text-black">₹ 6999</span> /month *</p>
                                    <p onClick={() => triggerAnimate.current()} className='text-gray-500 font-semibold hover:underline cursor-pointer'>Enquire now</p>
                                </div>
                            </div>

                            <div className='mt-3 border-slate-300 border rounded-md shadow-sm p-5 bg-white font-Roboto'>
                                <h1 className='text-gray-700 font-semibold'>Day Pass</h1>
                                <p className='text-zinc-500'>Book your Workspace anywhere PAN India and boost your productivity.</p>
                                <div className='pt-2 flex items-center justify-between'>
                                    <p>starting from <span className="inline text-base font-semibold text-black">₹ 6999</span> /month *</p>
                                    <p onClick={() => triggerAnimate.current()} className='text-gray-500 font-semibold hover:underline cursor-pointer'>Enquire now</p>
                                </div>
                            </div>



                        </div>

                    </div>

                    <div className="hidden px-8 lg:grid lg:col-span-2 lg:justify-items-center">
                        <CityPageForm city={propertyData.uniqueId} triggerAnimate={triggerAnimate} />
                    </div>

                </div>
                <Footer />
            </div>

        </div>
    )
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const allProperties = await getDocs(collection(db, "property"));
    const refinedData = allProperties.docs.map((doc) => {
        return {
            id: doc.id,
            data: doc.data()
        }
    })

    // Get the paths we want to pre-render based on posts
    const paths = refinedData.map((item) => ({
        params: {
            property: [camelCase(item.data.address.city), item.id]
        },
    }))
    // const paths = allProperties.map((property) => ({
    //     params: { id: property.id },
    // }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const docRef = doc(db, "property", params.property[1]);
    const docSnap = await getDoc(docRef);
    const propertyData = docSnap.data();

    return {
        props: { propertyData },
    };
}

export default PropertyPage