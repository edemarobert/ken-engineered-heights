import React from "react";
import Banner from "../../modules/Banner";
import Link from "next/link";
import SectionSplit from "../../components/SectionSplit";
import Container from "../../components/Container";
import CompanyHistory from "./modules/CompanyHistory";
import OurEmployees from "./modules/OurEmployees";
import OurManagement from "./modules/OurManagent";
import CoreValues from "../(home)/modules/CoreValues";
import OurVision from "./modules/OurVision";




const page = () => {

  return (
  <>
    <Banner />
    <SectionSplit>
      <Container>
        <h2 className=" uppercase">About Us</h2>
        <div className=" grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 md:gap-16">
          <div className=" space-y-8">
            <CompanyHistory />
            <OurManagement />
            <OurEmployees />
            <OurVision />
          </div>
          <div className=" relative">
          <div className=" sticky top-16">
            <ul className=" hidden md:block space-y-2">
              {Links.map((link, index) => (
                    <li key={index} className=" flex items-center gap-2">
                      <span className=" w-12 h-1 bg-yellow-300"></span>
                      <Link href={`#${link.href}`} className="underline">
                        {link.text}
                      </Link>
                    </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </Container>
    </SectionSplit>
    <CoreValues />
  </>
)
}

export default page



const Links = [
  {
    href: 'company_history',
    text: 'Company History'
  },
  {
    href: 'our_employees',
    text: 'Employees'
  },
  {
    href: "our_management",
    text: 'Management'
  },
  {
    href: 'our_vision',
    text: 'Vision'
  },

  
]