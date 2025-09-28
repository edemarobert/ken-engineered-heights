"use client"

import React , {useEffect, useState} from "react";
import Logo from "../../components/Logo";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Container from "../../components/Container";
import Links from "./Links";

const Navigation = () => {

    const [isOpen, setIsOPen] = useState(false);
   


    const toggleMenu = () => {
        setIsOPen((prev) => !prev);
    }    

    useEffect(() => {
      if(isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      return () => {
        document.body.style.overflow = "auto";
      } 
    }, [isOpen])

    const handleLinkClick = () => {
        setIsOPen(false);
    }
    

  return <>
    <nav className={`container mx-auto px-4 fixed top-0 left-0 right-0 flex justify-between items-center h-16 bg-neutral-100 md:hidden z-50`}>
        <Logo />
        <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
    </nav>
    {isOpen && (
        <div className=" fixed top-16 left-0 right-0 bottom-0 bg-neutral-100 z-50">
            <Container>
                <div className="flex justify-center mt-8">
                    <Links handleLinkClick={handleLinkClick} />
                </div>
            </Container>
        </div>
    )}
  </>
}

export default Navigation;