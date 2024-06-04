import React from 'react';
import { FaFacebookF , FaLinkedinIn , FaInstagram } from 'react-icons/fa';
import Container from './Container';
import Flex from './Flex';
import { Link } from 'react-router-dom';


const Footerlast = () => {
  return (
   <>
   <div className='bg-[#F5F5F3] pt-4 w-full pb-4'>
    <Container>
        <Flex className="flex gap-x-5">
           <Link to="#">
           <div className='w-[5%]'>
                <FaFacebookF/>
            </div>
           </Link> 
           <Link to="#">
           <div className='w-[5%]'>
                <FaLinkedinIn/>
            </div>
           </Link>
            <Link to="#">
            <div className='w-[5%]'>
                <FaInstagram/>
            </div>
            </Link>
            <div className='lg:w-[85%] sm:max-md:w-[20%] lg:ml-[850px] sm:max-md:ml-[400px] md:ml-[200px]'>
            <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>
        </Flex>
       
    </Container>
   </div>
   </>
  )
}

export default Footerlast;