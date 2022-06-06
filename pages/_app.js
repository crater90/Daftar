
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
    return (
        <RecoilRoot>
            <Toaster />
            <Component {...pageProps} />
        </RecoilRoot>
    )
}

export default MyApp
