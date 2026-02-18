import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Donor from '../components/Donor'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
        <Header/>
        <SpecialityMenu/>
        <TopDoctors/>
        <Donor/>
        <Banner/>
    </div>
  )
}

export default Home