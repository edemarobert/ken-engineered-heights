import React from "react";
import Banner from "../../modules/Banner";
import Container from "../../components/Container";
import Link from "next/link";
import SectionSplit from "../../components/SectionSplit";
import Project from "./components/Project";
import Filtering from "./components/Filtering";
import { Route, SearchParams } from "../../types/route";
import PaginationControl from "./components/PaginationControl";
import { fetchProjects } from "../../data/strapi";




const ProjectsPage = async (
    {searchParams}: {searchParams : {[key: string] : string | string[] | undefined}}
) => {

    const data = await  fetchProjects();
    console.log(data);

    const years = projects.map((project) => project.year);
    const locations = projects.map((project) => project.location);


    

    const page =  searchParams[SearchParams.PAGE] ?? '1';
    const perPage = searchParams[SearchParams.PER_PAGE] ?? "6";
    const start = (Number(page) - 1) * Number(perPage);
    const end = start + Number(perPage);
    const totalPages = Math.ceil(projects.length / Number(perPage))

    const filteredProjects = projects.filter((project) => {
        const year = searchParams[SearchParams.YEAR];
        const location =  searchParams[SearchParams.LOCATION];


        if(year && location) {
            return project.year == Number(year) && project.location == location
        } else if(year) {
            return project.year == Number(year)
        } else if(location) {
            return project.location == location
        } else {
            return project
        }
    })

    const paginatedProjects = filteredProjects.slice(start, end);
    const isPaginationVisible = paginatedProjects.length > Number(page);

  return <>
    <Banner />
    <SectionSplit>
        <Container>
            <h1 className=" mb-4 font-extrabold">OUR WORK</h1>
            <Filtering years={years} locations={locations} />
            <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-12">
                {paginatedProjects.map(project => (
                    <Link key={project.title} href={`${Route.PROJECTS}/${project.id}`}>
                       <Project 
                        {...project}
                       />
                    </Link>
                ))}
            </div>

            {isPaginationVisible && (
                    <PaginationControl 
                    page={page}
                    perPage={perPage}
                    hasNextPage={projects.length > end}
                    hasPrevPage={start > 0}
                    totalPages={totalPages}
                />
            )}

            
        </Container>
    </SectionSplit>
  </>
};
export default ProjectsPage;






export const projects = [
    {
        id: "1",
        title: "Project 1",
        year: 2021,
        location: 'Kampala',
        images: [`/hero.jpg`],
        description: "A landmark construction project in Kampala, showcasing modern design and engineering."
    },
    {
        id: '2',
        title: 'Project 2',
        year: 2022,
        location: 'Kampala',
        images: [`/hero.jpg`],
        description: "Residential development in Kampala, providing quality housing solutions."
    },
    {   
        id: '3',
        title: 'Project 3',
        year: 2022,
        location: 'Wakiso',
        images: [`/hero.jpg`],
        description: "Commercial complex in Wakiso, designed for business growth and innovation."
    },
    {
        id: '4',
        title: 'Project 4',
        year: 2023,
        location: 'Wakiso',
        images: [`/hero.jpg`],
        description: "Community center in Wakiso, supporting local events and activities."
    },
    {   id: '5',
        title: 'Project 5',
        year: 2023,
        location: 'Luwero',
        images: [`/hero.jpg`],
        description: "High-rise building in Luwero, blending luxury and sustainability."
    },
    {   
        id: '6',
        title: 'Project 6',
        year: 2024,
        location: 'Luwero',
        images: [`/hero.jpg`],
        description: "Industrial facility in Luwero, optimized for efficiency and safety."
    },
    {
        id: '7',
        title: 'Project 7',
        year: 2025,
        location: 'Mbale',
        images: [`/hero.jpg`],
        description: "Educational institution in Mbale, fostering learning and development."
    },
    {
        id: '8',
        title: 'Project 8',
        year: 2019,
        location: 'Mbale',
        images: [`/hero.jpg`],
        description: "Healthcare center in Mbale, delivering quality medical services."
    },
    {   
        id: '9',
        title: 'Project 9',
        year: 2025,
        location: 'Fort Portal',
        images: [`/hero.jpg`],
        description: "Retail space in Fort Portal, designed for customer convenience."
    },
    {
        id: '10',
        title: 'Project 10',
        year: 2025,
        location: 'Fort Portal',
        images: [`/hero.jpg`],
        description: "Sports complex in Fort Portal, promoting health and fitness."
    },
    {   id: '11',
        title: 'Project 11',
        year: 2020,
        location: 'Soroti',
        images: [`/hero.jpg`],
        description: "Cultural center in Soroti, celebrating arts and heritage."
    },
    {   
        id: '12',
        title: 'Project 12',
        year: 2020,
        location: 'Soroti',
        images: [`/hero.jpg`],
        description: "Technology hub in Soroti, driving innovation and collaboration."
    }
]