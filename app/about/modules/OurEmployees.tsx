"use client"


import React, { useEffect, useRef } from "react";
import SectionName from "../../../components/SectionName";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/all";




gsap.registerPlugin(ScrollTrigger)


const OurEmployees = () => {

    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(sectionRef.current) {
            gsap.from(sectionRef.current, {
                opacity: 0,
                y: 80,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    end: 'bottom 60%',
                    toggleActions: 'play none none reverse'
                }
            })
        }
    }, [])
    

  return (
    <div >
        <SectionName name="Our Employees" id="our_employees" />
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {persons.map((item, index) => (
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

export default OurEmployees



const persons = [
    {
        image: "/person1.jpg",
        name: "Alice Smith",
        position: "Marketing Manager"
    },
    {
        image: "/person2.jpg",
        name: "Bob Johnson",
        position: 'Sales Manager'
    },
    {
        image: '/person3.jpg',
        name: 'Charlie Brown',
        position: 'Operation Manager'
    },
    {
        image: '/person4.jpg',
        name: 'Daisy Lee',
        position: 'HR Manager'
    }
]