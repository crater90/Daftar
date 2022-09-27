
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";
import Loading from "../components/Loading";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { AnimatePresence } from 'framer-motion'
import Script from 'next/script';

function MyApp({ Component, pageProps }) {

    return (
        <RecoilRoot>
            <AnimatePresence exitBeforeEnter>
                <TawkMessengerReact
                    propertyId="62517f717b967b117989936c"
                    widgetId="1g075jlm1" />
                <Toaster />
                <Loading />

                <Script
                    id="first-g-tag"
                    src={`https://www.googletagmanager.com/gtag/js?id=G-1XJR30330Y}}`}
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-1XJR30330Y');`}
                </Script>

                <Component {...pageProps} />
            </AnimatePresence>
        </RecoilRoot>
    )
}

export default MyApp
