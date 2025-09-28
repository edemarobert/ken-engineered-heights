import React from "react";
import Image from "next/image";
import banner from '../public/hero2.jpg'
import Overlay from "../components/Overlay";
import Container from "../components/Container";
import BreadCrumbs from "../components/BreadCrumbs";



const Banner = () => {
  return (
  <div className=" relative w-full h-[260px] md:h-[100px]">
    <Image src={banner} alt="baner image" fill className=" object-cover" />
    <Overlay />
    <div className=" absolute bottom-4 left-0 w-full h-auto">
      <Container>
        <BreadCrumbs />
      </Container>
    </div>
  </div>
)
}

export default Banner