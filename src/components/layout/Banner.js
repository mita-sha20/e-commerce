import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from './Image';
import { Link } from 'react-router-dom';

const Banner = () => {

  let [dotActive,setDotactive] = useState(0);

    const settings = {
        dots: true,
        beforeChange: (prev, next) => {
          setDotactive(next);
        },
        arrows : false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        infinite: true,
        appendDots: (dots) => (
          <div
            style={{
             position: "absolute",
             top:"50%",
             left:"10%",
             transform:"translateY(-50%)"
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: (i) => (
          <div style={i === dotActive ? {width: "30px",
          borderRight: "3px #262626 solid",
          padding: "10px 0",
          color:"black"} : {width: "30px",
          borderRight: "3px white solid",
          padding: "10px 0",
          color:"black",
          color:'transparent'}}>

           0{i + 1}
          </div>  
      ),
      responsive: [
        {
          breakpoint: 576,
          settings: {
            dots: true,
            appendDots: (dots) => (
              <div
                style={{
                 position: "absolute",
                 top:"50%",
                 left:"2%",
                 transform:"translateY(-50%)"
                }}
              >
                <ul style={{ margin: "0px" }}> {dots} </ul>
              </div>
            ),
            customPaging: (i) => (
              <div style={i === dotActive ? {width: "30px",
              borderRight: "3px #262626 solid",
              color:"black",fontSize:"10px"} : 
              {width: "30px",
              borderRight: "3px white solid",
              color:"black",
              color:'transparent',
              fontSize:"10px"}}>
    
               0{i + 1}
              </div>  
          ),
          }
        },
      ]
      }
      

  return (
   <>
        <Slider {...settings}>
          <Link to="#">
          <div>
            <Image className="block" imgsrc="images/banner.jpg" alt=""/>
          </div>
          </Link>
          <Link to="#">
          <div>
            <Image className="block" imgsrc="images/banner.jpg" alt=""/>
          </div>
          </Link>
          <Link to="#">
          <div>
            <Image className="block" imgsrc="images/banner.jpg" alt=""/>
          </div>
          </Link>
        </Slider>
    
   </>
  )
}

export default Banner;
