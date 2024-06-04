import React from 'react'

const Heading = ({title}) => {
  return (
    <div>
      <h2 className='font-dm font-bold text-2xl md:text-[38px] md:mb-12 mb-6'>
{title}
      </h2>
    </div>
  )
}

export default Heading;
