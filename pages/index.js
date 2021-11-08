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
  return (
    <div className="bg-gray-50 font-Sora">
     <Head>
        <title>Smartdaftar</title>
        <link rel="Logo Icon" type="image/png" href="/favicon.png" />
        <meta name="title" property="og:title" content="Coworking Space for Rent | Office Space for Rent - Smartdaftar" />
        <meta name="Description" content="Smartdaftar empowers you to choose from a vast variety of office services. Flexi 
          seat, Day Pass, Private Cabins, Manager/Executive Cabin, Meeting Rooms, Conference Room, Board Room, Training Room, Virtual Office PAN India." />
        <meta
          name="image"
          property="og:image"
          content="/metaimage.jpg"
        />
      </Head>
      <Header/>
      <Hero/>
      <GetStarted/>
      <Cities/>
      <WhyTrust/>
      <Products/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}
