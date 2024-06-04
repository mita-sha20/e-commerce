import React from 'react'
import Container from './Container';
import Heading from './Heading';
import Flex from './Flex';
import Product from './Product';

const Bestseller = () => {
  return (
   <>
   <div className='md:mt-32 mt-5'>
    <Container>
        <Heading title="Our Bestsellers"/>
        <Flex className="sm:flex sm:max-lg:flex-wrap md:gap-x-10 sm:max-md:justify-between">
          <div className='md:max-lg:max-w-[345px] sm:max-w-[300px] lg:max-w-[370px]'>
           <Product src="images/p5.png" alt="p5" badge={false}/>
          </div>
          <div className='md:max-lg:max-w-[345px] sm:max-w-[300px] lg:max-w-[370px]'>
           <Product src="images/p6.png" alt="p6" badge={false}/>
          </div>
          <div className='md:max-lg:max-w-[345px] sm:max-w-[300px] lg:max-w-[370px]'>
           <Product src="images/p7.png" alt="p7" badge={false}/>
          </div>
          <div className='md:max-lg:max-w-[345px] sm:max-w-[300px] lg:max-w-[370px]'>
           <Product src="images/p8.png" alt="p8" badge={false}/>
          </div>
        </Flex>
    </Container>
   </div>
   </>
  )
}

export default Bestseller;
