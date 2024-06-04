import React from 'react'

const Image = ({imgsrc,className}) => {
  return (
   <>
   <img className={className} src={imgsrc} alt="src"/>
   </>
  )
}

export default Image;
