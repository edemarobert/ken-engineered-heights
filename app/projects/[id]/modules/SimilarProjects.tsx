import React from "react";
import Container from "../../../../components/Container";
import SectionName from "../../../../components/SectionName";
import Link from "next/link";
import Project from "../../components/Project";
import { Route } from "../../../../types/route"

interface ProjectProps {
    title: string;
    images:string[];
    id: number | string;
    location: string;
    year: number;

}
interface SimilarProjectsProp {
    projects: ProjectProps[] ;
}

const SimilarProjects = ({projects}: SimilarProjectsProp) => {
  return <section>
    <Container>
        <SectionName name="similar projects" />
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {projects.map((project) => (

                <Link key={project.id} href={`${Route.PROJECTS}/${project.id}`}>
                    <Project {...project} />
                </Link>
            ))}
        </div>
    </Container>
  </section>
}

export default SimilarProjects;