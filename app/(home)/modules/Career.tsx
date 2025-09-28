import React from "react";
import Container from "../../../components/Container";
import SectionName from "../../../components/SectionName";
import Image from "next/image";
import worker from '../../../public/scafold_img.jpg'
import dots from '../../../public/dots.png'
import Button from "../../../components/Button";


const Career = () => {
  return (
  <section>
    <Container>
        <SectionName name='career' />
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h2 className=" mb-4 uppercase">join our team!</h2>
                <Image src={worker} alt="worker image" sizes="40vw" width={0} height={0} className=" z-20 h-auto w-fit " />
            </div>
            <div className=" space-y-4 md:mt-22">
                <p className=" text-black">
                At Ken Engineered Heights, we believe our strength lies in our people. We&apos;re building a team of passionate architects, engineers, and innovators who share our commitment to quality, creativity, and excellence.
                <br />
                <br />
                Whether you&apos;re an experienced professional or a young talent eager to grow, we offer opportunities to learn, lead, and make an impact on projects that shape communities.
                Join us and help design, build, and inspire the future.
                </p>
                <Button />
            </div>
            <div className=" relative">
                <Image src={dots} alt="dot image" width={170} height={170} className=" absolute left-0 bottom-0 transform -translate-x-1/2
                translate-y-1/2 hidden md:block" />
            </div>
        </div>
    </Container>
  </section>
)
}

export default Career