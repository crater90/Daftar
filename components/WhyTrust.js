import { BadgeCheckIcon, UserGroupIcon, LocationMarkerIcon, OfficeBuildingIcon } from "@heroicons/react/outline"

function WhyTrust() {
    return (
        <div className="mt-10 w-11/12 max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto bg-gray-50">
            <h1 className="text-gray-700 font-extrabold text-3xl">Why trust us ?</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
                <div className="flex flex-col justify-evenly">
                    <div className="flex mt-5 text-gray-600 gap-x-4 font-medium">
                        <OfficeBuildingIcon className="trustUsIcons"/><span>Browse 1,000s of spaces worldwide</span>
                    </div>
                    <div className="flex mt-5 text-gray-600 gap-x-4 font-medium">
                        <UserGroupIcon className="trustUsIcons"/><span>Free advisory service</span>
                    </div>
                    <div className="flex mt-5 text-gray-600 gap-x-4 font-medium">
                         <LocationMarkerIcon className="trustUsIcons"/><span>Local experts that know the market better than anyone</span>
                    </div>
                    <div className="flex mt-5 text-gray-600 gap-x-4 font-medium">
                        <BadgeCheckIcon className="trustUsIcons"/><span>Our market insight and data means we negotiate you the best deal</span>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <img className="rounded-md h-80 hover:opacity-90 cursor-pointer" src="/Whyus.jpg"/>
                </div>
            </div>          
        </div>
    )
}

export default WhyTrust