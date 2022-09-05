function GetStarted() {
    return (
        <section className="py-10 bg-gradient-to-br from-slate-100 to-slate-200">
            <div className="w-11/12 max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
                <h2 className="text-3xl text-gray-700 font-extrabold">Your Office space search made easy.</h2>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-4">
                    <div className="flex md:flex-col space-x-5 md:space-x-0 items-center md:items-start rounded-md border shadow border-gray-200 bg-white p-5">
                        <img className="w-28 md:w-32 h-28 md:h-32" src="/search.svg" />
                        <div>
                            <h1 className="mt-2 font-bold text-gray-700">Search</h1>
                            <p className="text-sm mt-2">search from 1000s of office spaces select what suits you best.</p>
                        </div>

                    </div>
                    <div className="flex md:flex-col space-x-5 md:space-x-0 items-center md:items-start rounded-md border shadow border-gray-200 bg-white p-5">
                        <img className="w-28 md:w-32 h-28 md:h-32" src="/experts.svg" />
                        <div>
                            <h1 className="mt-2 font-bold text-gray-700">Expert Assistance</h1>
                            <p className="text-sm py-3">get the expert advice from industry leaders on your project.</p>
                        </div>
                    </div>
                    <div className="flex md:flex-col space-x-5 md:space-x-0 items-center md:items-start rounded-md border shadow border-gray-200 bg-white p-5">
                        <img className="w-28 md:w-32 h-28 md:h-32" src="/visit.svg" />
                        <div>
                            <h1 className="mt-2 font-bold text-gray-700">Visit</h1>
                            <p className="text-sm py-3">get the field visit to finalise the space you were looking for.</p>
                        </div>
                    </div>
                    <div className="flex md:flex-col space-x-5 md:space-x-0 items-center md:items-start rounded-md border shadow border-gray-200 bg-white p-5">
                        <img className="w-28 md:w-32 h-28 md:h-32" src="/meeting.svg" />
                        <div>
                            <h1 className="mt-2 font-bold text-gray-700">Get Started</h1>
                            <p className="text-sm py-3">Move in to your new Office. We are here to assist you anytime.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default GetStarted
