import { useRef } from "react";

import Header from "../../../components/Header";
import Property from "../../../components/Property";
import CityPageForm from "../../../components/CityPageForm";
import Footer from "../../../components/Footer";

import Breadcrumbs from 'nextjs-breadcrumbs';

import { collection, where, getDocs, query } from "@firebase/firestore"
import { db } from "../../../firebase";

import { startCase } from "lodash";

import { useRouter } from "next/router";

function CityPage({ refinedData }) {

    const router = useRouter();
    const { cities, pid } = router.query;

    const triggerAnimate = useRef(null);

    return (
        <div>
            <div className="bg-gray-50 font-Sora h-screen overflow-y-scroll">
                <Header homePage={false} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 md:max-w-3xl lg:max-w-6xl mx-auto">
                    <div className="px-2 md:col-span-2 lg:col-span-5">
                        <Breadcrumbs containerClassName='flex pt-5 pb-2 font-semibold font-Roboto' listClassName='flex gap-x-2 capitalize' inactiveItemClassName='inline-block hover:underline after:chevron-right' activeItemClassName='text-gray-500' rootLabel="Home" />
                        <h1 className="capitalize font-Roboto tracking-wider text-4xl font-bold text-gray-500">{startCase(pid)} in {cities}</h1>
                        <div className="md:max-w-3xl lg:max-w-6xl mx-auto">
                            <div className="flex overflow-x-auto items-center gap-x-3 list-none py-4 border-b border-slate-300">
                                <li className="filter-pill">Private Office</li>
                                <li className="filter-pill">Meeeting Room</li>
                                <li className="filter-pill">Coworking Spaces</li>
                                <li className="filter-pill">Day Pass</li>
                                <li className="filter-pill">Virtual Office</li>
                                <li className="filter-pill">Commercial Spaces</li>
                            </div>

                        </div>
                    </div>

                    <div className="md:col-span-2 lg:col-span-3">
                        <div className="flex flex-col divide-y gap-4">
                            {
                                refinedData.map((prop) => {
                                    return <Property key={prop.id} data={prop.data} id={prop.id} />
                                })
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
        fallback: false // See the "fallback" section below
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

    return {
        props: { refinedData },
    };
}


export default CityPage