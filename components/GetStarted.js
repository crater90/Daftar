function GetStarted() {
    return (
        <div className="mt-10 w-11/12 max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto bg-gray-50">
            <h1 className="text-3xl text-gray-700 font-extrabold">Get Started.</h1>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-4">
                <div className="rounded-md shadow-md bg-white px-2 sm:p-5">
                    <img className="w-32 h-32" src="/search.svg"/>
                    <h1 className="mt-2 font-bold text-gray-700">Search</h1>
                    <p className="text-sm py-3">search from 1000s of office spaces select what suits you best.</p>
                </div>
                <div className="rounded-md shadow-md bg-white px-2 sm:p-5">
                    <img className="w-32 h-32" src="/experts.svg"/>
                    <h1 className="mt-2 font-bold text-gray-700">Expert Assistance</h1>
                    <p className="text-sm py-3">get the expert advice from industry leaders on your project.</p>
                </div>
                <div className="rounded-md shadow-md bg-white px-2 sm:p-5">
                    <img className="w-32 h-32" src="/visit.svg"/>
                    <h1 className="mt-2 font-bold text-gray-700">Visit</h1>
                    <p className="text-sm py-3">get the field visit to finalise the space you were looking for.</p>
                </div>
                <div className="rounded-md shadow-md bg-white px-2 sm:p-5">
                    <img className="w-32 h-32" src="/meeting.svg"/>
                    <h1 className="mt-2 font-bold text-gray-700">Get Started</h1>
                    <p className="text-sm py-3">Move in to your new Office. We are here to assist you anytime.</p>
                </div>
            </div>
            
        </div>
    )
}

export default GetStarted
