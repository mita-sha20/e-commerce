import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";;

const Leftitem = (props) => {
    let[drop,setdrop] = useState(props.subdropdown);
    let [show,setshow] = useState(false);

  return (
    <>
       <div>
    {
        drop 
        ? 
        <div onClick={()=> setshow(!show)} 
        className='flex items-center justify-between cursor-pointer border-b border-solid border-[#767676] py-5'>
         <h3 className='font-dm font-normal text-base cursor-pointer text-[#767676]'>{
          props.color && <span className='inline-block rounded-full mr-2 w-[11px] h-[11px]' style={{background:props.color}}></span>
         }
          {props.title}</h3> 
         <FaPlus className='text-[#767676]' /> 
        </div> 
        :   <div
        className='flex items-center justify-between cursor-pointer border-b border-solid border-[#767676] py-5'>
         <h3 className='font-dm font-normal text-base cursor-pointer text-[#767676]'>{
          props.color && <span className='inline-block rounded-full mr-2 w-[11px] h-[11px]' style={{background:props.color}}></span>
         }
          {props.title}</h3> 
        
        </div> 
    }

    {
        show && (
            <div>
           {props.children}
            </div>
        )
    }
   
   </div>
    </>
  )
}

export default Leftitem;
