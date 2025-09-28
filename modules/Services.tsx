import React from "react";
import Link from "next/link";
import Container from "../components/Container";
import { FaArrowRight } from "react-icons/fa";
import SectionName from "../components/SectionName";
import { Route } from "../types/route";

const Services = () => {
  return( 
    <section>
       
        <Container>
            <SectionName name="services" />
            <div className=" grid grid-cols-1 md:grid-cols-3 text-white">
                {data.map((item, index) => {
                    const isSecond = index === 1
                    return(
                        <div key={item.title} className={` flex flex-col justify-between px-4 md:px-5 py-8 md:py-1 space-y-12 ${isSecond ? ' bg-white text-black' : 'bg-yellow-300 text-white'}`}>
                            <h3>0{index + 1}.</h3>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className=" flex justify-between">
                                <Link href={item.href}>
                                    <button className={` border-2 ${isSecond ? ' transition-colors transform duration-300 hover:bg-black border-black' : " border-white hover:bg-yellow-400 transition-colors transform duration-300"} p-4 inline-block`}>
                                        <FaArrowRight size={24} className={`${isSecond ? "hover:text-white transition-colors transform duration-300" : ""}`} />
                                    </button>
                                </Link>
                                <div className={` relative rounded-lg w-16 h-full border-2 ${isSecond ? ' bg-yellow-300 border-yellow-300' : " bg-white border-white"}`}>
                                    <div className={` absolute w-full h-full right-0.5 bottom-0.5 ${isSecond ? " bg-white" : " bg-yellow-300"}`}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Container>
    </section>
)
}

export default Services


const data = [
    {
        title: 'GENERAL CONTRACTING',
        href: Route.GENERAL_CONTRACTING,
        description: 'We offer a full range of services, from pre-construction to closeout '
    },
    {
        title: 'ARCHITECTURAL DESIGN',
        href: Route.ARCHITECTURAL_DESIGN,
        description: 'We design innovative, functional, and sustainable spaces. '
    },
    {
        title: 'INTERIOR DESIGN',
        href: Route.INTERIOR_DESIGN,
        description: 'We create interiors that inspire, comfort, and elevate living.'   
    }
]