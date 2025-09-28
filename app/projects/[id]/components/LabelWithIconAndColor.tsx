import Image from "next/image";
import React from "react";

interface LabelWithIconAndColorProps {
    icon: string;
    alt: string;
    text: string | number;
}


const LabelWithIconAndColor = ({icon, alt, text}: LabelWithIconAndColorProps) => {
  return  <div className=" flex flex-wrap items-center justify-start md:justify-end gap-2">
             <div className=" flex items-center gap-2 p-2 bg-yellow-300">
                <Image src={icon} alt={alt} width={24} height={24} />
                    <p className=" text-sm">{text}</p>
            </div>
        </div>
  
}

export default LabelWithIconAndColor