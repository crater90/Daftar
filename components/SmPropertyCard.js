import React from 'react'

import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import { kebabCase } from 'lodash'

import Link from 'next/link'

function SmPropertyCard({ propertyData }) {
    return (
        <div className='flex flex-col flex-none w-72'>
            <img className='object-cover h-48 w-full md:w-72 rounded-tl-lg rounded-tr-lg' src={propertyData?.photos[0]} />
            <div className='p-1 lg:p-3 font-Roboto border border-t-0 rounded-bl-lg rounded-br-lg bg-white border-slate-300 shadow-lg'>
                <p className='font-semibold'>{propertyData?.uniqueId}</p>
                <p className='font-semibold text-gray-600'>{propertyData.address.micromarket}, {propertyData.address.city}</p>
                <Link ta href={`/coworking-space/${encodeURIComponent(kebabCase(propertyData.address.city))}/${encodeURIComponent(kebabCase(propertyData.address.micromarket))}/${encodeURIComponent(propertyData.uniqueId)}`}>
                    <a target='_blank' className='flex align-middle space-x-3 cursor-pointer group'>
                        <p className='text-sm group-hover:underline underline-offset-1'>starts at <span className='inline font-semibold text-black'>₹ {propertyData.coworkingSpace.pricePerPerson}</span> /desk/month*</p>
                        <ArrowNarrowRightIcon className='h-5 w-5 text-gray-600 group-hover:scale-125 group-hover:translate-x-4' />
                    </a>
                </Link>
            </div>

        </div>
    )
}

export default SmPropertyCard