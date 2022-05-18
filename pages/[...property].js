
import { useEffect, useState } from 'react';

import Header from '../components/Header';
import CityPageForm from "../components/CityPageForm";

import Breadcrumbs from 'nextjs-breadcrumbs';

import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import 'swiper/css';

import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";

import { camelCase } from "lodash";


function PropertyPage({ propertyData }) {
    console.log(propertyData);
    // const [propDetails, setPropDetails] = useState({})
    // useEffect(async () => {
    //     const allProperties = await getDocs(collection(db, "property"))
    //     setPropDetails(allProperties);
    //     //setPropDetails(docSnap.data());
    // }, [db])
    // console.log(propDetails);

    return (
        <div>
            <div className="bg-gray-50 font-Sora h-screen overflow-y-scroll">
                <Header homePage={false} />
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:max-w-3xl lg:max-w-6xl mx-auto">
                    <div className='lg:col-span-5'>
                        <Breadcrumbs containerClassName='flex pt-5 pb-2 font-semibold font-Roboto' listClassName='flex gap-x-2 capitalize' inactiveItemClassName='inline-block hover:underline after:chevron-right' activeItemClassName='text-gray-500' rootLabel="Home" />

                    </div>
                    <div className='pt-2 lg:col-span-3'>
                        <h1 className='py-2 font-Sora text-3xl text-gray-700 font-semibold tracking-wide'>{propertyData.venueName}</h1>
                        <Swiper className='rounded-lg h-[400px] w-auto ' navigation={{ prevEl: '.prev', nextEl: '.next' }} pagination={{ dynamicBullets: true }} modules={[Navigation, Pagination]} loop={true}>
                            <SwiperSlide><img className="object-contain h-[400px] w-full rounded-lg" src={propertyData.photos[0]} /></SwiperSlide>
                            <SwiperSlide><img className="object-contain h-[400px] w-full rounded-lg" src={propertyData.photos[1]} /></SwiperSlide>
                            <SwiperSlide><img className="object-contain h-[400px] w-full rounded-lg" src={propertyData.photos[2]} /></SwiperSlide>
                            <SwiperSlide><img className="object-contain h-[400px] w-full rounded-lg" src={propertyData.photos[3]} /></SwiperSlide>
                            <SwiperSlide><img className="object-contain h-[400px] w-full rounded-lg" src={propertyData.photos[4]} /></SwiperSlide>
                            <div className="prev">
                                <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
                            </div>
                            <div className="next">
                                <ChevronRightIcon className="h-6 w-6 text-gray-600" />
                            </div>
                        </Swiper>
                        <h1 className='pt-2 text-xl font-semibold'>About this Space</h1>
                        <p className='pt-2 font-Roboto tracking-wide leading-6'>{propertyData.description}</p>
                    </div>
                    <div className="hidden px-5 lg:inline-grid lg:col-span-2">
                        <CityPageForm city='Spring House' />
                    </div>
                    <div className='lg:col-span-5'>

                    </div>
                </div>
            </div>

        </div>
    )
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const allProperties = await getDocs(collection(db, "property"));
    console.log(allProperties);
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