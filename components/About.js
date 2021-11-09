function About() {
    return (
        <section id="About us" className="mt-10 w-11/12 max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
            <h1 className="text-3xl font-extrabold text-gray-700">About Us</h1>
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex flex-col justify-evenly gap-y-4">
                    <p className="font-Roboto tracking-wide">Smartdaftar is the premium coworking aggregator & smartest tech-enabled platform for today’s workforce to search, sort and book a flexible & managed workspace solution.</p>
                    <p className="font-Roboto tracking-wide">We offer enterprise managed workspaces that are tech-enabled, convenient, and designed keeping in mind your brand's needs. Our customised offices foster the perfect work environment to scale your business.</p>
                    <p className="font-Roboto tracking-wide hidden md:flex">Our impaneled office space provider’s network of fully serviced & managed offices, empowers you to choose from a vast variety of office services range - Flexi seat, Day Pass, Private Cabins, Manager/Executive Cabin, Meeting Rooms, Conference Room, Board Room, Training Room, Virtual Office PAN India.</p>
                    <div className="p-4 grid grid-cols-2 gap-4">
                        <div className="bg-gray-100">
                            <h1 className="text-3xl text-gray-700 font-extrabold">1.</h1>
                            <h1 className="py-2 text-xl text-gray-700 font-bold">PAN India presence</h1>
                            <p className=" font-Roboto tracking-wide">We have a vast network of coworking spaces across PAN India.</p>
                        </div>
                        <div className="bg-gray-100">
                            <h1 className="text-3xl text-gray-700 font-extrabold">2.</h1>
                            <h1 className="py-2 text-xl text-gray-700 font-bold">Zero Brokerage</h1>
                            <p className=" font-Roboto tracking-wide">We charge zero brokerage fee while assisting you to find the best office space.</p>
                        </div>
                        <div className="bg-gray-100">
                            <h1 className="text-3xl text-gray-700 font-extrabold">3.</h1>
                            <h1 className="py-2 text-xl text-gray-700 font-bold">No Capex Involved</h1>
                            <p className=" font-Roboto tracking-wide">Find ready to move in offices so that you need not incur overhead charges.</p>
                        </div>
                        <div className="bg-gray-100">
                            <h1 className="text-3xl text-gray-700 font-extrabold">4.</h1>
                            <h1 className="py-2 text-xl text-gray-700 font-bold">Flexibilty</h1>
                            <p className=" font-Roboto tracking-wide">With a variety of options to choose from, one gets full customized experience.</p>
                        </div>
                        
                    </div>
                </div>
                <div className=""><img src="/about.jpg" alt="About us"/></div>
            </div>         
        </section>
    )
}

export default About
