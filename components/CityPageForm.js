import { useState, useEffect } from "react";

import { MailIcon, PhoneIcon } from "@heroicons/react/solid"

function CityPageForm({ triggerAnimate, city }) {
    const initialState = {
        name: "",
        email: "",
        phone: "",
        location: "",
        query: ""
    };

    const [form, setForm] = useState(initialState);
    const [shake, setShake] = useState(false)

    useEffect(() => {
        triggerAnimate.current = animate
    }, [])

    const animate = () => {
        setShake(true);
        setTimeout(() => setShake(false), 1000);
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value })
    }

    return (
        <div className="">
            <div className={`sticky top-20 py-4 px-6 bg-white font-Sora text-base border border-gray-200 rounded-md drop-shadow-md ${shake ? 'animate-shakeLeftRight' : ''}`}>
                <h1 className="text-xl font-semibold capitalize">Interested in Office spaces in {city}</h1>
                <p>Leave your details below</p>
                <form className="" method="post">
                    <div className="flex flex-col mt-2">
                        <label className="font-semibold text-gray-500" htmlFor="name">Name</label>
                        <input required className="p-1 border-2 rounded border-gray-200 focus:outline-none focus:border-gray-700" type="text" name="name" />
                    </div>
                    <div className="flex flex-col mt-2 ">
                        <label className="font-semibold text-gray-500" htmlFor="mobile">Mobile no</label>
                        <input required className="p-1 border-2 rounded border-gray-200 focus:outline-none focus:border-gray-700" type="tel" maxLength={10} name="mobile" />
                    </div>
                    <div className="flex flex-col mt-2 ">
                        <label className="font-semibold text-gray-500" htmlFor="name">Email</label>
                        <input required className="p-1 border-2 rounded border-gray-200 focus:outline-none focus:border-gray-700" type="email" name="email" />
                    </div>
                    <button type="submit" className="mt-4 border-2 rounded w-full px-4 py-2 hover:bg-gray-600 hover:border-gray-600 hover:text-white">Request a callback</button>
                    <div className="my-4 border-b"></div>

                    <div className="mt-4">
                        <p className="text-xl font-semibold my-2">Call our experts</p>
                        <span className="text-gray-600 cursor-pointer"><PhoneIcon className="h-5 w-5 inline mr-2" />7983069435</span>
                        <p className="text-gray-600 mt-2 cursor-pointer"><MailIcon className="h5 w-5 inline mr-2" />info@smartdaftar.com</p>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default CityPageForm