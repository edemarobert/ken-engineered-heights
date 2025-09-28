import React, { ReactNode } from "react";
import Banner from "../../../modules/Banner";
import SectionSplit from "../../../components/SectionSplit";
import Container from "../../../components/Container";
import Projects from "../../../modules/Projects";
import Image from "next/image";
import Link from "next/link";
import Button from "../../../components/Button";
import { Route } from "../../../types/route";

interface ServicePageContents {
    title: string,
    description: string | ReactNode,
    image: string,
    subtitle: string | ReactNode,
}

const ServicePageContents = ({title, description, image, subtitle}: ServicePageContents) => {
  return <>
    <Banner />
    <SectionSplit>
        <Container>
            <h2 className="mb-8">{title}</h2>
            <p className=" mb-8">{subtitle}</p>
            <div className=" grid grid-cols-1 md:grid-cols-[0.35fr_0.62fr] bg-white">
                <div className=" relative md:h-full h-100">
                    <Image src={image} alt="image" fill className="object-cover" />
                </div>
                <div className=" p-12">
                    <p className=" mb-4">{description}</p>
                    <Link href={`${Route.PROJECTS}`}>
                        <Button>View Projects</Button>
                    </Link>
                </div>
                
            </div>
        </Container>
        <Projects />
    </SectionSplit>
  </>
}

export default ServicePageContents;