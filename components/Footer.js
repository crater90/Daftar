import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { useState } from "react"
import { Tab } from '@headlessui/react'
import { startCase } from "lodash"


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Footer() {
    const [show, setShow] = useState(false)
    const [categories] = useState({
        privateOffice: [
            'Private Office in Ahmedabad',
            'Private Office in Mumbai',
            'Private Office in Ahmedabad',
            'Private Office in Mumbai',
            'Private Office in Ahmedabad',
            'Private Office in Mumbai',
        ],
        coworkingSpaces: [
            'Coworking Spaces in Ahmedabad',
            'Coworking Spaces in Mumbai',
            'Coworking Spaces in Ahmedabad',
            'Coworking Spaces in Mumbai',
            'Coworking Spaces in Ahmedabad',
            'Coworking Spaces in Mumbai',
        ],
        meetingRoom: [
            'Meeting Room in Ahmedabad',
            'Meeting Room in Mumbai',
            'Meeting Room in Ahmedabad',
            'Meeting Room in Mumbai',
            'Meeting Room in Ahmedabad',
            'Meeting Room in Mumbai',
        ],
        dayPass: [
            'Day Pass in Ahmedabad',
            'Day Pass in Mumbai',
            'Day Pass in Ahmedabad',
            'Day Pass in Mumbai',
            'Day Pass in Ahmedabad',
            'Day Pass in Mumbai',
        ],
        servicedOffice: [
            'Serviced Office in Ahmedabad',
            'Serviced Office in Mumbai',
            'Serviced Office in Ahmedabad',
            'Serviced Office in Mumbai',
            'Serviced Office in Ahmedabad',
            'Serviced Office in Mumbai',
        ],
        virtualOffice: [
            'Virtual Office in Ahmedabad',
            'Virtual Office in Mumbai',
            'Virtual Office in Ahmedabad',
            'Virtual Office in Mumbai',
            'Virtual Office in Ahmedabad',
            'Virtual Office in Mumbai',
        ]
    })
    return (
        <div className="bg-gray-700 mt-10 pb-8">
            <div className="pt-10 max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4">
                <div className="flex flex-col px-2 md:pr-0 md:pl-5">
                    <h1 className="text-4xl font-bold text-yellow-50">Smartdaftar</h1>
                    <p className="pt-5 text-sm text-yellow-50">Copyright 2021.</p>
                    <p className="text-sm text-yellow-50">All rights reserved.</p>
                    <h4 className="pt-5 text-sm text-yellow-50">Follow us on :</h4>
                    <div className="flex mt-2 gap-x-3 mb-3">
                        <a className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-500 text-yellow-50 cursor-pointer hover:bg-gray-100 hover:text-red-400"><FaFacebookF className="h-5" /></a>
                        <a className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-500 text-yellow-50 cursor-pointer hover:bg-gray-100 hover:text-red-400"><FaInstagram className="h-5" /></a>
                        <a className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-500 text-yellow-50 cursor-pointer hover:bg-gray-100 hover:text-red-400"><FaLinkedinIn className="h-5" /></a>
                        <a className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-500 text-yellow-50 cursor-pointer hover:bg-gray-100 hover:text-red-400"><FaTwitter className="h-5" /></a>
                    </div>
                </div>
                <div className="list-none px-2 md:pr-0 md:pl-5">
                    <h1 className=" text-yellow-50 font-semibold">COMPANY</h1>
                    <div className="text-sm py-3 leading-8 text-gray-300">
                        <li>About us</li>
                        <li>Post your requirements</li>
                        <li>list your space</li>
                        <li>Blogs</li>
                        <li>Refer and earn</li>
                        <li>Terms and conditions</li>
                    </div>
                </div>
                <div className="list-none px-2 md:pr-0 md:pl-5">
                    <h1 className=" text-yellow-50 font-semibold">PRODUCTS</h1>
                    <div className="text-sm py-3 leading-8 text-gray-300">
                        <li>Flexi seat</li>
                        <li>Coworking space</li>
                        <li>Meeting room</li>
                        <li>Private office</li>
                        <li>Training Room</li>
                        <li>Customised office</li>
                    </div>
                </div>
                <div className="list-none px-2 md:pr-0 md:pl-5">
                    <h1 className=" text-yellow-50 font-semibold">LOCATIONS</h1>
                    <div className="text-sm py-3 leading-8 text-gray-300">
                        <li>Delhi NCR</li>
                        <li>Bangalore</li>
                        <li>Hyderabad</li>
                        <li>Pune</li>
                        <li>Mumbai</li>
                        <li>Lucknow</li>
                    </div>
                </div>
            </div>
            <div className="px-2 md:pr-5 md:pl-5 max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
                <button onClick={() => setShow(!show)} className="text-yellow-50 font-semibold rounded-md border border-slate-300 px-4 py-2">View More</button>
                {show &&
                    <Tab.Group>
                        <Tab.List className='flex flex-wrap justify-between space-x-1 py-1 rounded-lg bg-gray-700 text-gray-300 mt-3'>
                            {Object.keys(categories).map((category) => (
                                <Tab key={category} className={({ selected }) => classNames(
                                    'rounded-md py-2 px-4',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-700 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-gray-300 text-gray-700 shadow'
                                        : ' hover:bg-white/[0.12]'
                                )}>
                                    {startCase(category)}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                            {Object.values(categories).map((links, idx) => (
                                <Tab.Panel
                                    key={idx}
                                    className={classNames(
                                        'rounded-md shadow-md bg-gray-300 p-3',
                                    )}
                                >
                                    <ul className='grid md:grid-cols-2 lg:grid-cols-4 gap-2 text-sm'>
                                        {links.map((link) => (
                                            <li>{link}</li>
                                        ))}
                                    </ul>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                }

            </div>
        </div>
    )
}

export default Footer
