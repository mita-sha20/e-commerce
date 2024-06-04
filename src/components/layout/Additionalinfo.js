import React from 'react'
import Container from './Container';
import Flex from './Flex';
import { PiNumberTwoBold } from "react-icons/pi";
import { FaCarSide } from "react-icons/fa6";
import { IoReloadSharp } from "react-icons/io5";
const Additionalinfo = () => {
  return (
   <>
   <div className='border border-solid boredr-[#f0f0f0] py-5 mt-[-6px]'>
   <Container>
     <Flex className='flex justify-between'>
       <div>
        <Flex className="flex md:gap-x-4 items-center gap-x-1">
        <PiNumberTwoBold className='text-[10px] md:text-3xl'/>
       <p className='font-dm font-sm lg:text-base text-[#6d6d6d] text-[10px]'>Two years warranty</p>
        </Flex>
       </div>
       <div>
        <Flex className="flex md:gap-x-4 items-center gap-x-1">
        <FaCarSide  className='text-[10px] md:text-3xl'/>
       <p className='font-dm font-sm lg:text-base text-[#6d6d6d] text-[10px]'>Free shipping</p>
        </Flex>
       </div>
       <div>
        <Flex className="flex md:gap-x-4 items-center gap-x-1">
        <IoReloadSharp className='text-[10px] md:text-3xl'/>
       <p className='font-dm font-sm lg:text-base text-[#6d6d6d] text-[10px]'>Return policy in 30 days</p>
        </Flex>
       </div>
     </Flex>
   </Container>
   </div>
   </>
  )
}

export default Additionalinfo;
