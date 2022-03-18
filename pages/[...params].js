import CityPageForm from "../components/CityPageForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Propdetails from "../components/Propdetails";

function propdetails() {
    return (
        <>
            <div className="bg-gray-50 font-Sora h-screen overflow-y-scroll">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:max-w-3xl lg:max-w-6xl mx-auto">
                <div className="lg:col-span-3">
                    <Propdetails />
                </div>
                <div className="hidden lg:inline-grid lg:col-span-2">
                    <CityPageForm />
                </div>
            </div>
            <Footer />
            </div>
        </>
    )
}
export default propdetails