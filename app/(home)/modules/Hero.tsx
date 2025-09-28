import React from "react";
import Container from "../../../components/Container";
import Button from "../../../components/Button";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import HeroCarosel from "./HeroCarosel";
import Badge from "../../../modules/ContactUs/Badge";

const Hero = () => {
    return(
        
       <div className=" relative h-screen w-full pt-12 md:pt-0 overflow-hidden">
            <HeroCarosel />
           <Container className=" relative z-10 flex flex-col justify-between h-full text-white">
               
                <div className=" my-30">
                   <Badge />
                    <h2 className=" my-4">
                        WE DESIGN AND BUILD WITH <br /> 
                        <span className="text-yellow-300">PRECISION</span>
                    </h2>
                    <p className="mb-8 text-5xl md:max-w-3xl">
                        At Ken Engineered Heights, we design, build, and transform spaces that inspire growth and stand the test of time.
                    </p>
                    <Button />  
                </div>


                <div>
                    <Link href={`/`} className=" inline-block rounded-full p-2 bg-transparent text-white border-2 border-white shadow-sm animate-bounce">
                        <FaArrowDown size='20' />
                    </Link>
                </div>
                
                
           </Container>
       </div>
    );
};

export default Hero;