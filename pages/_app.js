
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";
import Loading from "../components/Loading";

function MyApp({ Component, pageProps }) {
    return (
        <RecoilRoot>
            <Toaster />
            <Loading />
            <Component {...pageProps} />
        </RecoilRoot>
    )
}

export default MyApp
