import React from "react"
import ServicePageContents from "../modules/ServicePageContents"


const ArchitecturalDesign = () => {
  return <ServicePageContents {...data} />
}

export default ArchitecturalDesign

const data = {

title: "ARCHITECTURAL DESIGN",
subtitle: 'Innovative Designs that Inspire and Endure',
image: "/hero3.jpg",
description: (
  <>
  we design more than just structures—we craft spaces that reflect purpose, beauty, and innovation. Our architectural team combines creativity with technical precision to deliver tailored solutions that are functional, sustainable, and timeless. 
  <br />
  <br />
  Whether residential, commercial, or industrial, every project is guided by a commitment to excellence, ensuring designs that enhance both aesthetics and everyday living.
  </>
),
};

