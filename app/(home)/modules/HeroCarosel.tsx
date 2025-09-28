'use client'


import React, { useEffect, useState  } from "react"
import Image from "next/image"
import Overlay from "../../../components/Overlay"
import { useRef } from "react"


const images = [

    '/hero.jpg',
    '/hero2.jpg',
    '/hero3.jpg',
    
]
const HeroCarosel = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [offset, setOffset] = useState(0);

    const containerRef = useRef<HTMLDivElement | null>(null)

    const handleImageChange = (newIndex : number) => {
        if(newIndex !== currentImageIndex) {
            setCurrentImageIndex(newIndex)
        }
    }

    useEffect (() => {
        const intervalId = setInterval(() => {
            handleImageChange((currentImageIndex + 1) % images.length )
        }, 4000);
        return() => clearInterval(intervalId);
    }, );


    useEffect(() => {
        if(containerRef.current) {
            const speed = 0.5;
            containerRef.current.style.transform = `translateY(${offset * speed}px)`
        }
    }, [offset])

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY)
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

  return (
    <>


        <div ref={containerRef} className=" absolute inset-0 overflow-hidden">
            {images.map((image, index) => (
                <div key={index} className={`absolute inset-0 transition-all duration-1000 
                ${index === currentImageIndex 
                ? 'opacity-100 scale-105' 
                : 'opacity-0 scale-100' }`}
                style={{
                    transform: `translateY(${(index - currentImageIndex) * 5}%)`
                }}
                >
                    <Image src={image} alt={`corasel image ${index + 1}`} fill className={` object-center object-cover`} priority={index === currentImageIndex} />
                </div>
            ))}
        </div>


        <Overlay />

        <div className=" absolute right-4 bottom-4 z-40">
            <div className=" flex gap-2">
                {images.map((Image, index) => (
                    <button onClick={ () => handleImageChange(index)} key={Image} className={` hidden lg:block w-12 h-1.5 rounded-full transition-all duration-300 shadow ${currentImageIndex === index ?  ' bg-yellow-300' : ' bg-white hover:bg-gray-200'}`} >
                       
                    </button>
                ))}
            </div>
        </div>
    </>
)
}

export default HeroCarosel