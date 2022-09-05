import Link from 'next/link'
import React from 'react'

function ListProperty() {
    return (
        <section className="mt-10 w-11/12 max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 justify-center align-middle border border-gray-200 shadow rounded-md'>
                <div className='p-5 flex flex-col align-middle justify-center'>
                    <h2 className='text-2xl md:text-4xl text-red-400 font-bold pb-2'>Interested in being a host ?</h2>
                    <h5 className='font-semibold md:text-lg pb-2'>Make the most of your property by getting it listed with us.</h5>
                    <h5 className='font semibold text-sm md:text-base text-gray-600 pb-2'>Get verified leads from PAN India. Grow your business, expand your customer base and start earning more.</h5>
                    <img className='my-5 h-40 md:hidden' src='/listYourSpace.svg' />
                    <Link href='https://forms.gle/EYCFWFm9UM2nopTR6'>
                        <button className=' mt-5 py-2 font-bold bg-red-400 rounded-md md:w-1/2  hover:opacity-90 hover:scale-105 transition ease-in'>List your space</button>
                    </Link>
                </div>
                <div className='hidden md:flex justify-center px-2 py-5'>
                    <img className='md:h-60' src='/listYourSpace.svg' />
                </div>
            </div>
        </section>

    )
}

export default ListProperty