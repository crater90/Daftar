import { useRef } from "react";
import React from 'react'

import Head from 'next/head'

import Header from '../../../components/Header';
import PropertyCard from "../../../components/PropertyCard";
import CityPageForm from "../../../components/CityPageForm";
import Footer from "../../../components/Footer";

import Breadcrumbs from 'nextjs-breadcrumbs';

import { collection, where, getDocs, query, doc, getDoc } from "@firebase/firestore"
import { db } from "../../../firebase";

import { startCase, kebabCase } from "lodash";
import { useRouter } from 'next/router'

import Link from 'next/link'

import { useRecoilValue } from 'recoil'
import { microMarketAtom } from '../../../atoms/headerAtom'

function Micromarket({ refinedData }) {

    const router = useRouter();
    const { cities, pid, micromarket } = router.query;
    const metaCity = startCase(cities);
    const metaMicro = startCase(micromarket);

    //getting available micromarkets for filter tags
    const newMicro = useRecoilValue(microMarketAtom)

    // filtering micromarket with the current one
    const newData = newMicro?.filter(item => item != startCase(micromarket))

    const triggerAnimate = useRef(null);

    // Filtering metadata according to the category of url
    const getmetaDetails = () => {
        if (pid === 'coworking-space') {
            return {
                title: `Coworking Space in ${metaMicro}, ${metaCity} | Shared Office Space in ${metaCity} - Smartdaftar`,
                description: `Smartdaftar offers you to book the best coworking space in ${metaMicro}, ${metaCity}. Move into fully furnished Shared Office Space in ${metaCity}. Book a coworking space now!`
            }
        }
        if (pid === 'private-office') {
            return {
                title: `Private Office in ${metaMicro}, ${metaCity} | Private Cabin in ${metaCity} - Smartdaftar`,
                description: `Ready to move in private office space in ${metaMicro}, ${metaCity}. Fully furnished manager cabin with all modern amenities. Find the best private cabin, managed office space in ${metaCity}.`,
            }
        }
        if (pid === 'virtual-office') {
            return {
                title: `Smartdaftar offers you to book the best coworking space in ${metaMicro}, ${metaCity}. Move into fully furnished Shared Office Space in ${metaCity}. Book a coworking space now!`,
                description: `Looking for virtual office in sector ${metaMicro}, ${metaCity} for GST registration, business registration, mailing address with courier services, reception, meeting room and day pass booking.`
            }
        }
        if (pid === 'training-room') {
            return {
                title: `Training Rooms in ${metaMicro}, ${metaCity} | Board Rooms and Seminar Hall in ${metaCity} - Smartfdaftar`,
                description: `Best Training Rooms in ${metaMicro}, ${metaCity}. Find fully equipped, verified training rooms in ${metaCity} for your training, business meetings and interviews. Find the list of the best training rooms near you!`
            }
        }
        if (pid === 'meeting-room') {
            return {
                title: `Meeting Rooms in ${metaMicro}, ${metaCity} | Conference Rooms in ${metaCity} - Smartdaftar`,
                description: `Smartdaftar offers you fully furnished meeting rooms at a cost effective price. Book meeting rooms and conference rooms in ${metaMicro}, ${metaCity}.`
            }
        }
        if (pid === 'day-pass') {
            return {
                title: `Book day pass for Coworking Space in ${metaMicro}, ${metaCity} | Coworking Day Pass near me - Smartdaftar`,
                description: `Book an office space for a day in ${metaMicro}, ${metaCity}. Find a day or weekly  pass near me with all top notch services and amenities.`
            }
        }
        if (pid === 'commercial-spaces') {
            return {
                title: `Serviced Office Space in ${metaMicro}, ${metaCity} | Managed Office Space in ${metaCity} - Smartdaftar`,
                description: `Smartdaftar offers fully furnished serviced office space in ${metaMicro}, ${metaCity} with top amenities at cost effective prices. Get Exclusively Managed Office Spaces in ${metaCity} at smartdaftar.`
            }
        }
    }
    const metaDetails = getmetaDetails();

    return (
        <div>
            <Head>
                <title>{metaDetails?.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>

                <link rel="shortcut icon" href="/favicon.png"></link>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png"></link>
                <link rel="canonical" href={`https://smartdaftar.com/${pid}/${cities}/${micromarket}`} />

                <meta name="title" content={metaDetails?.title} property='title'></meta>
                <meta name='og:title' property="og:title" content={metaDetails?.title}></meta>
                <meta name="twitter:title" content={metaDetails?.title} property='twitter:title'></meta>

                <meta name="og:type" content="website" property="og:type"></meta>

                <meta name="description" content={metaDetails?.description} property="description"></meta>
                <meta name="og:description" content={metaDetails?.description} property="og:description"></meta>
                <meta name="twitter:description" content={metaDetails?.description} property='twitter:description'></meta>

                <meta property="og:image" content="/image-share-thumb.jpg" name='og:image'></meta>
                <meta name="twitter:image" content="/image-share-thumb.jpg" property='twitter:image'></meta>

                <meta name="twitter:image:alt" content={metaDetails?.title} property='twitter:image:alt'></meta>
                <meta name='og:image:alt' property="og:image:alt" content={metaDetails?.title}></meta>
                <meta property="og:image:height" content="500"></meta>
                <meta property="og:url" content={`https://smartdaftar.com/${pid}/${cities}/${micromarket}`}></meta>
            </Head>
            <div className="bg-gray-50 font-Sora h-screen overflow-y-scroll">
                <Header homePage={false} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 md:max-w-3xl lg:max-w-6xl mx-auto">
                    <div className="px-2 md:col-span-2 lg:col-span-5">
                        <Breadcrumbs containerClassName='flex pt-5 pb-2 font-semibold font-Roboto' listClassName='flex gap-x-2 capitalize' inactiveItemClassName='inline-block hover:underline after:chevron-right' activeItemClassName='text-gray-500' rootLabel="Home" />
                        <h1 className="capitalize font-Roboto tracking-wider text-4xl font-bold text-gray-500">{startCase(pid)} in {cities}</h1>
                        <div className="md:max-w-3xl lg:max-w-6xl mx-auto">
                            <div className="flex overflow-x-auto items-center gap-x-3 list-none py-4 border-b border-slate-300">
                                <li className="filter-pill bg-gray-400 text-yellow-50 font-bold">{startCase(micromarket)}</li>
                                {newData?.map(item => {
                                    return (
                                        <Link key={item} href={`/${encodeURIComponent(pid)}/${encodeURIComponent(cities)}/${encodeURIComponent(kebabCase(item))}`}>
                                            <li key={item} className="filter-pill">{item}</li>
                                        </Link>
                                    )
                                })}
                                {/* <li className="filter-pill">Private Office</li>
                                <li className="filter-pill">Meeeting Room</li>
                                <li className="filter-pill">Coworking Spaces</li>
                                <li className="filter-pill">Day Pass</li>
                                <li className="filter-pill">Virtual Office</li>
                                <li className="filter-pill">Commercial Spaces</li> */}
                            </div>

                        </div>
                    </div>

                    <div className="md:col-span-2 lg:col-span-3">
                        <div className="flex flex-col divide-y gap-4">
                            {!refinedData.length == 0 ?
                                refinedData.map((prop) => {
                                    return <PropertyCard key={prop.id} data={prop.data} id={prop.id} />
                                }) : (
                                    <div className="flex flex-col md:flex-row mt-4">No property found</div>
                                )
                            }
                        </div>
                    </div>
                    <div className="hidden px-5 lg:inline-grid lg:col-span-2">
                        <CityPageForm city={cities} triggerAnimate={triggerAnimate} />
                    </div>
                </div>
                <Footer />
            </div>

        </div>
    )
}

export async function getStaticPaths() {
    // const allProperties = await getDocs(collection(db, "property"));
    // const refinedData = allProperties.docs.map((doc) => {
    //     return {
    //         id: doc.id,
    //         data: doc.data()
    //     }
    // })

    // const paths = refinedData.map((item) => ({
    //     params: {
    //         property: ['coworking-space', camelCase(item.data.address.city)]
    //     },
    // }))
    const cityParams = [
        'lucknow',
        'newDelhi',
        'mumbai',
        'noida'
    ]

    const path1 = cityParams.map((city) => ({
        params: {
            pid: 'coworking-space',
            cities: city,
            micromarket: 'gomti-nagar'
        }
    }))

    const path2 = cityParams.map((city) => ({
        params: {
            pid: 'virtual-office',
            cities: city,
            micromarket: 'gomti-nagar'
        }
    }))

    const path3 = cityParams.map((city) => ({
        params: {
            pid: 'meeting-room',
            cities: city,
            micromarket: 'gomti-nagar'
        }
    }))

    const path4 = cityParams.map((city) => ({
        params: {
            pid: 'private-office',
            cities: city,
            micromarket: 'gomti-nagar'
        }
    }))

    const path5 = cityParams.map((city) => ({
        params: {
            pid: 'day-pass',
            cities: city,
            micromarket: 'gomti-nagar'
        }
    }))

    const path6 = cityParams.map((city) => ({
        params: {
            pid: 'commercial-space',
            cities: city,
            micromarket: 'gomti-nagar'
        }
    }))


    const paths = path1.concat(path2, path3, path4, path5, path6);

    return {
        paths,
        fallback: true // See the "fallback" section below
    };
}

export async function getStaticProps(context) {

    const q = query(collection(db, "property"), where("address.city", "==", startCase(context.params.cities)), where("address.micromarket", "==", startCase(context.params.micromarket)));
    const fetchData = await getDocs(q);
    const refinedData = fetchData.docs.map((doc) => {
        return {
            id: doc.id,
            data: doc.data()
        }
    })

    return {
        props: { refinedData }
    };
}

export default Micromarket