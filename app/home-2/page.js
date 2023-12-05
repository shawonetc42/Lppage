import Agency from '@/components/2/Agency'
import Footer from '@/components/2/Footer'
import Header2 from '@/components/2/Header'
import LatestBlog from '@/components/2/LatestBlog'
import Portfolio from '@/components/2/Portfolio'
import Service from '@/components/2/Service'
import TeamMember from '@/components/2/TeamMember'
import WeWork from '@/components/2/WeWork'
import Work from '@/components/2/Work'
import React from 'react'

function page() {
  return (
    <div>
        <Header2/>
        <Agency/>
        <Service/>
        <Work/>
        <Portfolio/>
        <WeWork/>
        <TeamMember/>
        <LatestBlog/>
        <Footer/>
    </div>
  )
}

export default page