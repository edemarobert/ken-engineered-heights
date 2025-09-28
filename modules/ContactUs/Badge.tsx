import React from "react";
import StarImg from "../../public/star.png"
import Image from "next/image";


const Badge = () => {
  return (
    <div className=" flex flex-col sm:flex-row gap-2">
        <div className=" flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
            <Image key={`star${i}`} src={StarImg} alt="star" width={16} height={16} />
        ))}
        </div>
        <p className=" flex text-sm text-white font-bold uppercase">
            25+ successful projects   
        </p>
    </div>

)
}

export default Badge