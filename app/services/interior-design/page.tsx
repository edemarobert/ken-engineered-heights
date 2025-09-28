import React from "react"
import ServicePageContents from "../modules/ServicePageContents"


const ArchitecturalDesign = () => {
  return <ServicePageContents {...data} />
}

export default ArchitecturalDesign

const data = {

title: "INTERIOR DESIGN",
subtitle: 'Blending Comfort, Functionality, and Style',
image: "/hero2.jpg",
description: (
  <>
  we create interiors that balance style, comfort, and functionality. Our design team works closely with clients to craft spaces that reflect personality while meeting practical needs. 
  <br />
  <br />
  From residential homes to corporate offices, we blend color, texture, lighting, and layout to transform empty rooms into inspiring environments. Every detail is carefully considered to ensure interiors that are elegant, welcoming, and timeless.
  </>
),
};

