import React from "react"
import Container from "../../../components/Container"
import GsapCounter from "../../../components/GsapCounter"
import SectionName from "../../../components/SectionName"

const AboutUs = () => {
  return (
  <section className="">
    <Container>
        <SectionName name="about us" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-8 md:mb-12 mb-8 pt-3.5 ">
          

          <div className=" grid grid-cols-1 md:grid-cols-2">
          <h2 className=" font-medium text-9xl uppercase"> our team is ready to <br /> <span className=" text-yellow-300">design and build </span> <br /> your dream</h2>
          
          <p className=" text-black text-2xl md:text-sm">
          At Ken Engineered Heights, we design and build spaces that inspire. Based in Uganda, we specialize in architecture, construction, and interior design, delivering modern, functional, and sustainable solutions. Our team is dedicated to quality, innovation, and craftsmanship—turning your vision into reality, from concept to completion.
          </p>

          </div>
         
            <div className=" relative">
              <div className=" absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-95">
              </div>

              <video 
                  src="/kampala.mp4"
                  loop
                  muted
                  autoPlay
                  className="object-cover h-[150px] md:h-[450px] w-full"  
                />
            </div>
            <GsapCounter />
        </div>
    </Container>
  </section>
)
}

export default AboutUs

