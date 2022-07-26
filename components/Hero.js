import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SearchBox from './SearchBox';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { kebabCase, startCase } from 'lodash';



function Hero() {

    const [type, setType] = useState('coworking-space')
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter();

    const handleClick = (e) => {
        setType(kebabCase(e.target.innerText));
        setIsOpen(true)
        console.log(type);
    }

    return (
        <>
            <div className="relative">
                <Swiper className="-mt-14 h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]" autoplay loop>
                    <SwiperSlide>
                        <img className="h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full object-cover" src="/slide01.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full object-cover" src="/slide02.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className=" h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full object-cover" src="/slide03.jpg" />
                    </SwiperSlide>

                </Swiper>

                <div className="z-20 absolute top-1/2 md:w-1/2 origin-center transform md:translate-x-1/2">
                    <h1 className='m-2 rounded-md text-center font-bold text-yellow-50 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl backdrop-blur-sm'>Find your Perfect Office Space here!</h1>
                    <div className="relative px-2 sm:px-10 md:px-10 lg:px-0">
                        <SearchBox onChange={(e) => router.push(`coworking-space/${e.value}`)} />
                    </div>
                    <div className='mt-3 sm:mt-5 relative flex flex-wrap gap-2 lg:gap-4 justify-center opacity-90'>
                        <p onClick={handleClick} className="home-page-navigation-pills">Private Office</p>
                        <p onClick={handleClick} value="meetingRoom" className="home-page-navigation-pills">Meeting Room</p>
                        <p onClick={handleClick} className="home-page-navigation-pills">Coworking Spaces</p>
                        <p onClick={handleClick} className="home-page-navigation-pills">Day Pass</p>
                        <p onClick={handleClick} className="home-page-navigation-pills">Virtual Office</p>
                        <p onClick={handleClick} className="home-page-navigation-pills">Commercial Spaces</p>
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
                                        className="md:text-xl font-Roboto font-semibold text-gray-600"
                                    >
                                        Select a city for {startCase(type)}
                                    </Dialog.Title>
                                    <div className="mt-4">
                                        <SearchBox onChange={(e) => router.push(`${type}/${e.value}`)} />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Hero
