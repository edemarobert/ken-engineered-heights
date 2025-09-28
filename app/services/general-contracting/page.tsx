import React from "react";
import ServicePageContents from "../modules/ServicePageContents";



const GeneralContracting = () => {
  return <ServicePageContents {...data} />
}

export default GeneralContracting;

const data = {
      title: "GENERAL CONTRACTING",
      subtitle: 'Comprehensive Construction Solutions from Start to Finish',
      image: "/hero.jpg",
      description: (
        <>
         We provide end-to-end contracting solutions that ensure every project is delivered with precision, quality, and efficiency. Our team manages all aspects of construction—from planning and coordination to execution—while maintaining strict timelines and budgets.
         <br />
         <br />
         With a focus on reliability and excellence, we serve as the single point of accountability, giving our clients peace of mind and results that exceed expectations.
        </>
      ),
    };
    
