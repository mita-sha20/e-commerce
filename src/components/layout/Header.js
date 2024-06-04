import React, { useEffect, useRef, useState } from 'react'
import Container from './Container';
import Flex from './Flex';
import Dropdown from './Dropdown';
import { FaBars,FaUser,FaShoppingCart } from 'react-icons/fa';
import List from './List';
import Listitem from './Listitem';
import Search from './Search';
import { IoSearch } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";
import Image from './Image';
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

const Header = () => {

    let [categoryshow,setcategoryshow] = useState(false);
    let [usershow, setusershow] = useState(false);
    let [cartdrop, setcartdrop] = useState(false);
    let categoryref = useRef();
    let userref = useRef();
    let cartref = useRef();

    useEffect(()=>{
     document.body.addEventListener("click",(e)=>{
       if(
        categoryref.current.contains(e.target)
       ){
        setcategoryshow(true)
       }else{
        setcategoryshow(false)
       }


       if(
        userref.current.contains(e.target)
       ){
        setusershow(true)
       }else{
        setusershow(false)
       }


       if(
        cartref.current.contains(e.target)
       ){
        setcartdrop(true)
       }else{
        setcartdrop(false)
       }
     });
    },[])
    // let handleDropdown=()=>{
    //   setShow(!show);
    // }
  return (
   <>
   <div className='bg-[#F3F3F3] py-3'> 
   <Container>
    <Flex className='flex justify-between'>
       <div className='flex items-center'>
        <Dropdown className="relative z-50"
        // onClick={handleDropdown} 
        dropref={categoryref}>
            <p className='flex items-center gap-x-2.5'>
            <FaBars/><span className='hidden lg:inline-block'>Shop By Category</span> 
            </p>
            {
                categoryshow && (
<List className='absolute top-8 w-[263px] bg-Primary text-[#767676]'>
                <Listitem className="py-4 px-5 hover:px-7 border-b border-[#2D2D2D] hover:text-white" itemname="Accesories"></Listitem>
                <Listitem className="py-4 px-5 hover:px-7 border-b border-[#2D2D2D] hover:text-white" itemname="Furniture"></Listitem>
                <Listitem className="py-4 px-5 hover:px-7 border-b border-[#2D2D2D] hover:text-white" itemname="Electronics"></Listitem>
                <Listitem className="py-4 px-5 hover:px-7 border-b border-[#2D2D2D] hover:text-white" itemname="Clothes"></Listitem>
                <Listitem className="py-4 px-5 hover:px-7 border-b border-[#2D2D2D] hover:text-white" itemname="Bags"></Listitem>
                <Listitem className="py-4 px-5 hover:px-7 border-b border-[#2D2D2D] hover:text-white" itemname="Home appliances"></Listitem>
            </List>
                )
            }
            
        </Dropdown>
       </div>
       <div className='lg:w-[600px] w-auto relative'>
            <Search className="w-full py-3 px-5 placeholder:text-[#c4c4c4]" placeholder="search product"/>
            <IoSearch className='absolute top-4 right-4'/>
       </div>
       <div className='flex items-center'>
         <Flex className="flex gap-x-9">
          <Dropdown className="relative z-50" dropref={userref}>
          <div className='flex items-center'>
           <FaUser /><GoTriangleDown />
           </div>


           {
                usershow && (
<List className='absolute top-8 right-0 w-[200px] bg-white text-[#767676] text-center border-solid border-[F0F0F0]'>
                <Listitem className="py-4 px-5 hover:px-7 border-b border-gray-300 hover:text-Primary bg-Primary hover:bg-white" itemname="My Account"></Listitem>
                <Listitem className="py-4 px-5 hover:px-7 border-b hover:text-Primary bg-Primary hover:bg-white" itemname="Log Out"></Listitem>
               
            </List>
                )
            }
          </Dropdown>    
           <div>


           <Dropdown className="relative z-50" dropref={cartref}>
          <FaShoppingCart className='text-xl'/>
           {
               cartdrop && (
              <div className='w-[360px] absolute top-8 right-0 bg-gray-300 border-solid border-[#F0F0F0] border p-5'>
                  <div className='bg-gray-300 '>
                  <div>
                  <Flex className="flex gap-x-5 ">
                    <div>
                      <Image imgsrc="images/cart.png" alt="cart"/>
                    </div>
                    <div className='flex flex-col justify-center'>
                      <h3 className='font-dm font-bold text-lg text-Primary'>Black Smart Watch</h3>
                      <p className='mt-3 font-dm font-bold text-sm text-Primary'>$44</p>
                    </div>
                    <ImCross className='text-sm absolute right-3 top-6'/>
                  </Flex>
                  </div>
                </div>
                <div className='bg-white p-6'>
                   <h4 className='font-dm font-bold text-base text-[#767676]'>Subtotal: <span className='text-bold text-Primary'>$44.00</span> </h4>
                   <Flex className='flex'>
                   <Link className='font-dm font-bold text-sm text-black py-4 px-6
                   border border-solid inline-block border-Primary mt-3' to="#">View Cart</Link>
                     <Link className='font-dm font-bold text-sm text-white py-4 px-6
                   border border-solid inline-block border-Primary mt-3 ml-6 bg-Primary' to="#">Checkout</Link>
                   </Flex>
                </div>
              </div>
                
                )
            }
          </Dropdown>  
           </div>
         </Flex>
       </div>
    </Flex>
   </Container>
   </div>
   </>
  )
}

export default Header;
