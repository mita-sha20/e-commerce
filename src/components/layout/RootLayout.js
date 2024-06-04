import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Footerlast from './Footerlast';

const RootLayout = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Outlet/>
    <Footer/>
    <Footerlast/>
    </>
  )
}

export default RootLayout;
