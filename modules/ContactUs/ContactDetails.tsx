import React from "react";
import Image from "next/image";
import award from "../../public/award.png"
import Badge from "./Badge";

const ContactDetails = () => {
  return (
  <div>
    <div className=" relative w-15 h-15">
        <Image src={award} alt="award image" fill className=" object-cover rounded-full" />
       
    </div>
    <h3 className=" my-4">Contact Us</h3>
        <p className=" text-lg mb-4">
          We are here to help with your project. Contact us for a personalized offer
        </p>
        <Badge />
  </div>
)
}

export default ContactDetails