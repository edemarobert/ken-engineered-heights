import SectionSplit from "../../../components/SectionSplit"
import Banner from "../../../modules/Banner"
import { projects } from "../page"
import ProjectSingle from "./modules/ProjectSingle"
import SimilarProjects from "./modules/SimilarProjects"



export default async function Work({params}: {params: {id: string | string[]}}) {

    const project = projects.find(projects => projects.id === String(params.id));
    const similarProjects = projects.filter(p => p.location === project?.location && p.id !== project?.id.slice(0, 3))

    return <>
        <Banner />
        <SectionSplit>
            {project && (
                <ProjectSingle {...project}  />   
            )}
            {similarProjects.length > 0 && (
                <SimilarProjects projects={similarProjects} />
            )} 
            
        </SectionSplit>
    </>
};