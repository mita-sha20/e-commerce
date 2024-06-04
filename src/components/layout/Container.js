import React from 'react'

const Container = ({children}) => {
  return (
  <>
   <div className='max-width-container mx-auto p-2.5'>
    {children}
   </div>
  </>
  )
}

export default Container;
