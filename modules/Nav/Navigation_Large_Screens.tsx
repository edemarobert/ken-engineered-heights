"use client"


import React, { useState } from "react";
import { useEffect } from "react";
import Container from "../../components/Container";
import Logo from "../../components/Logo";
import Links from "./Links";

const Navigation = () => {

  const [isScrolled, setIsScrolled] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return <nav className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white text-black" : " bg-transparent text-white"}`}>
    <Container>
      <div className=" flex items-center justify-between h-16">
        <Logo />
        <Links />
      </div>
    </Container>
  </nav>
}

export default Navigation;