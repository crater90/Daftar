import Link from 'next/link';

function Cities() {
    return (
        <div className="mt-10 w-11/12 max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto bg-gray-50">
            <h2 className="text-gray-700 font-extrabold text-3xl">Top cities for office space</h2>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4">
                <Link href="/newDelhi">
                    <div className="group flex">
                        <img className="h-36 w-48 group-hover:scale-95 transition ease-in duration-150 sm:w-56 object-cover rounded-md" src="/Delhi.jpg" />
                        <div className="flex flex-col cursor-pointer group-hover:underline group-hover:scale-105 transition ease-in duration-150 justify-center px-2 lg:px-5">
                            <h1 className="lg:text-xl text-gray-800 font-bold">Delhi NCR</h1>
                            <p>50 spaces</p>
                        </div>
                    </div>
                </Link>

                <Link href="/bangalore">
                    <div className="group flex">
                        <img className="h-36 w-48 sm:w-56 group-hover:scale-95 transition ease-in duration-150 object-cover rounded-md" src="/Bangalore.jpg" />
                        <div className="flex flex-col cursor-pointer group-hover:underline group-hover:scale-105 transition ease-in duration-150 justify-center px-2 lg:px-5">
                            <h1 className="lg:text-xl text-gray-800 font-bold">Bangalore</h1>
                            <p>10 spaces</p>
                        </div>
                    </div>
                </Link>

                <Link href="/hyderabad">
                    <div className="group flex">
                        <img className="h-36 w-48 sm:w-56 group-hover:scale-95 transition ease-in duration-150 object-cover rounded-md" src="/Hyderabad.jpg" />
                        <div className="flex flex-col cursor-pointer group-hover:underline group-hover:scale-105 transition ease-in duration-150 justify-center px-2 lg:px-5">
                            <h1 className="lg:text-xl text-gray-800 font-bold">Hyderabad</h1>
                            <p>20 spaces</p>
                        </div>
                    </div>
                </Link>

                <Link href="/pune">
                    <div className="group flex">
                        <img className="h-36 w-48 sm:w-56 group-hover:scale-95 transition ease-in duration-150 object-cover rounded-md" src="/Pune.jpg" />
                        <div className="flex flex-col cursor-pointer group-hover:underline group-hover:scale-105 transition ease-in duration-150 justify-center px-2 lg:px-5">
                            <h1 className="lg:text-xl text-gray-800 font-bold">Pune</h1>
                            <p>30 spaces</p>
                        </div>
                    </div>
                </Link>

                <Link href="/mumbai">
                    <div className="group flex">
                        <img className="h-36 w-48 sm:w-56 group-hover:scale-95 transition ease-in duration-150 object-cover rounded-md" src="/Mumbai.jpg" />
                        <div className="flex flex-col cursor-pointer group-hover:underline group-hover:scale-105 transition ease-in duration-150 justify-center px-2 lg:px-5">
                            <h1 className="lg:text-xl text-gray-800 font-bold">Mumbai</h1>
                            <p>30 spaces</p>
                        </div>
                    </div>
                </Link>

                <Link href="/lucknow">
                    <div className="group flex">
                        <img className="h-36 w-48 sm:w-56 group-hover:scale-95 transition ease-in duration-150 object-cover rounded-md" src="/Lucknow.jpg" />
                        <div className="flex flex-col cursor-pointer group-hover:underline group-hover:scale-105 transition ease-in duration-150 justify-center px-2 lg:px-5">
                            <h1 className="lg:text-xl text-gray-800 font-bold">Lucknow</h1>
                            <p>20 spaces</p>
                        </div>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Cities
