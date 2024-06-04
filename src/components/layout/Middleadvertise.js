import React from 'react'
import Image from './Image';
import Container from './Container';
import { Link } from 'react-router-dom';

const Middleadvertise = () => {
  return (
   <>
   <div className='md:mt-24 mt-4'>
    <Container>
        <Link to="#">
        <Image imgsrc="images/year.jpg" alt=""/>
        </Link>
    </Container>
   </div>
   </>
  )
}

export default Middleadvertise;
