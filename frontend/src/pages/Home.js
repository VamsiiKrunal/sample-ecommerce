import React from 'react'
import '../styles/home.css'
import CustomCarousel from '../components/CustomCarousel'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div className='home-main'>
        <div className='navbar'>
        <Navbar/>
        </div>
        <div className='courosel'>
    <CustomCarousel/>
        </div>
        <div className='categories'>
            <Categories/>
        </div>
        <div className='footer'>
    <Footer/>
        </div>

    </div>
  )
}

export default Home