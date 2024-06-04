import React from 'react'
import Container from '../components/layout/Container';
import Breadcrumb from '../components/layout/Breadcrumb';
import Flex from '../components/layout/Flex';
import Image from '../components/layout/Image';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
    <div>
        <Container>
            <Breadcrumb />
            <Flex className="flex gap-x-10">
              <div className='w-2/4'>
              <Link>
              <Image imgsrc="images/about1.png" alt="about1" className="w-full "/>
              </Link>
              </div>
              <div className='w-2/4'>
                <Link>
                <Image imgsrc="images/about2.png" alt="about1" />
                </Link>
              </div>
            </Flex>
            <div className='lg:mt-32 lg:mb-28 sm:mt-10 sm:mb-10 '>
                <p className='font-normal font-dm lg:text-[39px]'>
                Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.
                </p>
            </div>
            <Flex className="lg:flex lg:justify-between ">
              <div className='lg:w-[32%]'>
                <h4 className=' font-dm font-bold text-2xl mb-3'>Our Vision</h4>
                <p className='text-base text-normal  font-dm text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>

              <div className='lg:w-[32%]'>
                <h4 className=' font-dm font-bold text-2xl mb-3'>Our Story</h4>
                <p className='text-base text-normal  font-dm text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>

              <div className='lg:w-[32%]'>
                <h4 className=' font-dm font-bold text-2xl mb-3'>Our Brands</h4>
                <p className='text-base text-normal  font-dm text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default About;
