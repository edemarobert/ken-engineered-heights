import React from "react";
import Container from "../../../../components/Container";
import LabelWithIconAndColor from "../components/LabelWithIconAndColor";
import EmblaCarousel from "../../../../components/Couresal/EmblaCouresel";


interface ProjectSingleProps {
    images:string[];
    title: string;
    description: string;
    location: string;
    year: number;
}


const ProjectSingle = ({images, year, description, location, title}: ProjectSingleProps) => {
  return <section>
    <Container>
        <h3 className=" mb-4">{title}</h3>
        <EmblaCarousel slides={images} isControlVisible = {false} />
        <div className=" grid grid-cols-1 md:grid-cols-[0.8fr_0.2fr]gap-4 md:gap-8 mt-2"> 
            <div className=" flex justify-between md:flex-wrap flex-wrap">
                <p className=" mb-8">{description}</p>
               <div className=" flex gap-4 ">
                 <LabelWithIconAndColor icon="/location.png" alt="location image" text={location} />
                 <LabelWithIconAndColor icon="/calendar.png" alt="calendar image" text={year} />
               </div> 
            </div>
        </div>
    </Container>
  </section>
}

export default ProjectSingle