import React from "react";
import Image from "next/image";
import LabelWithIcon from "./LabelWithIcon";

interface ProjectProps {
    title: string,
    year: number,
    location: string,
    images: string[] | string
}

const Project = ({ title, year, location, images}: ProjectProps) => {
  return <div className=" shadow-2xl hover:scale-105 hover:opacity-70 hover:shadow-neutral-300 transform transition-transform rounded-lg p-5">
        <div className=" relative h-56 w-full gap- ">
        
            <Image src={images[0]} alt={`project`} fill className="object-cover rounded-lg " />
            <div className=" absolute bottom-1 right-1 gap-2">
                 <div className=" flex gap-1">
                    
                    <LabelWithIcon 
                        text={location} 
                        icon="/location.png" 
                        alt="location" 
                    />
                    <LabelWithIcon 
                        text={year} 
                        icon="/calendar.png" 
                        alt="calendar" 
                    />
                    
            </div>
        </div>
  </div>
    <p className=" mt-2 text-xl font-semibold">{title}</p>
  </div>
}

export default Project;