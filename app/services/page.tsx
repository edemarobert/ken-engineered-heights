import React from "react";
import SectionSplit from "../../components/SectionSplit";
import Banner from "../../modules/Banner";
import Achivements from "./modules/Achivements";
import Services from "../../modules/Services";
import Projects from "../../modules/Projects";


const page = () => {
  return < >
    <Banner />
    <SectionSplit>
      <Achivements />
      <Services />
      <Projects />
    </SectionSplit>
  
 
  </>
  
}

export default page