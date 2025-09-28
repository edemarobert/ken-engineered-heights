import React from "react";
import Container from "../components/Container";
import SectionName from "../components/SectionName";
import EmblaCarousel from "../components/Couresal/EmblaCouresel";

const images = [
    '/hero.jpg',
    '/hero2.jpg',
    '/hero3.jpg'
]

const Projects = () => {
  return ( 
  <section>
    <Container>
        <SectionName name="projects" />
        <EmblaCarousel slides={images} /> 
    </Container>
  </section>
)
}

export default Projects