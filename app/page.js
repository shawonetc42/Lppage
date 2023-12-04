import Consultations from '@/components/1/Consultations'
import Footer from '@/components/1/Footer'
import Header from '@/components/1/Header'
import Hero from '@/components/1/Hero'
import LatestProject from '@/components/1/LatestProject'
import MeetTeam from '@/components/1/MeetTeam'
import OurServices from '@/components/1/OurServices'
import Slide from '@/components/1/Slide'
import Subscribe from '@/components/1/Subscribe'
import WhoWeAre from '@/components/1/WhoWeAre'
import Image from 'next/image'

export default function Home() {
  return (
   <div>
     <Header/>
     <Slide/>
     <Hero/>
     <OurServices/>
     <WhoWeAre/>
     <LatestProject/>
     <Consultations/>
     <MeetTeam/>
     <Subscribe/>
     <Footer/>
   </div>
  )
}
