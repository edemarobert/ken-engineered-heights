import React from "react";
import { Route, SearchParams } from "../../types/route";
import { GrInfo, GrPhone, GrProjects, GrServices } from "react-icons/gr";
import Link from "next/link";


interface LinksProps {
    handleLinkClick?: () => void;
}

const Links = ({handleLinkClick}: LinksProps) => {
  return <ul className=" space-y-4 md:space-y-0 md:space-x-4 flex-col md:flex-row md:flex">
    {navLinks.map((links) => {
        return(
            <li key={links.text}>
                <Link onClick={handleLinkClick} href={links.href} className=" flex transition-colors transform duration-200 items-center gap-2 hover:text-yellow-300 text-xl font-medium">
                   <links.icon size={14} className=" text-yellow-300" />
                   <p>{links.text}</p>
                </Link>
            </li>
        )
    })}
  </ul>
}

export default Links;


const navLinks = [
    {
        href: Route.ABOUT,
        text: "About us",
        icon: GrInfo
    },
    {
        href: Route.SERVICES,
        text: "Services",
        icon: GrServices
    },
    {
        href: `${Route.PROJECTS}?${SearchParams}=1&${SearchParams.PER_PAGE}=6`,
        text: "Our Work",
        icon: GrProjects

    },
    {
        href: Route.CONTACT,
        text: "Contact us",
        icon: GrPhone
    }
]