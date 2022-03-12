import { useRouter } from "next/router";
import Header from "../components/Header";
import Properties from "../components/Properties";
import CityPageForm from "../components/CityPageForm";
import Footer from "../components/Footer";

function CityPage() {
    const router = useRouter();
    const { cities } = router.query
    return (
        <div>
            <div className="bg-gray-50 font-Sora h-screen overflow-y-scroll">
                <Header homePage={false} />
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:max-w-3xl lg:max-w-6xl mx-auto">
                    <div className="lg:col-span-3">
                        <Properties />
                    </div>
                    <div className="hidden lg:inline-grid lg:col-span-2">
                        <CityPageForm />
                    </div>
                </div>
                <Footer />
            </div>

        </div>
    )
}

export default CityPage