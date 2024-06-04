import React from 'react'
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from './Product';
import Flex from './Flex';
import Productdata from './Productdata';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
    { currentItems &&
      Productdata.map((item,i)=>(
        <div key={i} className='md:w-[49%] lg:w-[32%]'>
          {item.product}
        </div>
      ))
    }
      {/* {currentItems &&
        currentItems.map((item,index) => (
          <div className='md:w-[49%] lg:w-[32%]'>
             <Product key={index} src="images/p1.png" alt="p1" badge={false}/>
          </div>
        ))} */}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  
    
  const [itemOffset, setItemOffset] = useState(0);
  const [itemselect,setitemselect] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
   
    setitemselect(event.selected);
    setItemOffset(newOffset);
  };

  return (
    <>
    <Flex className="md:flex md:flex-wrap md:justify-between">
    <Items currentItems={currentItems} />
    </Flex>
      
      <ReactPaginate
        breakLabel="......."
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        previousClassName="hidden"
        nextClassName="hidden"
        pageClassName="inline-block border border-solid border-[#F0F0F0] py-2 px-3.5 font-dm font-normal font-sm"
        containerClassName="flex flex-wrap gap-x-3.5 mt-12 gap-y-3.5 md:gap-y-0"
        activeClassName="inline-block border border-solid border-[#F0F0F0] py-2 px-3.5 font-dm font-normal font-sm bg-black text-white"
      />
        <p className='lg:absolute lg:bottom-0 lg:right-0 font-dm font-normal mt-2.5 lg:mt-0 text-sm text-[#767676]'>Products from {itemOffset} to {itemOffset + itemsPerPage} of {items.length}</p>
    </>
  );
}

export default Pagination;
