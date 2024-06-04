import React, { useEffect, useState } from 'react'
import Container from '../components/layout/Container';
import Breadcrumb from '../components/layout/Breadcrumb';
import Flex from '../components/layout/Flex';
import Pagination from '../components/layout/Pagination';
import Leftsidebar from '../components/layout/Leftsidebar';
import { IoFilterCircle } from "react-icons/io5";
import { ImCross } from "react-icons/im";

// import { useParams } from 'react-router-dom';

const Shop = () => {

  let[shownumber,setshownumber] = useState(12);
  let [show,setShow] = useState(true);

  let handlePaginationChange = (e)=> {
    setshownumber(+e.target.value)
  };

  useEffect(()=>{
    function scrollWidth(){
     if(window.innerWidth < 575){
       setShow(false);
     }else{
       setShow(true);
     }
    }
 
    scrollWidth();
    window.addEventListener("resize",scrollWidth);
 },[])
    // const params = useParams();
  return (
    <>
    <div>
       <Container>
        <Breadcrumb title="Product" pathname=""/>
        <div>
            <Flex className='relative flex gap-x-10 mb-3.5'>
               {
                show && <div className='sm:w-[23%] w-full absolute top:0 left-0 sm:static z-50 sm:bg-transparent bg-white p-5'>
                <ImCross className='sm:hidden block' onClick={()=>setShow(!show)}/>
                  <Leftsidebar/>
                </div>
               }
               <div className='relative w-full md:w-[77%]'>

              <div className='flex gap-x-10'>
              <div className='flex items-end mb-4'>
               <IoFilterCircle onClick={()=>setShow(!show)} className='inline-block sm:hidden text-2xl text-[#767676]'/>
               </div>
              <div className='md:flex items-center gap-x-3 text-Primary'>
               <div className='inline-block font-dm font-normal text-base text-Primary'>Sort by:</div>
               <select id="countries" class="border border-[#F0F0F0] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block md:w-[240px] p-2.5">
              <option selected className='font-dm font-normal text-base'>Featured</option>
              <option className='font-dm font-normal text-base' value="US">United States</option>
              <option className='font-dm font-normal text-base' value="CA">Canada</option>
              <option className='font-dm font-normal text-base' value="FR">France</option>
              <option className='font-dm font-normal text-base' value="DE">Germany</option>
              </select>
               </div>

               <div className='md:flex items-center gap-x-3 text-Primary'>
               <div className='inline-block font-dm font-normal text-base text-Primary'>Show:</div>
               <select onChange={handlePaginationChange} id="countries" class="border border-[#F0F0F0] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block md:w-[140px] p-2.5">
              <option className='font-dm font-normal text-base' value='12'>12</option>
              <option className='font-dm font-normal text-base' value="24">24</option>
              <option className='font-dm font-normal text-base' value="36">36</option>
              <option className='font-dm font-normal text-base' value="48">48</option>
              <option className='font-dm font-normal text-base' value="60">60</option>
              </select>
               </div>
            
              </div>

                <Pagination itemsPerPage={shownumber}/>
              
               </div>
            </Flex>
        </div>
       </Container>
       
    </div>
    
    </>
  )
}

export default Shop;
