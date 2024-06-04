import React, { useEffect, useState } from 'react'
import Image from './Image';
import List from './List';
import Listitem from './Listitem';
import Flex from "./Flex";
import { FaBars } from 'react-icons/fa';
import Container from './Container';

const Navbar = () => {

    let [show,setShow] = useState(true)
    useEffect(()=>{
       function scrollWidth(){
        if(window.innerWidth < 1024){
          setShow(false);
        }else{
          setShow(true);
        }
       }
    
       scrollWidth();
       window.addEventListener("resize",scrollWidth);
    },[])

  return (
   <>
  <nav className='py-6'>
      <Container>
       <Flex className="lg:flex">
          <div className="lg:w-3/12">
            <Image imgsrc="images/logo.png" alt="logo"/>
          </div>

          <div className="lg:w-9/12 w-full">
          <FaBars onClick={()=>setShow(!show)} className="block lg:hidden ml-auto absolute top-2.5 right-2.5" />

          {
            show && (
              <List className="lg:flex lg:justify-end lg:gap-x-10 mt-5 lg:mt-0">
              <Listitem className='font-dm text-sm font-normal hover:font-bold my-2.5 lg:my-0' itemname="Home"/>
              <Listitem className='font-dm text-sm font-normal hover:font-bold my-2.5 lg:my-0' itemname="About"/>
              <Listitem className='font-dm text-sm font-normal hover:font-bold my-2.5 lg:my-0' itemname="Service"/>
              <Listitem className='font-dm text-sm font-normal hover:font-bold my-2.5 lg:my-0' itemname="Contacts"/>
              <Listitem className='font-dm text-sm font-normal hover:font-bold my-2.5 lg:my-0' itemname="Journal"/>
             </List>
            )
          }
           
          </div>
          </Flex>
      </Container>
    </nav>
   </>
  )
}

export default Navbar;
