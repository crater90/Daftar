function Products() {
    return (
        <section id="Products" className="mt-10 w-11/12 max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-700">Our Products</h1>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 px-5 md:px-0">
                <div className=" cursor-pointer hover:shadow-sm hover:scale-105 transition transform ease-out rounded-md">
                    <div className="bg-gray-100 rounded-md">
                        <img className="h-44 px-2 pb-2" src="/privateoffice.svg"/>
                    </div>
                    <div className="px-2 pb-2">
                        <h1 className="font-semibold text-xl py-2">Private Office</h1>
                        <p className="text-sm">Ready to move fully furnished private Spaces for teams or individual.</p>
                    </div>
                </div>
                <div className=" cursor-pointer hover:shadow-sm hover:scale-105 transition transform ease-out rounded-md">
                    <div className="bg-gray-100 rounded-md">
                        <img className="h-44 px-2 pb-2" src="/coworking.svg"/>
                    </div>
                    <div className="px-2 pb-2">
                        <h1 className="font-semibold text-xl py-2">Coworking Spaces</h1>
                        <p className="text-sm">Flexi and Dedicated Desks for instant plug and work requirements.</p>
                    </div>
                </div>
                <div className=" cursor-pointer hover:shadow-sm hover:scale-105 transition transform ease-out rounded-md">
                    <div className="bg-gray-100 rounded-md">
                        <img className="h-44 px-2 pb-2" src="/meeting.svg"/>
                    </div>
                    <div className="px-2 pb-2">
                        <h1 className="font-semibold text-xl py-2">Meeting Room</h1>
                        <p className="text-sm">Instant availability for Conference Room and Spaces for video shoots.</p>
                    </div>
                </div>
                <div className=" cursor-pointer hover:shadow-sm hover:scale-105 transition transform ease-out rounded-md">
                    <div className="bg-gray-100 rounded-md">
                        <img className="h-44 px-2 pb-2" src="/daypass.svg"/>
                    </div>
                    <div className="px-2 pb-2">
                        <h1 className="font-semibold text-xl py-2">Day Pass</h1>
                        <p className="text-sm">Book your Workspace anywhere PAN India and boost your productivity.</p>
                    </div>
                </div>
                <div className=" cursor-pointer hover:shadow-sm hover:scale-105 transition transform ease-out rounded-md">
                    <div className="bg-gray-100 rounded-md">
                        <img className="h-44 px-2 pb-2" src="/serviced.svg"/>
                    </div>
                    <div className="px-2 pb-2">
                        <h1 className="font-semibold text-xl py-2">Serviced Office</h1>
                        <p className="text-sm">100% Customized office space to match your organisation's requirement.</p>
                    </div>
                </div>
                <div className=" cursor-pointer hover:shadow-sm hover:scale-105 transition transform ease-out rounded-md">
                    <div className="bg-gray-100 rounded-md">
                        <img className="h-44 px-2 pb-2" src="/virtual.svg"/>
                    </div>
                    <div className="px-2 pb-2">
                        <h1 className="font-semibold text-xl py-2">Virtual Office</h1>
                        <p className="text-sm">Reach your customers anywhere in India by getting an address for your business.</p>
                    </div>
                </div>
            </div>
            
            
        </section>
    )
}

export default Products
