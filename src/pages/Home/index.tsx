import React from 'react'
import CakeDetails from './components/CakeDetails'
import Connect from './components/Connect'
import Footer from './components/Footer'
import Hero from './components/Hero'
import LearnMore from './components/LearnMore'
import Navbar from './components/Navbar'
import Reward from './components/Reward'
import TopFarms from './components/TopFarms'
import Usedby from './components/Usedby'



function Home() {
  return (
    <>
      <Navbar />
      {/* <Reward /> */}
      <Hero />
      <Usedby />
      <LearnMore />
      <TopFarms />
      <CakeDetails />
      <Connect />
      <Footer />
    </>
  )
}

export default Home