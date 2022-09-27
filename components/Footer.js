import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { useState } from "react"
import { Tab } from '@headlessui/react'
import { kebabCase, startCase } from "lodash"
import Link from 'next/link'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Footer() {
    const [show, setShow] = useState(false)
    const [categories] = useState({
        privateOffice: [
            {
                pid: 'Private Office',
                city: 'Ahmedabad'
            },
            {
                pid: 'Private Office',
                city: 'Bangalore'
            },
            {
                pid: 'Private Office',
                city: 'Chennai'
            },
            {
                pid: 'Private Office',
                city: 'Chandigarh'
            },
            {
                pid: 'Private Office',
                city: 'Coimbatore'
            },
            {
                pid: 'Private Office',
                city: 'Gurgaon'
            },
            {
                pid: 'Private Office',
                city: 'Goa'
            },
            {
                pid: 'Private Office',
                city: 'Hyderabad'
            },
            {
                pid: 'Private Office',
                city: 'Indore'
            },
            {
                pid: 'Private Office',
                city: 'Jaipur'
            },
            {
                pid: 'Private Office',
                city: 'Kanpur'
            },
            {
                pid: 'Private Office',
                city: 'Kolkata'
            },
            {
                pid: 'Private Office',
                city: 'Kochi'
            },
            {
                pid: 'Private Office',
                city: 'Lucknow'
            },
            {
                pid: 'Private Office',
                city: 'Mumbai'
            },
            {
                pid: 'Private Office',
                city: 'New Delhi'
            },
            {
                pid: 'Private Office',
                city: 'Noida'
            },
            {
                pid: 'Private Office',
                city: 'Nagpur'
            },
            {
                pid: 'Private Office',
                city: 'Patna'
            },
            {
                pid: 'Private Office',
                city: 'Pune'
            },
            {
                pid: 'Private Office',
                city: 'Ranchi'
            },
            {
                pid: 'Private Office',
                city: 'Surat'
            },
            {
                pid: 'Private Office',
                city: 'Vadodara'
            },
        ],
        coworkingSpace: [
            {
                pid: 'Coworking Space',
                city: 'Ahmedabad'
            },
            {
                pid: 'Coworking Space',
                city: 'Bangalore'
            },
            {
                pid: 'Coworking Space',
                city: 'Chennai'
            },
            {
                pid: 'Coworking Space',
                city: 'Chandigarh'
            },
            {
                pid: 'Coworking Space',
                city: 'Coimbatore'
            },
            {
                pid: 'Coworking Space',
                city: 'Gurgaon'
            },
            {
                pid: 'Coworking Space',
                city: 'Goa'
            },
            {
                pid: 'Coworking Space',
                city: 'Hyderabad'
            },
            {
                pid: 'Coworking Space',
                city: 'Indore'
            },
            {
                pid: 'Coworking Space',
                city: 'Jaipur'
            },
            {
                pid: 'Coworking Space',
                city: 'Kanpur'
            },
            {
                pid: 'Coworking Space',
                city: 'Kolkata'
            },
            {
                pid: 'Coworking Space',
                city: 'Kochi'
            },
            {
                pid: 'Coworking Space',
                city: 'Lucknow'
            },
            {
                pid: 'Coworking Space',
                city: 'Mumbai'
            },
            {
                pid: 'Coworking Space',
                city: 'New Delhi'
            },
            {
                pid: 'Coworking Space',
                city: 'Noida'
            },
            {
                pid: 'Coworking Space',
                city: 'Nagpur'
            },
            {
                pid: 'Coworking Space',
                city: 'Patna'
            },
            {
                pid: 'Coworking Space',
                city: 'Pune'
            },
            {
                pid: 'Coworking Space',
                city: 'Ranchi'
            },
            {
                pid: 'Coworking Space',
                city: 'Surat'
            },
            {
                pid: 'Coworking Space',
                city: 'Vadodara'
            },
        ],
        meetingRoom: [
            {
                pid: 'Meeting Room',
                city: 'Ahmedabad'
            },
            {
                pid: 'Meeting Room',
                city: 'Bangalore'
            },
            {
                pid: 'Meeting Room',
                city: 'Chennai'
            },
            {
                pid: 'Meeting Room',
                city: 'Chandigarh'
            },
            {
                pid: 'Meeting Room',
                city: 'Coimbatore'
            },
            {
                pid: 'Meeting Room',
                city: 'Gurgaon'
            },
            {
                pid: 'Meeting Room',
                city: 'Goa'
            },
            {
                pid: 'Meeting Room',
                city: 'Hyderabad'
            },
            {
                pid: 'Meeting Room',
                city: 'Indore'
            },
            {
                pid: 'Meeting Room',
                city: 'Jaipur'
            },
            {
                pid: 'Meeting Room',
                city: 'Kanpur'
            },
            {
                pid: 'Meeting Room',
                city: 'Kolkata'
            },
            {
                pid: 'Meeting Room',
                city: 'Kochi'
            },
            {
                pid: 'Meeting Room',
                city: 'Lucknow'
            },
            {
                pid: 'Meeting Room',
                city: 'Mumbai'
            },
            {
                pid: 'Meeting Room',
                city: 'New Delhi'
            },
            {
                pid: 'Meeting Room',
                city: 'Noida'
            },
            {
                pid: 'Meeting Room',
                city: 'Nagpur'
            },
            {
                pid: 'Meeting Room',
                city: 'Patna'
            },
            {
                pid: 'Meeting Room',
                city: 'Pune'
            },
            {
                pid: 'Meeting Room',
                city: 'Ranchi'
            },
            {
                pid: 'Meeting Room',
                city: 'Surat'
            },
            {
                pid: 'Meeting Room',
                city: 'Vadodara'
            },
        ],
        dayPass: [
            {
                pid: 'Day Pass',
                city: 'Ahmedabad'
            },
            {
                pid: 'Day Pass',
                city: 'Bangalore'
            },
            {
                pid: 'Day Pass',
                city: 'Chennai'
            },
            {
                pid: 'Day Pass',
                city: 'Chandigarh'
            },
            {
                pid: 'Day Pass',
                city: 'Coimbatore'
            },
            {
                pid: 'Day Pass',
                city: 'Gurgaon'
            },
            {
                pid: 'Day Pass',
                city: 'Goa'
            },
            {
                pid: 'Day Pass',
                city: 'Hyderabad'
            },
            {
                pid: 'Day Pass',
                city: 'Indore'
            },
            {
                pid: 'Day Pass',
                city: 'Jaipur'
            },
            {
                pid: 'Day Pass',
                city: 'Kanpur'
            },
            {
                pid: 'Day Pass',
                city: 'Kolkata'
            },
            {
                pid: 'Day Pass',
                city: 'Kochi'
            },
            {
                pid: 'Day Pass',
                city: 'Lucknow'
            },
            {
                pid: 'Day Pass',
                city: 'Mumbai'
            },
            {
                pid: 'Day Pass',
                city: 'New Delhi'
            },
            {
                pid: 'Day Pass',
                city: 'Noida'
            },
            {
                pid: 'Day Pass',
                city: 'Nagpur'
            },
            {
                pid: 'Day Pass',
                city: 'Patna'
            },
            {
                pid: 'Day Pass',
                city: 'Pune'
            },
            {
                pid: 'Day Pass',
                city: 'Ranchi'
            },
            {
                pid: 'Day Pass',
                city: 'Surat'
            },
            {
                pid: 'Day Pass',
                city: 'Vadodara'
            },
        ],
        commercialSpace: [
            {
                pid: 'Commercial Space',
                city: 'Ahmedabad'
            },
            {
                pid: 'Commercial Space',
                city: 'Bangalore'
            },
            {
                pid: 'Commercial Space',
                city: 'Chennai'
            },
            {
                pid: 'Commercial Space',
                city: 'Chandigarh'
            },
            {
                pid: 'Commercial Space',
                city: 'Coimbatore'
            },
            {
                pid: 'Commercial Space',
                city: 'Gurgaon'
            },
            {
                pid: 'Commercial Space',
                city: 'Goa'
            },
            {
                pid: 'Commercial Space',
                city: 'Hyderabad'
            },
            {
                pid: 'Commercial Space',
                city: 'Indore'
            },
            {
                pid: 'Commercial Space',
                city: 'Jaipur'
            },
            {
                pid: 'Commercial Space',
                city: 'Kanpur'
            },
            {
                pid: 'Commercial Space',
                city: 'Kolkata'
            },
            {
                pid: 'Commercial Space',
                city: 'Kochi'
            },
            {
                pid: 'Commercial Space',
                city: 'Lucknow'
            },
            {
                pid: 'Commercial Space',
                city: 'Mumbai'
            },
            {
                pid: 'Commercial Space',
                city: 'New Delhi'
            },
            {
                pid: 'Commercial Space',
                city: 'Noida'
            },
            {
                pid: 'Commercial Space',
                city: 'Nagpur'
            },
            {
                pid: 'Commercial Space',
                city: 'Patna'
            },
            {
                pid: 'Commercial Space',
                city: 'Pune'
            },
            {
                pid: 'Commercial Space',
                city: 'Ranchi'
            },
            {
                pid: 'Commercial Space',
                city: 'Surat'
            },
            {
                pid: 'Commercial Space',
                city: 'Vadodara'
            },
        ],
        virtualOffice: [
            {
                pid: 'Virtual Office',
                city: 'Ahmedabad'
            },
            {
                pid: 'Virtual Office',
                city: 'Bangalore'
            },
            {
                pid: 'Virtual Office',
                city: 'Chennai'
            },
            {
                pid: 'Virtual Office',
                city: 'Chandigarh'
            },
            {
                pid: 'Virtual Office',
                city: 'Coimbatore'
            },
            {
                pid: 'Virtual Office',
                city: 'Gurgaon'
            },
            {
                pid: 'Virtual Office',
                city: 'Goa'
            },
            {
                pid: 'Virtual Office',
                city: 'Hyderabad'
            },
            {
                pid: 'Virtual Office',
                city: 'Indore'
            },
            {
                pid: 'Virtual Office',
                city: 'Jaipur'
            },
            {
                pid: 'Virtual Office',
                city: 'Kanpur'
            },
            {
                pid: 'Virtual Office',
                city: 'Kolkata'
            },
            {
                pid: 'Virtual Office',
                city: 'Kochi'
            },
            {
                pid: 'Virtual Office',
                city: 'Lucknow'
            },
            {
                pid: 'Virtual Office',
                city: 'Mumbai'
            },
            {
                pid: 'Virtual Office',
                city: 'New Delhi'
            },
            {
                pid: 'Virtual Office',
                city: 'Noida'
            },
            {
                pid: 'Virtual Office',
                city: 'Nagpur'
            },
            {
                pid: 'Virtual Office',
                city: 'Patna'
            },
            {
                pid: 'Virtual Office',
                city: 'Pune'
            },
            {
                pid: 'Virtual Office',
                city: 'Ranchi'
            },
            {
                pid: 'Virtual Office',
                city: 'Surat'
            },
            {
                pid: 'Virtual Office',
                city: 'Vadodara'
            },
        ]
    })
    return (
        <footer className="bg-gray-700 mt-10 pb-8">
            <div className="pt-10 w-11/12 max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4">
                <div className="flex flex-col">
                    <h1 className="text-4xl font-extrabold font-Rubik text-yellow-50">smartdaftar</h1>
                    <p className="pt-5 text-sm text-yellow-50">Copyright © 2022.</p>
                    <p className="text-sm text-yellow-50">All rights reserved.</p>
                    <p className="pt-5 text-sm text-yellow-50">Follow us on :</p>
                    <div className="flex mt-2 gap-x-3 mb-3">
                        <a href="/" className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-500 text-yellow-50 cursor-pointer hover:bg-gray-100 hover:text-red-400"><FaFacebookF className="h-5" /></a>
                        <a href="/" className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-500 text-yellow-50 cursor-pointer hover:bg-gray-100 hover:text-red-400"><FaInstagram className="h-5" /></a>
                        <a href="/" className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-500 text-yellow-50 cursor-pointer hover:bg-gray-100 hover:text-red-400"><FaLinkedinIn className="h-5" /></a>
                        <a href="/" className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-500 text-yellow-50 cursor-pointer hover:bg-gray-100 hover:text-red-400"><FaTwitter className="h-5" /></a>
                    </div>
                </div>
                <div className="list-none">
                    <h1 className=" text-yellow-50 font-semibold">COMPANY</h1>
                    <div className="text-sm py-3 leading-8 text-gray-300">
                        <Link href='/#AboutUs'><li className='hover:underline underline-offset-1 cursor-pointer'>About us</li></Link>
                        <Link href='https://forms.gle/EYCFWFm9UM2nopTR6'><li className='hover:underline underline-offset-1 cursor-pointer'>List your space</li></Link>
                        <Link href='https://forms.gle/NcUS84HuFucFPU498'><li className='hover:underline underline-offset-1 cursor-pointer'>Careers</li></Link>
                        <Link href='https://forms.gle/UUFG4zkuGztyzZWE8'><li className='hover:underline underline-offset-1 cursor-pointer'>Refer and earn</li></Link>
                        <li>Terms and conditions</li>
                    </div>
                </div>
                <div className="list-none">
                    <h1 className=" text-yellow-50 font-semibold">PRODUCTS</h1>
                    <div className="text-sm py-3 leading-8 text-gray-300">
                        <Link href='/#Products'><li className='hover:underline underline-offset-1 cursor-pointer'>Coworking space</li></Link>
                        <Link href='/#Products'><li className='hover:underline underline-offset-1 cursor-pointer'>Private Office</li></Link>
                        <Link href='/#Products'><li className='hover:underline underline-offset-1 cursor-pointer'>Meeting room</li></Link>
                        <Link href='/#Products'><li className='hover:underline underline-offset-1 cursor-pointer'>Virtual Office</li></Link>
                        <Link href='/#Products'><li className='hover:underline underline-offset-1 cursor-pointer'>Commercial Spaces</li></Link>
                        <Link href='/#Products'><li className='hover:underline underline-offset-1 cursor-pointer'>Day Pass</li></Link>
                    </div>
                </div>
                <div className="list-none">
                    <h1 className=" text-yellow-50 font-semibold">LOCATIONS</h1>
                    <div className="text-sm py-3 leading-8 text-gray-300">
                        <Link href='/coworking-space/new-delhi'><li className='hover:underline underline-offset-1 cursor-pointer'>Delhi NCR</li></Link>
                        <Link href='/coworking-space/bangalore'><li className='hover:underline underline-offset-1 cursor-pointer'>Bangalore</li></Link>
                        <Link href='/coworking-space/hyderabad'><li className='hover:underline underline-offset-1 cursor-pointer'>Hyderabad</li></Link>
                        <Link href='/coworking-space/pune'><li className='hover:underline underline-offset-1 cursor-pointer'>Pune</li></Link>
                        <Link href='/coworking-space/mumbai'><li className='hover:underline underline-offset-1 cursor-pointer'>Mumbai</li></Link>
                        <Link href='/coworking-space/lucknow'><li className='hover:underline underline-offset-1 cursor-pointer'>Lucknow</li></Link>
                    </div>
                </div>
            </div>
            <div className="w-11/12 max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
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
                                            <Link href={`${kebabCase(link.pid)}/${kebabCase(link.city)}`}>
                                                <a target='_blank'>
                                                    <li>{link.pid} in {link.city}</li>
                                                </a>
                                            </Link>

                                        ))}
                                    </ul>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                }
            </div>
            <div className="mt-10 flex items-center justify-center text-gray-300 text-sm">
                Created by<span className="text-red-400 pl-1 underline underline-offset-4 font-semibold"><a target='_blank' href="https://twitter.com/crater90">crater90</a></span>
            </div>
        </footer>
    )
}

export default Footer
