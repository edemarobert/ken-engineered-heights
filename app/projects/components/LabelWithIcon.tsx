import React from "react";
import Image from "next/image";


interface LabelWithIconProps {
    icon: string,
    text: string | number,
    alt: string
}

const LabelWithIcon = ({icon, alt, text}: LabelWithIconProps) => {
  return  <div className="flex rounded-lg items-center gap-2 p-2 bg-white">
                <Image src={icon} alt={alt} width={24} height={24} />
                <p className=" text-sm">{text}</p>
            </div>
}

export default LabelWithIcon;