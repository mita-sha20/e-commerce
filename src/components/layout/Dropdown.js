import React from 'react'


const Dropdown = ({children,className,title,dropref}) => {
  return (
   <>
   <div className={className} 
//    onClick={onClick} 
   ref={dropref}>
    <p>{title}</p>
    {children}
   </div>
   </>
  )
}

export default Dropdown
