"use client"


import React, { useRef } from "react";
import SectionName from "../../../components/SectionName";
import Image from "next/image";

const OurManagement = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={sectionRef}>
    <SectionName name="Our Management" id="our_management" />
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {mangers.map((item, index) => (
            <div key={index}>
                <div className=" relative h-80">
                    <Image src={item.image} className=" object-cover object-center rounded-lg" alt="image" fill />
                </div>
                <h3 className=" mt-3">{item.name}</h3>
                <p>{item.position}</p>
            </div>
        ))}
    </div>
</div>

  )
}

export default OurManagement


const mangers = [
  {
    image: '/manager1.jpg',
    name: 'John Doe',
    position: "CEO" 
  },
  {
    image: '/manager2.jpg',
    name: 'John Doe',
    position: "CFO" 
  },
  {
    image: '/manager4.jpg',
    name: 'John Doe',
    position: "CEO" 
  },
  {
    image: '/manager3.jpg',
    name: 'John Doe',
    position: "COO" 
  },

]