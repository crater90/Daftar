
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";
import Loading from "../components/Loading";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {

    return (
        <RecoilRoot>
            <AnimatePresence exitBeforeEnter>
                <TawkMessengerReact
                    propertyId="62517f717b967b117989936c"
                    widgetId="1g075jlm1" />
                <Toaster />
                <Loading />
                <Component {...pageProps} />
            </AnimatePresence>
        </RecoilRoot>
    )
}

export default MyApp
