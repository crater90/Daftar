import Head from 'next/head'
import About from '../components/About'
import Cities from '../components/Cities'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import GetStarted from '../components/GetStarted'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Products from '../components/Products'
import WhyTrust from '../components/WhyTrust'


export default function Home() {

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
        <div className="bg-gray-50 font-Sora">
            <Head>
                <title>Smartdaftar</title>
                <link rel="Logo Icon" type="image/png" href="/favicon.png" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="title" property="og:title" content="Coworking Space for Rent | Office Space for Rent - Smartdaftar" />
                <meta name="Description" content="Smartdaftar empowers you to choose from a vast variety of office services. Flexi 
          seat, Day Pass, Private Cabins, Manager/Executive Cabin, Meeting Rooms, Conference Room, Board Room, Training Room, Virtual Office PAN India." />
                <meta
                    name="image"
                    property="og:image"
                    content="/metaimage.jpg"
                />
            </Head>
            <Header homePage={true} />
            <Hero />
            <GetStarted />
            <Cities />
            <WhyTrust />
            <Products />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}
