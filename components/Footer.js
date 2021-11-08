import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa"

function Footer() {
    return (
        <div className="bg-gray-700 mt-10">
            <div className="py-10 max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4">
            <div className="flex flex-col pl-5">
                <h1 className="text-4xl font-bold text-yellow-50">Smartdaftar</h1>
                <p className="pt-5 text-sm text-yellow-50">Copyright 2021.</p>
                <p className="text-sm text-yellow-50">All rights reserved.</p>
                <h4 className="pt-5 text-sm text-yellow-50">Follow us on :</h4>
                <div className="flex mt-2 gap-x-3 mb-3">
                    <a className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-500 text-yellow-50 cursor-pointer hover:bg-gray-100 hover:text-red-400"><FaFacebookF className="h-5"/></a>
                    <a className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-500 text-yellow-50 cursor-pointer hover:bg-gray-100 hover:text-red-400"><FaInstagram className="h-5"/></a>
                    <a className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-500 text-yellow-50 cursor-pointer hover:bg-gray-100 hover:text-red-400"><FaLinkedinIn className="h-5"/></a>
                    <a className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-500 text-yellow-50 cursor-pointer hover:bg-gray-100 hover:text-red-400"><FaTwitter className="h-5"/></a>              
                </div>
            </div>
            <div className="list-none pl-5">
                <h1 className=" text-yellow-50 font-semibold">COMPANY</h1>
                <div className="text-sm py-3 leading-8 text-gray-300">
                    <li>About us</li>
                    <li>Post your requirements</li>
                    <li>list your space</li>
                    <li>Blogs</li>
                    <li>Refer and earn</li>
                    <li>Terms and conditions</li>
                </div>
            </div>
            <div className="list-none pl-5">
                <h1 className=" text-yellow-50 font-semibold">PRODUCTS</h1>
                <div className="text-sm py-3 leading-8 text-gray-300">
                    <li>Flexi seat</li>
                    <li>Coworking space</li>
                    <li>Meeting room</li>
                    <li>Private office</li>
                    <li>Training Room</li>
                    <li>Customised office</li>
                </div>            
            </div>
            <div className="list-none pl-5">
                <h1 className=" text-yellow-50 font-semibold">LOCATIONS</h1>
                <div className="text-sm py-3 leading-8 text-gray-300"> 
                    <li>Delhi NCR</li>
                    <li>Bangalore</li>
                    <li>Hyderabad</li>
                    <li>Pune</li>
                    <li>Mumbai</li>
                    <li>Lucknow</li>
                </div>
            </div>
            </div>     
        </div>
    )
}

export default Footer
