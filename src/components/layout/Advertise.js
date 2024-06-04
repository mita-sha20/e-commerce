import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import { Link } from 'react-router-dom'

const Advertise = () => {
  return (
   <>
   <div className='md:mt-36 mt-10'>
   <Container>
    <Flex className="flex md:gap-x-10 gap-x-5">
        <div className='max-w-2/4'>
          <Link tp="#">
          <Image imgsrc="images/phone1.png" alt=""/>
          </Link>
        </div>
        <div className='max-w-2/4'>
        <Link to="#">
          <Image imgsrc="images/phone2.png" alt=""/>
          </Link>
          <Link to="#" className='mt-2 md:mt-10 inline-block'>
          <Image imgsrc="images/phone3.png" alt=""/>
          </Link>
        </div>
    </Flex>
   </Container>
   </div>
   </>
  )
}

export default Advertise;
