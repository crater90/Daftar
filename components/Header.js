import { useState, useEffect } from "react"

import { PhoneIcon, MenuIcon, XIcon, SearchIcon } from "@heroicons/react/solid"

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
        <header className={navbar ? "bg-gray-700 bg-opacity-60 sticky top-0 glassNavbar" : "bg-transparent sticky top-0 glassNavbar"}>
            <div className="flex items-center justify-between md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto w-11/12 py-3">

                {homePage ? (
                    <div className="lg:inline-grid cursor-pointer text-2xl lg:text-3xl font-extrabold font-Rubik">
                        <a onClick={() => scroll.scrollToTop()} className="">smartdaftar</a>
                    </div>) : (
                    <div className="lg:inline-grid cursor-pointer text-2xl lg:text-3xl font-extrabold font-Rubik">
                        <Link href='/'><a className="">smartdaftar</a></Link>
                    </div>
                )}

                {/* react scroll used on homepage for sections */}
                {homePage && <div className="hidden lg:flex items-center justify-center text-sm gap-5 font-semibold">
                    <ScrollLink className="cursor-pointer" to="Products" smooth="true" duration={1000} offset={-80}>Services</ScrollLink>
                    <ScrollLink className="cursor-pointer" to="AboutUs" smooth="true" duration={1000} offset={-80}>About us</ScrollLink>
                    <ScrollLink className="cursor-pointer" to="ContactUs" smooth="true" duration={1000} offset={-80}>Contact us</ScrollLink>
                </div>}

                {/* search bar showing only from large screens */}
                {
                    !homePage &&
                    <div className="hidden lg:inline relative w-1/3 text-gray-600">
                        <SearchBox onChange={(e) => router.push({
                            pathname: '/[pid]/[cities]',
                            query: { pid: 'coworking-space', cities: `${e.value}` }
                        })} />
                    </div>
                }

                <div className=" flex items-center justify-end space-x-4">
                    <SearchIcon className='cursor-pointer h-5 w-5' />
                    <a href="tel:7983069435" className="hidden lg:inline-block">7983069435</a>
                    <a className="lg:hidden" href="tel:7983069435"><PhoneIcon className="lg:hidden h-5 w-5" /></a>

                    {/* toggling close and menu button on click state */}
                    {click ? (
                        <XIcon onClick={handleClick} className=" cursor-pointer lg:hidden h-5 w-5" />)
                        : (navbar &&
                            <MenuIcon onClick={handleClick} className="cursor-pointer lg:hidden h-5 w-5" />
                        )
                    }
                </div>
            </div>

            {/* hamburger menu on homepage */}
            {click && navbar && homePage && (
                <div className="navDropdown bg-gray-700 bg-opacity-60 glassNavbar min-h-screen gap-y-6 text-center">
                    <ScrollLink onClick={handleClick} className="cursor-pointer hover:bg-gray-700 w-full py-2" to="Products" smooth="true" duration={1000} offset={-80}>Services</ScrollLink>
                    <ScrollLink onClick={handleClick} className="cursor-pointer hover:bg-gray-700 w-full py-2" to="AboutUs" smooth="true" duration={1000} offset={-80}>About us</ScrollLink>
                    <ScrollLink onClick={handleClick} className="cursor-pointer hover:bg-gray-700 w-full py-2" to="ContactUs" smooth="true" duration={1000} offset={-80}>Contact us</ScrollLink>
                </div>
            )}

            {/* hamburger menu on other pages except homepage */}
            {click && navbar && !homePage && (
                <div className="navDropdown bg-gray-700 bg-opacity-60 glassNavbar min-h-screen gap-y-6 text-center">
                    <Link onClick={handleClick} className="cursor-pointer hover:bg-gray-700 w-full py-2" href='/#Products' >Services</Link>
                    <Link onClick={handleClick} className="cursor-pointer hover:bg-gray-700 w-full py-2" href='/#AboutUs' >About us</Link>
                    <Link onClick={handleClick} className="cursor-pointer hover:bg-gray-700 w-full py-2" href='/#ContactUs' >Contact us</Link>
                </div>
            )}
        </header>
    )
}

export default Header
