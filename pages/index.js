import Head from 'next/head'
import About from '../components/About'
import Cities from '../components/Cities'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import GetStarted from '../components/GetStarted'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ListProperty from '../components/ListProperty'
import Products from '../components/Products'
import WhyTrust from '../components/WhyTrust'

import { motion } from 'framer-motion'
import { useRouter } from 'next/router'


export default function Home() {

    const router = useRouter()

    const options = [
        { value: 'newDelhi', label: 'New Delhi' },
        { value: 'lucknow', label: 'Lucknow' },
        { value: 'pune', label: 'Pune' },
        { value: 'mumbai', label: 'Mumbai' },
        { value: 'noida', label: 'Noida' },
        { value: 'bangalore', label: 'Bangalore' },
        { value: 'chennai', label: 'Chennai' },
        { value: 'hyderabad', label: 'Hyderabad' },
        { value: 'indore', label: 'Indore' },
    ]
    return (
        <motion.div key={router.route} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.75 }} className="bg-gray-50 font-Sora">
            <Head>
                <title>Coworking Space for Rent | Office Space for Rent - Smartdaftar</title>

                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

                <link rel="shortcut icon" href="/favicon.png"></link>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png"></link>
                <link rel='canonical' href='https://smartdaftar.com'></link>

                <meta name="title" property="title" content="Coworking Space for Rent | Office Space for Rent - Smartdaftar" />
                <meta name="og:title" property="og:title" content="Coworking Space for Rent | Office Space for Rent - Smartdaftar" />
                <meta name="twitter:title" property="twitter:title" content="Coworking Space for Rent | Office Space for Rent - Smartdaftar" />

                <meta name="og:type" content="website" property="og:type"></meta>

                <meta name="description" property='description' content="Smartdaftar empowers you to choose from a vast variety of office services. Flexi seat, Day Pass, Private Cabins, Manager/Executive Cabin, Meeting Rooms, Conference Room, Board Room, Training Room, Virtual Office PAN India." />
                <meta name="og:description" property='og:description' content="Smartdaftar empowers you to choose from a vast variety of office services. Flexi seat, Day Pass, Private Cabins, Manager/Executive Cabin, Meeting Rooms, Conference Room, Board Room, Training Room, Virtual Office PAN India." />
                <meta name="twitter:description" prefix='twitter:description' content="Smartdaftar empowers you to choose from a vast variety of office services. Flexi seat, Day Pass, Private Cabins, Manager/Executive Cabin, Meeting Rooms, Conference Room, Board Room, Training Room, Virtual Office PAN India." />

                <meta name='og:image' content="/metaimage.jpg" property='og:image'></meta>
                <meta name="twitter:image" content="/metaimage.jpg" property='twitter:image'></meta>
                <meta name="image" content="/metaimage.jpg" property="image" />

                <meta name="twitter:image:alt" content='Coworking Space for Rent | Office Space for Rent - Smartdaftar' property='twitter:image:alt'></meta>
                <meta name='og:image:alt' property="og:image:alt" content='Coworking Space for Rent | Office Space for Rent - Smartdaftar'></meta>
                <meta property="og:image:height" content="500"></meta>
                <meta property='og:url' name='og:url' content='https://smartdaftar.com' />
            </Head>
            <Header homePage={true} />
            <Hero />
            <GetStarted />
            <Cities />
            <WhyTrust />
            <Products />
            <About />
            <ListProperty />
            <Contact />
            <Footer />
        </motion.div>
    )
}
