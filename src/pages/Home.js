import React from 'react'
import BannerSection from '../components/home/BannerSection'
import LeftRightSection from '../components/home/LeftRightSection'
import ContactUs from '../components/home/ContactUs'
import Services from '../components/home/Services'
import Portfolio from '../components/home/Portfolio'

export default function Home() {
  return (
    <div>
      <BannerSection />
      <LeftRightSection />
      <ContactUs />
      <Services />
      <Portfolio />
     
    </div>
  )
}
