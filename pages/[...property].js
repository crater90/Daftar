import { useState, useRef, useEffect } from 'react';

import Head from 'next/head'
import Header from '../components/Header';
import CityPageForm from "../components/CityPageForm";
import ModalForMobile from '../components/ModalForMobile';

import Breadcrumbs from 'nextjs-breadcrumbs';

import { doc, getDoc, getDocs, collection, where, query } from "firebase/firestore";
import { db } from "../firebase";

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/navigation";
import 'swiper/css';

import { ChevronRightIcon, ChevronLeftIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';

import { kebabCase, startCase } from "lodash";
import Footer from '../components/Footer';
import SmPropertyCard from '../components/SmPropertyCard';

import { useRouter } from 'next/router'
import { Jelly } from "@uiball/loaders";
import { motion } from 'framer-motion'

function PropertyPage({ propertyData }) {

    const [amenitiesShow, setAmenitiesShow] = useState(6);
    const [similarPropData, setSimilarPropData] = useState([])
    const triggerAnimate = useRef(null);
    const refToScroll = useRef(null);

    const router = useRouter();

    if (router.isFallback) {
        return (
            <div className='w-screen h-screen flex items-center justify-center fixed text-xl top-0 left-0 bg-white z-40'>
                <Jelly size={50} color='#6b7280' />
            </div>
        )
    }

    const scroll = (scrollOffset) => {
        refToScroll.current.scrollLeft += scrollOffset;
    };

    const modelRef = useRef(null);

    const handleModal = () => {
        modelRef.current.showModal();
    };

    // I am still figuring out this piece of code but it is working it is flitering object same way as we have array filter.
    Object.filter = (obj, predicate) =>
        Object.keys(obj).filter(key => predicate(obj[key])).reduce((res, key) => (res[key] = obj[key], res), {});

    const amenitiesFetched = propertyData?.amenities;

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

    useEffect(async () => {
        const q = query(collection(db, "property"), where("address.city", "==", startCase(propertyData.address.city)));
        const fetchData = await getDocs(q);
        let refinedData = fetchData.docs.map((doc) => {
            return {
                id: doc.id,
                data: doc.data()
            }

        })
        refinedData = refinedData.filter(item => item.id != propertyData.uniqueId)
        setSimilarPropData(refinedData);
    }, [])

    return (
        <motion.div key={router.route} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.75 }}>
            <Head>
                <title>{`Office Space in ${propertyData.address.city} | Top Office Space in ${propertyData.address.micromarket}, ${propertyData.address.city} - Smartdaftar`}</title>

                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>

                <link rel="shortcut icon" href="/favicon.png"></link>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png"></link>
                <link rel="canonical" href={`https://smartdaftar.com/coworking-space/${kebabCase(propertyData.address.city)}/${kebabCase(propertyData.address.micromarket)}/${propertyData.uniqueId}`} />

                <meta name="title" content={`Office Space in ${propertyData.address.city} | Top Office Space in ${propertyData.address.micromarket}, ${propertyData.address.city} - Smartdaftar`} property='title'></meta>
                <meta name='og:title' property="og:title" content={`Office Space in ${propertyData.address.city} | Top Office Space in ${propertyData.address.micromarket}, ${propertyData.address.city} - Smartdaftar`}></meta>
                <meta name="twitter:title" content={`Office Space in ${propertyData.address.city} | Top Office Space in ${propertyData.address.micromarket}, ${propertyData.address.city} - Smartdaftar`} property='twitter:title'></meta>

                <meta name="og:type" content="website" property="og:type"></meta>

                <meta name="description" content={`Smartdaftar offers you to book the best office space in ${propertyData.address.micromarket}, ${propertyData.address.city}. Move into fully furnished office space in Gurgaon. Book an office space now!`} property="description"></meta>
                <meta name="og:description" content={`Smartdaftar offers you to book the best office space in ${propertyData.address.micromarket}, ${propertyData.address.city}. Move into fully furnished office space in Gurgaon. Book an office space now!`} property="og:description"></meta>
                <meta name="twitter:description" content={`Smartdaftar offers you to book the best office space in ${propertyData.address.micromarket}, ${propertyData.address.city}. Move into fully furnished office space in Gurgaon. Book an office space now!`} property='twitter:description'></meta>

                <meta property="og:image" content="/image-share-thumb.jpg" name='og:image'></meta>
                <meta name="twitter:image" content="/image-share-thumb.jpg" property='twitter:image'></meta>

                <meta name="twitter:image:alt" content={`Office Space in ${propertyData.address.city} | Top Office Space in ${propertyData.address.micromarket}, ${propertyData.address.city} - Smartdaftar`} property='twitter:image:alt'></meta>
                <meta name='og:image:alt' property="og:image:alt" content={`Office Space in ${propertyData.address.city} | Top Office Space in ${propertyData.address.micromarket}, ${propertyData.address.city} - Smartdaftar`}></meta>
                <meta property="og:image:height" content="500"></meta>
                <meta property="og:url" content={`https://smartdaftar.com/coworking-space/${kebabCase(propertyData.address.city)}/${kebabCase(propertyData.address.micromarket)}/${propertyData.uniqueId}`}></meta>

            </Head>
            <div className="bg-slate-100 font-Sora h-screen overflow-y-scroll">
                <Header homePage={false} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 w-11/12 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
                    <div className='md:col-span-2 lg:col-span-5'>
                        <Breadcrumbs omitIndexList={[0]} containerClassName='text-sm md:text-base flex pt-5 pb-2 font-semibold font-Roboto truncate' listClassName='flex flex-wrap gap-x-2 capitalize' inactiveItemClassName='inline-block hover:underline after:chevron-right' activeItemClassName='text-gray-500' rootLabel="Home" />
                    </div>
                    <div className='lg:pt-2 lg:col-span-3'>
                        <h1 className='pb-2 xl:pl-0 font-Sora text-2xl lg:text-3xl text-gray-500 font-semibold tracking-wide'>{`SmartDaftar - Office Space in ${propertyData.uniqueId}`}</h1>
                        <div className='flex items-center pb-2 gap-x-1'>
                            <LocationMarkerIcon className='w-5 h-5 text-gray-500' />
                            <h1 className='font-Sora sm:text-xl text-gray-700 font-semibold'>{propertyData.address.micromarket}</h1>
                        </div>
                        <Swiper className='rounded-lg h-[250px] sm:h-[400px] w-auto ' navigation={{ prevEl: '.prev', nextEl: '.next' }} pagination={{ dynamicBullets: true }} modules={[Navigation, Pagination, Autoplay]} autoplay={{ delay: 3000 }} loop={true}>

                            {propertyData?.photos?.map((photo) => {
                                return (
                                    <SwiperSlide><img className="object-cover h-[250px] sm:h-[400px] w-full rounded-lg" src={photo} /></SwiperSlide>
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
                            <h3 className='text-xl font-semibold'>About this Space</h3>
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
                                <div className='grid grid-cols-2 p-2 gap-y-3 pl-4 pb-4 font-Roboto font-medium text-gray-600'>
                                    {
                                        amenitiesArray.slice(0, 6).map((amenities) => {
                                            return (
                                                <div className='flex items-center justify-start'>
                                                    <img className='h-6 w-6' src={`/${amenities}.svg`} />
                                                    <p className='pl-2 truncate'>{startCase(amenities)}</p>
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
                            <h3 className='pl-1 md:pl-0 text-xl font-semibold'>Plans and Pricing</h3>

                            {propertyData?.privateOffice[0]?.seater?.length >= 1 &&
                                <div className='mt-3 border-slate-300 border rounded-md shadow-sm p-3 lg:p-5 bg-white font-Roboto'>
                                    <h4 className='text-gray-700 font-semibold'>Private Office</h4>
                                    <p className='text-zinc-500'>Private cabins for teams and individuals</p>
                                    <div className='pt-2 flex items-center justify-between'>
                                        <p>starting from <span className="inline text-base font-semibold text-black">{`₹ ${propertyData.privateOffice[0].price}`}</span> /month *</p>
                                        <p onClick={() => triggerAnimate.current()} className='text-gray-500 font-semibold hover:underline cursor-pointer'>Enquire now</p>
                                    </div>
                                </div>
                            }

                            {propertyData?.coworkingSpace?.dedicatedSeats?.length > 0 &&
                                <div className='mt-3 border-slate-300 border rounded-md shadow-sm p-3 lg:p-5 bg-white font-Roboto'>
                                    <h4 className='text-gray-700 font-semibold'>Dedicated Seats</h4>
                                    <p className='text-zinc-500'>Perfect for individuals and teams for instant plugin and requirements.</p>
                                    <div className='pt-2 flex items-center justify-between'>
                                        <p>starting from <span className="inline text-base font-semibold text-black">{`₹ ${propertyData.coworkingSpace.pricePerPerson}`}</span> /month *</p>
                                        <p onClick={() => triggerAnimate.current()} className='text-gray-500 font-semibold hover:underline cursor-pointer'>Enquire now</p>
                                    </div>
                                </div>
                            }

                            {propertyData?.meetingRoom[0]?.seater?.length > 0 &&
                                <div className='mt-3 border-slate-300 border rounded-md shadow-sm p-3 lg:p-5 bg-white font-Roboto'>
                                    <h4 className='text-gray-700 font-semibold'>Meeting Room</h4>
                                    <p className='text-zinc-500'>Instant availability for Conference Room and Spaces for video shoots.</p>
                                    <div className='pt-2 flex items-center justify-between'>
                                        <p>starting from <span className="inline text-base font-semibold text-black">{`₹ ${propertyData.meetingRoom[0].price}`}</span> /hour *</p>
                                        <p onClick={() => triggerAnimate.current()} className='text-gray-500 font-semibold hover:underline cursor-pointer'>Enquire now</p>
                                    </div>
                                </div>
                            }

                            {propertyData?.trainingRoom[0]?.seater?.length > 0 &&
                                <div className='mt-3 border-slate-300 border rounded-md shadow-sm p-3 lg:p-5 bg-white font-Roboto'>
                                    <h4 className='text-gray-700 font-semibold'>Training Room</h4>
                                    <p className='text-zinc-500'>Instant availability for Conference Room and Spaces for video shoots.</p>
                                    <div className='pt-2 flex items-center justify-between'>
                                        <p>starting from <span className="inline text-base font-semibold text-black">{`₹ ${propertyData.trainingRoom[0].price}`}</span> /hour *</p>
                                        <p onClick={() => triggerAnimate.current()} className='text-gray-500 font-semibold hover:underline cursor-pointer'>Enquire now</p>
                                    </div>
                                </div>
                            }

                            {propertyData?.virtualOffice?.available &&
                                < div className='mt-3 border-slate-300 border rounded-md shadow-sm p-3 lg:p-5 bg-white font-Roboto'>
                                    <h4 className='text-gray-700 font-semibold'>Virtual Office</h4>
                                    <p className='text-zinc-500'>Reach your customers anywhere in India by getting an address for your business.</p>
                                    <div className='pt-2 flex items-center justify-between'>
                                        <p>starting from <span className="inline text-base font-semibold text-black">{`₹ ${propertyData.virtualOffice.pricePerYear}`}</span> /year *</p>
                                        <p onClick={() => triggerAnimate.current()} className='text-gray-500 font-semibold hover:underline cursor-pointer'>Enquire now</p>
                                    </div>
                                </div>
                            }

                            {propertyData?.coworkingSpace?.dayPass?.length > 0 &&
                                <div className='mt-3 border-slate-300 border rounded-md shadow-sm p-3 lg:p-5 bg-white font-Roboto'>
                                    <h4 className='text-gray-700 font-semibold'>Day Pass</h4>
                                    <p className='text-zinc-500'>Book your Workspace anywhere PAN India and boost your productivity.</p>
                                    <div className='pt-2 flex items-center justify-between'>
                                        <p>starting from <span className="inline text-base font-semibold text-black">{`₹ ${propertyData.coworkingSpace.dayPass}`}</span> /day</p>
                                        <p onClick={() => triggerAnimate.current()} className='text-gray-500 font-semibold hover:underline cursor-pointer'>Enquire now</p>
                                    </div>
                                </div>
                            }
                        </div>
                        {similarPropData.length > 0 &&
                            <div className='pt-5'>
                                <div className='flex align-middle justify-between'>
                                    <h3 className='pl-1 md:pl-0 text-xl font-semibold'>Similar Spaces</h3>
                                    {similarPropData.length > 2 &&
                                        <div className='flex space-x-2'>
                                            <ChevronLeftIcon onClick={() => scroll(-300)} className='h-8 w-8 p-1 cursor-pointer rounded-full  bg-slate-200' />
                                            <ChevronRightIcon onClick={() => scroll(300)} className='h-8 w-8 p-1 cursor-pointer rounded-full bg-slate-200' />
                                        </div>
                                    }

                                </div>
                                <div ref={refToScroll} className='mt-3 px-3 flex space-x-3 overflow-x-auto scroll-smooth'>

                                    {similarPropData.map((item) => {
                                        return (
                                            <SmPropertyCard key={item.id} propertyData={item.data} />
                                        )
                                    })}

                                </div>
                            </div>
                        }
                    </div>
                    <div className="hidden px-4 lg:px-8 md:grid lg:col-span-2 lg:justify-items-center">
                        <CityPageForm city={propertyData?.uniqueId} triggerAnimate={triggerAnimate} />
                    </div>
                </div>
                <Footer />
                <div className="fixed w-screen border-t border-t-slate-300 md:hidden py-2 flex bottom-0 bg-white z-30 justify-center">
                    <button onClick={handleModal} className="font-semibold bg-red-400 hover:bg-white hover:text-red-400 border hover:border-red-400 text-white py-2 w-11/12 sm:w-3/4 rounded-md">Enquire Now</button>
                </div>
                <ModalForMobile ref={modelRef} city={propertyData.uniqueId} triggerAnimate={triggerAnimate} />
            </div>

        </motion.div >
    )
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const allProperties = await getDocs(collection(db, "property"));
    const refinedData = allProperties?.docs?.map((doc) => {
        return {
            id: doc.id,
            data: doc.data()
        }
    })

    // Get the paths we want to pre-render based on posts
    const paths = refinedData?.map((item) => ({
        params: {
            property: ['coworking-space', kebabCase(item.data.address.city), kebabCase(item.data.address.micromarket), item.id]
        },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
}

export async function getStaticProps({ params }) {

    const docRef = doc(db, "property", params.property[3]);
    const docSnap = await getDoc(docRef);
    const propertyData = docSnap.data();

    return {
        props: { propertyData },
        revalidate: 60,
    };
}

export default PropertyPage