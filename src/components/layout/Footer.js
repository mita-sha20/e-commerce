import Container from "./Container";
import React from "react";
import Flex from "./Flex";
import List from "./List";
import Image from "./Image";
import Listitem from "./Listitem";

const Footer = () => {
  return (
    <div className="lg:mt-36 bg-[#F5F5F3] py-14 mt-0">
      <Container>
        <Flex className="lg:flex md:flex">
          <div className="lg:w-[10%] md:w-[20%]">
            <h4 className="mb-4 font-dm text-base font-bold">MENU</h4>
        
          <List className="sm:max-md:flex sm:max-md:justify-between">
            
            <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Home"
                href="#"
              />
             <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Shop"
                href="#"
              />
             <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="About"
                href="#"
              />
             <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Contact"
                href="#"
              />
             <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Journal1"
                href="#"
              /> 
           
            </List>
         
          </div>
          <div className="lg:w-[10%] md:w-[20%]">
            <h4 className="mb-4 font-dm text-base font-bold sm:max-md:mt-5">SHOP</h4>
            <List className="sm:max-md:flex sm:max-md:justify-between">
            <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 1"
                href="#"
              />
             <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 2"
                href="#"
              />
             <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 3"
                href="#"
              />
             <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 4"
                href="#"
              />
             <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 5"
                href="#"
              />
            </List>
          </div>
          <div className="lg:w-[10%] md:w-[20%]">
            <h4 className="mb-4 font-dm text-base font-bold sm:max-md:mt-5">HELP</h4>
            <List className="sm:max-md:flex sm:max-md:justify-between">
            <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Privacy Policy"
                href="#"
              />
             <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Terms & Conditions"
                href="#"
              />
             <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Special E-shop"
                href="#"
              />
             <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Shipping"
                href="#"
              />
             <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Secure Payments"
                href="#"
              />
            </List>
          </div>
          <div className="lg:flex lg:w-[30%] lg:justify-center">
            <div>
              <h4 className="mb-4 font-dm text-base font-bold  sm:max-md:mt-5">
                (052) 611-5711 <br /> company@domain.com
              </h4>
              <p className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
          <div className="lg:w-[40%] sm:max-md:mt-5 md:w-[20%]">
            <Image imgsrc="images/logo.png" />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;