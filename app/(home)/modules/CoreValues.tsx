"use client"
import React, { useRef } from "react"
import Image from "next/image";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

const CoreValues = () => {


    const CoreValuesRef = useRef(null);

    // useGSAP (() => {
        
    // }, {}, []);

  return (
  <section className=" bg-neutral-950 text-white ">
     <div className=" grid grid-cols-1 md:grid-cols-3">
        {data.map((item, index) => {
            const isSecondItem = index === 1
            return (
                <div ref={CoreValuesRef} key={item.title} className={`  flex-col items-center p-0 ${isSecondItem && ' bg-yellow-300 text-black'}`}>
                    <div className=" flex flex-col pt-2 items-center gap-4 text-center">


                        <div className={`w-20 h-20 border-2 ${isSecondItem ? 'border-black' : ' border-white'} rounded-full flex items-center justify-center`}>
                            <Image src={item.Image} alt="image" height={34} width={34} />
                        </div>

                       <h3>{item.title}</h3>
                       <p className=" max-w-sm italic">{item.description}</p>
                    </div>
                </div>
            )
        })}
     </div>
  </section>
)
}

export default CoreValues;


const data = [
    {
        Image : '/excellence.png',
        title: 'Excellence',
        description: 'Commiting to superior craftsmanship and attertion to detail in every project, ensuring excptional outcomes that stand the test of time.'
    },
    {
        Image: '/innovation.png',
        title: 'Innovation',
        description: 'Embracing cutting-edge technology and creative solutions to deliver modern, efficient, and sustainable design and construction results.'
    },
    {
        Image: '/customer.png',
        title: 'Customer Focus',
        description: 'Building strong relationships through clear communication, personalized service and a relentless dedication to meet our clients needs.'
    }
]