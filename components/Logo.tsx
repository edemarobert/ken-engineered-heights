import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Route } from "../types/route";


const Logo = () => {
  return (
    <Link href={`${Route.HOME}`}>
        <Image src='/logo2.png' width={24} height={24} alt="logo image" />
    </Link>
)
}

export default Logo