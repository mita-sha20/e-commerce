import React from 'react'
import Image from './Image'
import Badge from './Badge';
import Flex from './Flex';
import { FaHeart } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

const Product = ({src,badge}) => {
  return (
   <>
   <div>
  <div className='relative overflow-y-hidden group'>
  <Image className="w-full" imgsrc={src} alt="src"/>
    {badge && <Badge title="new"/>}
    <div className='absolute lg:max-xl:bottom-[-75%] bottom-[-44%]  left-0 h-40 w-full bg-white py-6 px-7 group-hover:bottom-0 transition-all duration-300 ease-in'>
    <div>
        <Flex className="flex md:gap-x-4 justify-end gap-x-1 items-center">
        <p className='font-dm font-sm lg:text-base text-[#6d6d6d] text-[10px] lg:max-xl:text-sm'>Add to wish list</p>
        <FaHeart className='text-base'/>
        </Flex>
       </div>
       <div>
        <Flex className="flex md:gap-x-4 justify-end gap-x-1 items-center my-5">
        <p className='font-dm font-sm lg:text-base text-[#6d6d6d] text-[10px] lg:max-xl:text-sm'>Compare</p>
        <IoReload className='text-base'/>
        </Flex>
       </div>
       <div>
        <Flex className="flex md:gap-x-4 justify-end gap-x-1 items-center">
        <p className='font-dm font-sm lg:text-base text-[#6d6d6d] text-[10px] lg:max-xl:text-sm'>Add to cart</p>
        <FaShoppingCart className='text-base'/>
        </Flex>
       </div>
    </div>
  </div>
  <div className='mb-10 md:mb-0'>
  <Flex className="flex justify-between items-center md:mt-6 mt-0">
  <h3 className='font-dm font-bold lg:max-xl:text-sm text-xl'>Basic Crew Neck Tee</h3>
  <p className='font-dm font-normal text-[#767676] text-base lg:max-xl:text-sm'>$44.00</p>
  </Flex>
  <p className='font-dm mt-1 font-normal text-[#767676] md:mt-3 lg:max-xl:text-sm text-xl'>Black</p>
  </div>
   </div>
   </>
  )
}

export default Product;
