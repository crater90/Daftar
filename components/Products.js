import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { kebabCase, startCase } from 'lodash';
import SearchBox from './SearchBox';
import { useRouter } from 'next/router'

function Products() {
    const [type, setType] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter();
    return (
        <section id="Products" className="mt-10 py-5 bg-white">
            <div className='max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto w-11/12'>
                <h3 className="text-3xl font-bold text-gray-700">Our Products</h3>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 px-5 md:px-0">
                    <div
                        onClick={() => {
                            setType('private-office')
                            setIsOpen(true)
                        }}
                        className=" cursor-pointer hover:shadow hover:scale-105 transition transform ease-out rounded-md border border-slate-200"
                    >
                        <div className="bg-slate-100">
                            <img className="h-36 sm:h-44 px-2" src="/privateoffice.svg" />
                        </div>
                        <div className="p-5">
                            <h1 className="font-semibold text-xl pb-2">Private Office</h1>
                            <p className="text-sm">Ready to move fully furnished private Spaces for teams or individual.</p>
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            setType('coworking-space')
                            setIsOpen(true)
                        }}
                        className=" cursor-pointer hover:shadow-sm hover:scale-105 transition transform ease-out rounded-md border border-slate-200">
                        <div className="bg-slate-100">
                            <img className="h-36 sm:h-44 px-2" src="/coworking.svg" />
                        </div>
                        <div className="p-5">
                            <h1 className="font-semibold text-xl pb-2">Coworking Spaces</h1>
                            <p className="text-sm">Flexi and Dedicated Desks for instant plug and work requirements.</p>
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            setType('meeting-room')
                            setIsOpen(true)
                        }}
                        className=" cursor-pointer hover:shadow-sm hover:scale-105 transition transform ease-out rounded-md border border-slate-200">
                        <div className="bg-slate-100">
                            <img className="h-36 sm:h-44 px-2" src="/meeting.svg" />
                        </div>
                        <div className="p-5">
                            <h1 className="font-semibold text-xl pb-2">Meeting Room</h1>
                            <p className="text-sm">Instant availability for Conference Room and Spaces for video shoots.</p>
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            setType('day-pass')
                            setIsOpen(true)
                        }}
                        className=" cursor-pointer hover:shadow-sm hover:scale-105 transition transform ease-out rounded-md border border-slate-200">
                        <div className="bg-slate-100">
                            <img className="h-36 sm:h-44 px-2" src="/daypass.svg" />
                        </div>
                        <div className="p-5">
                            <h1 className="font-semibold text-xl pb-2">Day Pass</h1>
                            <p className="text-sm">Book your Workspace anywhere PAN India and boost your productivity.</p>
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            setType('commercial-space')
                            setIsOpen(true)
                        }}
                        className=" cursor-pointer hover:shadow-sm hover:scale-105 transition transform ease-out rounded-md border border-slate-200">
                        <div className="bg-slate-100">
                            <img className="h-36 sm:h-44 px-2" src="/serviced.svg" />
                        </div>
                        <div className="p-5">
                            <h1 className="font-semibold text-xl pb-2">Serviced Office</h1>
                            <p className="text-sm">100% Customized office space to match your organisation's requirement.</p>
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            setType('virtual-office')
                            setIsOpen(true)
                        }}
                        className=" cursor-pointer hover:shadow-sm hover:scale-105 transition transform ease-out rounded-md border border-slate-200">
                        <div className="bg-slate-100">
                            <img className="h-36 sm:h-44 px-2" src="/virtual.svg" />
                        </div>
                        <div className="p-5">
                            <h1 className="font-semibold text-xl pb-2">Virtual Office</h1>
                            <p className="text-sm">Reach your customers anywhere in India by getting an address for your business.</p>
                        </div>
                    </div>
                </div>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-30" onClose={() => setIsOpen(false)}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-75" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-2xl transform bg-white rounded-md p-4 lg:p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h2"
                                            className="text-sm sm:text-base md:text-xl font-Roboto font-semibold text-gray-600"
                                        >
                                            Select a city for {startCase(type)}
                                        </Dialog.Title>
                                        <div className="mt-4 font-semibold text-xs sm:text-sm md:text-base text-gray-600">
                                            <SearchBox onChange={(e) => router.push(`${type}/${e.value}`)} />
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </section>
    )
}

export default Products
