import React from 'react'

const Button = ({title}) => {
  return (
   <>
   <div>
    <button className='bg-Primary py-4 px-24 font-dm font-bold text-sm text-white'>
        {title}
    </button>
   </div>
   </>
  )
}

export default Button;
