import { ProjetsInterface } from "../types/strapi";


export const fetchProjects = async () => {
    try {
        const response = await fetch(`${process.env.STRAPI_URL}/projects?populate=*`, {
            cache: "no-cache",
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
            }
        })
        const {data}: {data: ProjetsInterface[]} = await response.json();

        return data;
    } catch (error) {
        console.error(error);

        return[];
    };

};