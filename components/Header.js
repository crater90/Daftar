import { useState, useEffect } from "react"

import { PhoneIcon, MenuIcon, XIcon, SearchIcon } from "@heroicons/react/outline"

import { Link as ScrollLink } from "react-scroll"
import { animateScroll as scroll } from "react-scroll"

import Link from 'next/link'
import SearchBox from "./SearchBox"
import { useRouter } from "next/router"


function Header({ homePage }) {

    const [navbar, setNavbar] = useState(true);
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const router = useRouter();

    useEffect(() => {
        const changeBg = () => {
            if (homePage) {
                if (window.scrollY >= 5) {
                    setNavbar(true);
                } else {
                    setNavbar(false);
                }
            }
        };
        window.addEventListener('scroll', changeBg);
        changeBg();

        return () => {
            window.removeEventListener('scroll', changeBg);
        }
    }, []);

    return (
        <>
            <div className={navbar ? "bg-gray-700 bg-opacity-60 sticky top-0 glassNavbar" : "bg-transparent sticky top-0 glassNavbar"}>
                <div className="flex items-center justify-between max-w-6xl mx-5 lg:mx-auto py-3">

                    {homePage ? (
                        <div className="lg:inline-grid cursor-pointer text-2xl">
                            <a onClick={() => scroll.scrollToTop()} className="font-bold">Smartdaftar</a>
                        </div>) : (
                        <div className="lg:inline-grid cursor-pointer text-2xl">
                            <Link href='/'><a className="font-bold">Smartdaftar</a></Link>
                        </div>
                    )}

                    {homePage && <div className="hidden lg:flex items-center justify-center text-sm gap-5 font-semibold">
                        <ScrollLink className="cursor-pointer" to="Products" smooth="true" duration={1000} offset={-80}>Services</ScrollLink>
                        <ScrollLink className="cursor-pointer" to="AboutUs" smooth="true" duration={1000} offset={-80}>About us</ScrollLink>
                        <ScrollLink className="cursor-pointer" to="Contact us" smooth="true" duration={1000} offset={-80}>Contact us</ScrollLink>
                    </div>}

                    {
                        !homePage &&
                        <div className="hidden lg:inline relative w-1/3 text-gray-600">
                            {/* <div className="absolute inset-y-0 right-0 pr-2 md:pr-4 flex items-center justify-end pointer-events-none">
                                <SearchIcon className="h-5 w-5 text-gray-900" />
                            </div>
                            <input onChange={(e) => setSearchQuery(e.target.value.toLowerCase())} className="focus:outline-none w-80 px-2 lg:pl-4 lg:pr-10 rounded-md opacity-70 py-2 text-gray-900" type="text" placeholder="Search" /> */}
                            {/* <SearchBox onChange={(e) => router.push(`/[pid]/[cities]`, `coworking-space/${e.value}`)} /> */}
                            <SearchBox onChange={(e) => router.push({
                                pathname: '/[pid]/[cities]',
                                query: { pid: 'coworking-space', cities: `${e.value}` }
                            })} />
                        </div>
                    }

                    <div className=" flex items-center justify-end space-x-4">
                        <a href="tel:7983069435" className="hidden lg:inline-block">7983069435</a>
                        <a className="lg:hidden" href="tel:7983069435"><PhoneIcon className="lg:hidden h-5 w-5" /></a>
                        {click ? (
                            <XIcon onClick={handleClick} className="lg:hidden h-5 w-5" />)
                            : (navbar &&
                                <MenuIcon onClick={handleClick} className="lg:hidden h-5 w-5" />
                            )
                        }
                    </div>
                </div>
                {click && navbar && (
                    <div className="navDropdown bg-gray-700 bg-opacity-60 glassNavbar min-h-screen gap-y-6 text-center">
                        <ScrollLink onClick={handleClick} className="cursor-pointer hover:bg-gray-700 w-full py-2" to="Products" smooth="true" duration={1000} offset={-80}>Services</ScrollLink>
                        <ScrollLink onClick={handleClick} className="cursor-pointer hover:bg-gray-700 w-full py-2" to="About us" smooth="true" duration={1000} offset={-80}>About us</ScrollLink>
                        <ScrollLink onClick={handleClick} className="cursor-pointer hover:bg-gray-700 w-full py-2" to="Contact us" smooth="true" duration={1000} offset={-80}>Contact us</ScrollLink>
                    </div>
                )}
            </div>
        </>
    )
}

export default Header
