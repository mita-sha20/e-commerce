import React from 'react'
import Sidebarcontent from './Sidebarcontent';
import { category,colors,brands,price } from '../../data/data';

const Leftsidebar = () => {
  return (
   <>
   <div>
      <Sidebarcontent dropdown={true} droptitle="Shop By Category" data={category}/>
      <Sidebarcontent dropdown={false} droptitle="Shop By Color" data={colors}/>
      <Sidebarcontent dropdown={true} droptitle="Shop By Brand" data={brands}/>
      <Sidebarcontent dropdown={true} droptitle="Shop By Price" data={price}/> 
   </div>
   </>
  )
}

export default Leftsidebar;
