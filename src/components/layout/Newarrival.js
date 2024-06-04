import React from 'react'
import Container from './Container';
import Heading from './Heading';
import Flex from './Flex';
import Product from './Product';
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const Newarrival = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className="!flex bg-[rgba(0,0,0,.20)] w-14 h-14 rounded-full items-center absolute top-[36%] right-0 justify-center"
            style={{ ...style,
          }}
            onClick={onClick}
          >
            <FaArrowRight className='text-2xl text-black'/>
          </div>
        );
      }

      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
          className="!flex bg-[rgba(0,0,0,.20)] w-14 h-14 rounded-full items-center absolute top-[36%] left-0 justify-center z-50"
          style={{ ...style,
        }}
          onClick={onClick}
        >
          <FaArrowLeft className='text-2xl text-black'/>
        </div>
        );
      }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
   <>
   <div className='md:mt-32 mt-5'>
    <Container>
        <Heading title="New Arrivals"/>
        {/* <Flex className="sm:flex sm:max-lg:flex-wrap md:gap-x-10 sm:max-md:justify-between"> */}
        <Slider {...settings}>
        <div className='md:max-lg:max-w-[345px] sm:max-w-[300px] lg:max-w-[370px]'>
           <Product src="images/p1.png" alt="p1" badge={false}/>
          </div>
          <div className='md:max-lg:max-w-[345px] sm:max-w-[300px] lg:max-w-[370px]'>
           <Product src="images/p2.png" alt="p2" badge={false}/>
          </div>
          <div className='md:max-lg:max-w-[345px] sm:max-w-[300px] lg:max-w-[370px]'>
           <Product src="images/p3.png" alt="p3" badge={false}/>
          </div>
          <div className='md:max-lg:max-w-[345px] sm:max-w-[300px] lg:max-w-[370px]'>
           <Product src="images/p4.png" alt="p4" badge={false}/>
          </div>
          <div className='md:max-lg:max-w-[345px] sm:max-w-[300px] lg:max-w-[370px]'>
           <Product src="images/p4.png" alt="p4" badge={false}/>
          </div>
          </Slider>
        {/* </Flex> */}
    </Container>
   </div>
   </>
  )
}

export default Newarrival;
