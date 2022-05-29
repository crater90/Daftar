import { useState, useEffect, useRef } from "react";

import Header from "../components/Header";
import Property from "../components/Property";
import CityPageForm from "../components/CityPageForm";
import Footer from "../components/Footer";

import Breadcrumbs from 'nextjs-breadcrumbs';

import { collection, where, getDocs, query } from "@firebase/firestore"
import { db } from "../firebase";

import { startCase } from "lodash";

import { useRouter } from "next/router";

function CityPage({ refinedData }) {
    console.log(refinedData);
    const router = useRouter();
    const { cities } = router.query;

    const [searchableCity, setSearchableCity] = useState(null);
    const triggerAnimate = useRef(null)

    // useEffect(() => {
    //     if (!router.isReady) return;
    //     setSearchableCity(cities);
    //     // codes using router.query
    //     console.log(searchableCity);

    // }, [router.isReady]);

    // useEffect(
    //     () =>
    //         onSnapshot(
    //             query(collection(db, "property"), where("address.city", "==", searchableCity)),
    //             (snapshot) => {
    //                 setProperties(snapshot.docs.map((doc) => {
    //                     return {
    //                         id: doc.id,
    //                         data: doc.data(),
    //                     }
    //                 }));
    //             }
    //         ),
    //     [db]
    // );


    // useEffect(() => {
    //     if (router.isReady) {
    //         const q = query(collection(db, "property"), where("address.city", "==", startCase(cities)));
    //         const fetchData = onSnapshot(q, (snapshot) => {
    //             setProperties(snapshot.docs.map((doc) => {
    //                 return {
    //                     id: doc.id,
    //                     data: doc.data(),
    //                 }
    //             }))

    //         })
    //         return () => {
    //             fetchData()
    //         }
    //     }

    // }, [router.isReady])
    // console.log(properties);

    return (
        <div>
            <div className="bg-gray-50 font-Sora h-screen overflow-y-scroll">
                <Header homePage={false} />

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:max-w-3xl lg:max-w-6xl mx-auto">
                    <div className="lg:col-span-5">
                        <Breadcrumbs containerClassName='flex pt-5 pb-2 font-semibold font-Roboto' listClassName='flex gap-x-2 capitalize' inactiveItemClassName='inline-block hover:underline after:chevron-right' activeItemClassName='text-gray-500' rootLabel="Home" />
                        <h1 className="capitalize font-Roboto tracking-wider text-4xl font-bold text-gray-500">Coworking spaces in {cities}</h1>
                        <div className="md:max-w-3xl lg:max-w-6xl mx-auto">
                            <div className="flex items-center gap-x-3 list-none py-4 border-b border-gray-200">
                                <li className="filter-pill">Private Office</li>
                                <li className="filter-pill">Meeeting Room</li>
                                <li className="filter-pill">Coworking Spaces</li>
                                <li className="filter-pill">Day Pass</li>
                                <li className="filter-pill">Virtual Office</li>
                                <li className="filter-pill">Commercial Spaces</li>
                            </div>

                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        {/* <Breadcrumbs containerClassName='flex pt-2' listClassName='flex gap-x-2' inactiveItemClassName='inline-block after:chevron-right' activeItemClassName='' rootLabel="Home" />
                        <h1 className="capitalize text-3xl font-bold text-gray-500">Coworking spaces in {cities}</h1> */}
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
    return {
        paths: [
            { params: { cities: 'lucknow' } },
            { params: { cities: 'mumbai' } },
            { params: { cities: 'pune' } },
            { params: { cities: 'hyderabad' } },
            { params: { cities: 'newDelhi' } } // See the "paths" section below
        ],
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