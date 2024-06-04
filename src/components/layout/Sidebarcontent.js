import React, { useState } from 'react'
import { GoTriangleDown } from "react-icons/go";
import Flex from './Flex';
import Leftitem from './Leftitem';
import { category,colors,brands,price } from '../../data/data';

const Sidebarcontent = ({dropdown,droptitle,data}) => {
    let[drop,setdrop] = useState(dropdown);
    let [show,setshow] = useState(dropdown);

  return (
   <>
  <div className='mb-16'>
    {
        drop 
        ? 
        <div onClick={()=> setshow(!show)} 
        className='flex items-center justify-between cursor-pointer mb-9'>
         <h3 className='cursor-pointer font-dm font-bold text-xl'>{droptitle}</h3> 
         <GoTriangleDown /> 
        </div> 
        : <h3 className='font-dm font-bold text-xl cursor-pointer mb-9'>{droptitle}</h3> 
    }
   {show && 
   <>
    {data.map((item,index)=>(
        
        item.subcategory
        ? <Leftitem subdropdown={item.subcategory ? true : false} title={item.name} >
           {item.subcategory && 
item.subcategory.map((sitem)=>(
  <h1 className='font-dm font-normal text-base cursor-pointer text-[#767676] border-b border-solid border-[#767676] py-5'>{sitem.name}</h1>
))}
        </Leftitem>
        : <Leftitem subdropdown={item.subcategory ? true : false} title={item.name} color={item.code}>
      
{item.subcategory && 
item.subcategory.map((sitem)=>(
  <h1 className='font-dm font-normal text-base cursor-pointer text-[#767676] border-b border-solid border-[#767676] py-5'>{sitem.name}</h1>
))}
</Leftitem>
))}

  
   </>

   }

   {
    !drop &&
    <>
      {data.map((item,index)=>(
        
          item.subcategory
          ? <Leftitem subdropdown={item.subcategory ? true : false} title={item.name} >
             {item.subcategory && 
  item.subcategory.map((sitem)=>(
    <h1 className='font-dm font-normal text-base cursor-pointer text-[#767676] border-b border-solid border-[#767676] py-5'>{sitem.name}</h1>
  ))}
          </Leftitem>
          : <Leftitem subdropdown={item.subcategory ? true : false} title={item.name} color={item.code}>
        
  {item.subcategory && 
  item.subcategory.map((sitem)=>(
    <h1 className='font-dm font-normal text-base cursor-pointer text-[#767676] border-b border-solid border-[#767676] py-5'>{sitem.name}</h1>
  ))}
</Leftitem>
  ))}

     </>
   }
   </div>
   </>
  )
}

export default Sidebarcontent;
