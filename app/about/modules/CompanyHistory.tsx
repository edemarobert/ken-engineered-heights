"use client"


import React, { useEffect ,useRef  } from "react";
import SectionName from "../../../components/SectionName";
import gsap from "gsap";

const CompanyHistory = () => {

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out'
    })
  }, [])
  


  return (
  <div ref={sectionRef} className=" mt-5" id="company_history">
    <SectionName name="Our History" id="our_history" />
    <p>
        Ken Engineered Heights was established with a vision to shape Uganda&apos;s skyline through modern architecture and reliable construction. What began as a small team of passionate engineers and architects has grown into a trusted name in the industry, delivering projects that reflect innovation, durability, and excellence.
        </p>
  </div>
) 
}

export default CompanyHistory