import { useRef, useEffect } from "react";

import Header from "../../../components/Header";
import PropertyCard from "../../../components/PropertyCard";
import CityPageForm from "../../../components/CityPageForm";
import Footer from "../../../components/Footer";

import Link from 'next/link'
import Head from 'next/head'

import Breadcrumbs from 'nextjs-breadcrumbs';

import { collection, where, getDocs, query, doc, getDoc } from "@firebase/firestore"
import { db } from "../../../firebase";

import { startCase, kebabCase } from "lodash";

import { useRouter } from "next/router";

import { useRecoilState } from 'recoil'
import { microMarketAtom } from '../../../atoms/headerAtom'
import ModalForMobile from "../../../components/ModalForMobile";

function CityPage({ refinedData, uniq }) {

    //having a recoil state to store micromarkets in a city for filtering
    const [microArray, setMicroArray] = useRecoilState(microMarketAtom)
    useEffect(() => {
        setMicroArray(uniq)
    }, [])


    const router = useRouter();
    const { cities, pid } = router.query;

    const metaCity = startCase(cities)

    const triggerAnimate = useRef(null);

    const modelRef = useRef(null);

    const handleModal = () => {
        modelRef.current.showModal();
    };

    // Filtering metadata according to the category of url
    const getmetaDetails = () => {
        if (pid === 'coworking-space') {
            return {
                title: `Coworking Space in ${metaCity} | Shared Office Space in ${metaCity} - Smartdaftar`,
                description: `Smartdaftar offers you to book the best coworking space in ${metaCity}. Move into fully furnished Shared Office Space in ${metaCity}. Book a coworking space now!`
            }
        }
        if (pid === 'private-office') {
            return {
                title: `Private Office in ${metaCity} | Private Cabin in ${metaCity} - Smartdaftar`,
                description: `Ready to move in private office space in ${metaCity}. Fully furnished manager cabin with all modern amenities. Find the best private cabin, managed office space in gurgaon.`,
            }
        }
        if (pid === 'virtual-office') {
            return {
                title: `Smartdaftar offers you to book the best coworking space in ${metaCity}. Move into fully furnished Shared Office Space in ${metaCity}. Book a coworking space now!`,
                description: `Looking for virtual office in sector ${metaCity} for GST registration, business registration, mailing address with courier services, reception, meeting room and day pass booking.`
            }
        }
        if (pid === 'training-room') {
            return {
                title: `Training Rooms in ${metaCity} | Board Rooms and Seminar Hall in ${metaCity} - Smartfdaftar`,
                description: `Best Training Rooms in ${metaCity}. Find fully equipped, verified training rooms in ${metaCity} for your training, business meetings and interviews. Find the list of the best training rooms near you!`
            }
        }
        if (pid === 'meeting-room') {
            return {
                title: `Meeting Rooms in ${metaCity} | Conference Rooms in ${metaCity} - Smartdaftar`,
                description: `Smartdaftar offers you fully furnished meeting rooms at a cost effective price. Book meeting rooms and conference rooms in ${metaCity}.`
            }
        }
        if (pid === 'day-pass') {
            return {
                title: `Book day pass for Coworking Space in ${metaCity} | Coworking Day Pass near me - Smartdaftar`,
                description: `Book an office space for a day in ${metaCity}. Find a day or weekly  pass near me with all top notch services and amenities.`
            }
        }
        if (pid === 'commercial-space') {
            return {
                title: `Serviced Office Space in ${metaCity} | Managed Office Space in ${metaCity} - Smartdaftar`,
                description: `Smartdaftar offers fully furnished serviced office space in ${metaCity} with top amenities at cost effective prices. Get Exclusively Managed Office Spaces in ${metaCity} at smartdaftar.`
            }
        }
    }
    const metaDetails = getmetaDetails();

    return (
        <div>
            <Head>
                <title>{metaDetails.title}</title>

                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>

                <link rel="shortcut icon" href="/favicon.png"></link>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png"></link>
                <link rel="canonical" href={`https://smartdaftar.com/${pid}/${cities}`} />

                <meta name="title" content={metaDetails.title} property='title'></meta>
                <meta name='og:title' property="og:title" content={metaDetails.title}></meta>
                <meta name="twitter:title" content={metaDetails.title} property='twitter:title'></meta>

                <meta name="og:type" content="website" property="og:type"></meta>

                <meta name="description" content={metaDetails.description} property="description"></meta>
                <meta name="og:description" content={metaDetails.description} property="og:description"></meta>
                <meta name="twitter:description" content={metaDetails.description} property='twitter:description'></meta>

                <meta property="og:image" content="/image-share-thumb.jpg" name='og:image'></meta>
                <meta name="twitter:image" content="image-share-thumb.jpg" property='twitter:image'></meta>

                <meta name="twitter:image:alt" content={metaDetails.title} property='twitter:image:alt'></meta>
                <meta name='og:image:alt' property="og:image:alt" content={metaDetails.title}></meta>
                <meta property="og:image:height" content="500"></meta>
                <meta property="og:url" content={`https://smartdaftar.com/${pid}/${cities}`}></meta>

            </Head>
            <div className="bg-slate-100 font-Sora h-screen overflow-y-scroll">
                <Header homePage={false} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
                    <div className="px-2 md:col-span-2 lg:col-span-5">
                        <Breadcrumbs containerClassName='text-sm md:text-base flex pt-5 pb-2 font-semibold font-Roboto' listClassName='flex flex-wrap gap-x-2 capitalize' inactiveItemClassName='inline-block hover:underline after:chevron-right' activeItemClassName='text-gray-500' rootLabel="Home" />
                        <h1 className="capitalize font-Roboto tracking-wider text-4xl font-bold text-gray-500">{startCase(pid)} in {startCase(cities)}</h1>
                        <div className="md:max-w-3xl lg:max-w-6xl mx-auto">
                            <div className="flex overflow-x-auto items-center gap-x-3 list-none py-4 border-b border-slate-300">
                                {uniq.map(item => {
                                    return (
                                        <Link key={item} href={`/${encodeURIComponent(pid)}/${encodeURIComponent(cities)}/${encodeURIComponent(kebabCase(item))}`}>
                                            <li className="filter-pill">{item}</li>
                                        </Link>
                                    )
                                })}
                            </div>

                        </div>
                    </div>

                    <div className="md:col-span-2 lg:col-span-3">
                        <div className="flex flex-col divide-y gap-4">
                            {!refinedData.length == 0 ?
                                refinedData.map((prop) => {
                                    return <PropertyCard key={prop.id} data={prop.data} id={prop.id} />
                                }) : (
                                    <div className="flex flex-col justify-center">
                                        <img className="h-[300px] md:h-[400px]" src="/404.svg"></img>
                                        <p className="font-semibold text-gray-400 text-center mt-4">No property Found !</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="hidden pt-2 pl-10 lg:inline-grid lg:col-span-2">
                        <CityPageForm city={cities} triggerAnimate={triggerAnimate} />
                    </div>

                    <div className="absolute border-t border-t-slate-300 md:hidden p-2 flex bottom-0 bg-white z-30 w-full justify-center">
                        <button onClick={handleModal} className="font-semibold bg-red-400 hover:bg-white hover:text-red-400 border hover:border-red-400 text-white py-2 rounded-md w-3/4">Enquire Now</button>
                    </div>
                    <ModalForMobile ref={modelRef} city={cities} triggerAnimate={triggerAnimate} />

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
        'new-delhi',
        'vishakhapatnam',
        'jodhpur',
        'mumbai',
        'noida',
        'bangalore',
        'chennai',
        'hyderabad',
        'indore',
        'kanpur',
        'allahabad',
        'jamshedpur',
        'nasik',
        'bir',
        'mysuru',
        'vijaywada',
        'mangalore',
        'guwahati',
        'lucknow',
        'dehradun',
        'nagpur',
        'coimbatore',
        'bhopal',
        'bhubaneswar',
        'trivandrum',
        'udaipur',
        'dharmshala',
        'ranchi',
        'raipur',
        'patna',
        'cochin',
        'pune',
        'jabalpur',
        'pondicherry',
        'agra',
        'jammu',
        'kota',
        'meerut',
        'goa',
        'ahmedabad',
        'baroda',
        'surat',
        'chandigarh',
        'gurgaon',
        'faridabad',
        'kolkata',
        'jaipur'
    ]

    const path1 = cityParams.map((city) => ({
        params: {
            pid: 'coworking-space',
            cities: city,
        }
    }))

    const path2 = cityParams.map((city) => ({
        params: {
            pid: 'virtual-office',
            cities: city,
        }
    }))

    const path3 = cityParams.map((city) => ({
        params: {
            pid: 'meeting-room',
            cities: city,
        }
    }))

    const path4 = cityParams.map((city) => ({
        params: {
            pid: 'private-office',
            cities: city,
        }
    }))

    const path5 = cityParams.map((city) => ({
        params: {
            pid: 'day-pass',
            cities: city,
        }
    }))

    const path6 = cityParams.map((city) => ({
        params: {
            pid: 'commercial-space',
            cities: city,
        }
    }))


    const paths = path1.concat(path2, path3, path4, path5, path6);

    return {
        paths,
        // paths: [
        //     {
        //         params: {
        //             pid: 'coworking-space',
        //             cities: 'lucknow'
        //         }
        //     },
        //     {
        //         params: {
        //             pid: 'virtual-office',
        //             cities: 'lucknow'
        //         }
        //     },
        //     {
        //         params: {
        //             pid: 'coworking-space',
        //             cities: 'mumbai'
        //         }
        //     },
        //     {
        //         params: {
        //             pid: 'coworking-space',
        //             cities: 'newDelhi'
        //         }
        //     },
        //     // See the "paths" section below
        // ],
        fallback: true // See the "fallback" section below
    };
}


export async function getStaticProps(context) {

    const q = query(collection(db, "property"), where("address.city", "==", startCase(context.params.cities)));
    const fetchData = await getDocs(q);
    const refinedData = fetchData.docs.map((doc) => {
        return {
            id: doc.id,
            data: doc.data()
        }
    })

    //getting micromarket filters from the available property data
    const micromarketArray = refinedData?.map(item => {
        return item.data.address.micromarket
    })
    const uniq = [...new Set(micromarketArray)];

    // const micromarketRef = doc(db, "micromarket", startCase(context.params.cities))
    // const micromarketSnap = await getDoc(micromarketRef)
    // const micromarketData = micromarketSnap.data()


    return {
        props: { refinedData, uniq },
        revalidate: 60,
    };
}


export default CityPage