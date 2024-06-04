import React from 'react'
import Banner from '../components/layout/Banner'
import Additionalinfo from '../components/layout/Additionalinfo';
import Advertise from '../components/layout/Advertise';
import Newarrival from '../components/layout/Newarrival';
import Bestseller from '../components/layout/Bestseller';
import Middleadvertise from '../components/layout/Middleadvertise';
import Offer from '../components/layout/Offer';


const Home = () => {
  return (
    <>
    <Banner/>
    <Additionalinfo/>
    <Advertise/>
    <Newarrival/>
    <Bestseller/>
    <Middleadvertise/>
    <Offer/>
    
    </>
  )
}

export default Home;
