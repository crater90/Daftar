function Cities() {
    return (
        <div className="mt-10 w-11/12 max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto bg-gray-50">
            <h1 className="text-gray-700 font-extrabold text-3xl">Top Cities.</h1>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
                <div className="flex">
                    <img className="h-36 w-56 rounded-md" src="/Delhi.jpg"/>
                    <div className="flex flex-col justify-center px-5">
                        <h1 className="text-xl text-gray-800 font-bold">Delhi NCR</h1>
                        <p>50 spaces</p>
                    </div>
                </div>
                <div className="flex">
                    <img className="h-36 w-56 rounded-md" src="/Bangalore.jpg"/>
                    <div className="flex flex-col justify-center px-5">
                        <h1 className="text-xl text-gray-800 font-bold">Bangalore</h1>
                        <p>10 spaces</p>
                    </div>
                </div>
                <div className="flex">
                    <img className="h-36 w-56 rounded-md" src="/Hyderabad.jpg"/>
                    <div className="flex flex-col justify-center px-5">
                        <h1 className="text-xl text-gray-800 font-bold">Hyderabad</h1>
                        <p>20 spaces</p>
                    </div>
                </div>
                <div className="flex">
                    <img className="h-36 w-56 rounded-md" src="/Pune.jpg"/>
                    <div className="flex flex-col justify-center px-5">
                        <h1 className="text-xl text-gray-800 font-bold">Pune</h1>
                        <p>30 spaces</p>
                    </div>
                </div>
                <div className="flex">
                    <img className="h-36 w-56 rounded-md" src="/Mumbai.jpg"/>
                    <div className="flex flex-col justify-center px-5">
                        <h1 className="text-xl text-gray-800 font-bold">Mumbai</h1>
                        <p>30 spaces</p>
                    </div>
                </div>
                <div className="flex">
                    <img className="h-36 w-56 rounded-md" src="/Lucknow.jpg"/>
                    <div className="flex flex-col justify-center px-5">
                        <h1 className="text-xl text-gray-800 font-bold">Lucknow</h1>
                        <p>20 spaces</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Cities
