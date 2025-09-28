import React from "react";

interface SectionNameProps {
   name: string;
   id?: string;
}

const SectionName = ({name, id}:SectionNameProps) => {
  return (
  <div id={id} className=" flex gap-4 items-center mb-0">
   <div className=" h-1 w-15 bg-yellow-300">

   </div>
   <p className="text-sm uppercase">{name}</p>
  </div>
)
}

export default SectionName