import React from "react";
import Container from "../components/Container";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import Logo from "../components/Logo";


const Footer = () => {
  return( 
  <footer className=" bg-neutral-950 text-white py-4 border-t-2 border-neutral-700">
    <Container>
      <div className=" flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
        <Logo />
        <p className=" text-xs text-neutral-400 font-semibold">
         Copyright &copy; {new Date().getFullYear()} all rights reserved. <a href="#" ><span className=" text-yellow-300">Ken Engineered Heights <sup>TM</sup> </span></a> 
        </p>
        <div className=" flex gap-4">
          <a href="#" target="_blank">
            <BsLinkedin size={24} />
          </a>
          <a href="#" target="_blank">
            <BsTwitterX size={24} />
          </a>
          <a href="#" target="_blank">
            <BsFacebook size={24} />
          </a>
          <a href="#" target="_blank">
            <BsInstagram size={24} />
          </a>
          <a href="https://wa.me/256777669990"  rel="noopener noreferrer" target="_blank">
            <BsWhatsapp size={24} />
          </a>
        </div>
      </div>
    </Container>
  </footer>
)
}

export default Footer