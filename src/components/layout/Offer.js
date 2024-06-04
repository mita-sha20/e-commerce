import React from 'react'
import Container from './Container';
import Heading from './Heading';
import Flex from './Flex';
import Product from './Product';

const Offer = () => {
  return (
   <>
   <div className='md:mt-32 mt-5'>
    <Container>
        <Heading title="Special Offer"/>
        <Flex className="sm:flex sm:max-lg:flex-wrap md:gap-x-10 sm:max-md:justify-between">
          <div className='md:max-lg:max-w-[345px] sm:max-w-[300px] lg:max-w-[370px]'>
           <Product src="images/p9.png" alt="p9" badge={false}/>
          </div>
          <div className='md:max-lg:max-w-[345px] sm:max-w-[300px] lg:max-w-[370px]'>
           <Product src="images/p10.png" alt="p10" badge={false}/>
          </div>
          <div className='md:max-lg:max-w-[345px] sm:max-w-[300px] lg:max-w-[370px]'>
           <Product src="images/p11.png" alt="p11" badge={false}/>
          </div>
          <div className='md:max-lg:max-w-[345px] sm:max-w-[300px] lg:max-w-[370px]'>
           <Product src="images/p12.png" alt="p12" badge={false}/>
          </div>
        </Flex>
    </Container>
   </div>
   </>
  )
}

export default Offer;
